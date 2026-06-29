# MedCortex Multimodal Orchestration Graph Documentation

## Overview

The **Multimodal Orchestration Graph** is a LangGraph workflow that takes any
uploaded medical file (image, PDF, or text) and runs it end-to-end: classify,
route, extract, and enrich. It is the execution backbone of the `/upload`
endpoint.

Routing is **LLM-driven**, not rule-based. An orchestration brain (default:
**Llama 3.3 70B via Groq** — the same model used for RAG) decides the document
type and which processor should extract the clinical content. The brain is
fully pluggable, so any future model/provider of any kind can be added by
configuration alone.

> **Note:** MedCortex has two separate orchestration concerns. This document
> covers the **multimodal upload orchestrator** (file ingestion). The
> conversational pipeline orchestrator in `app/ai/orchestrator/` is a distinct
> system and is not described here.

## Two-phase flow

```
Upload
  │
  ▼
┌──────────────────────────────────────────────────────────────┐
│  PHASE 1 — MultimodalOrchestrator                            │
│  (app/ai/multimodal/orchestrator.py)                         │
│                                                              │
│  1. Validate upload                                          │
│  2. LLM Brain classifies + routes in one call                │
│       GroqOrchestratorBrain (Llama 3.3 70B)                  │
│       → OrchestrationDecision                                │
│         {modality, document_type, processor, confidence}     │
│  3. On brain failure → heuristic fallback                    │
│       (DefaultClassifier + DefaultRouter)                    │
│  4. Preprocess (resize images / pass docs through)           │
│                                                              │
│  Output: ProcessingContext with processor_type set           │
└──────────────────────────────┬───────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────┐
│  PHASE 2 — Multimodal LangGraph                              │
│  (app/ai/graph/multimodal_builder.py)                        │
│                                                              │
│  Executes the routed processor + conditional enrichments     │
│  (see graph architecture below)                              │
└──────────────────────────────────────────────────────────────┘
```

## Graph Architecture

```
ENTRY
  │
  ▼
┌──────────────────────────────────────────────────────────────┐
│  route_node                                                  │
│  Mirrors context.processor_type into state and resolves      │
│  enrichment intent flags (lab? drug?).                       │
└──────────────────────────────┬───────────────────────────────┘
                               │ conditional edge (route_after_route)
          ┌────────────────────┼────────────────────┬─────────────────┐
          ▼                    ▼                     ▼                 ▼
   ┌────────────┐       ┌────────────┐        ┌────────────┐    ┌──────────┐
   │ vision_node│       │  ocr_node  │        │ text_node  │    │ finalize │
   │ Gemini     │       │ PaddleOCR/ │        │ SharedMed- │    │   _node  │
   │ gemini-3.5 │       │ easyocr    │        │ icalParser │    │          │
   │  -flash    │       │ (no LLM)   │        │ (LLM)      │    └────┬─────┘
   └──────┬─────┘       └──────┬─────┘        └──────┬─────┘         │
          │                    │                     │               │
          └────────────────────┼─────────────────────┘               │
                               ▼                                     │
                    ┌─────────────────────┐  conditional (maybe_lab) │
                    │      lab_node       │ ────────────────────────►│
                    │ LabInterpretation   │  (skips if no lab values)│
                    │ Service (rules)     │                          │
                    └──────────┬──────────┘                          │
                               │ conditional (maybe_drug)            │
                    ┌─────────────────────┐                          │
                    │      drug_node      │ ────────────────────────►│
                    │ InteractionChecker  │  (skips if < 2 meds)     │
                    │ (rules, no LLM)     │                          │
                    └──────────┬──────────┘                          │
                               ▼                                     │
                    ┌─────────────────────┐                          │
                    │    finalize_node    │ ◄────────────────────────┘
                    │ Blends confidences, │
                    │ records completion, │
                    │ captures warnings.  │
                    └──────────┬──────────┘
                               ▼
                              END
```

### Key properties

- **Conditional edges drive routing.** The LLM's `processor` decision chooses
  the extraction branch; document type + extracted content gate the lab and
  drug enrichments.
- **Every path reaches `finalize_node`.** A failure in any node (e.g. Vision
  errors) is recorded in `state.error`/metadata as a non-fatal warning — the
  graph still returns a structured result.
- **The graph never hard-fails on classification.** If the LLM brain fails,
  the orchestrator falls back to MIME heuristics before the graph even runs.

## Phase 1 — LLM Orchestration Brain

### `GroqOrchestratorBrain` (default)
`app/ai/multimodal/llm_brain.py`

- **Provider/Model:** Groq / `llama-3.3-70b-versatile` (matches the RAG
  generator in `ClinicalGenerator`).
- **Input:** text-only metadata (filename, MIME type, a MIME-derived modality
  hint). The raw file bytes are **never** sent to the brain — keeping the call
  cheap and provider-agnostic.
- **Output:** strict-JSON `OrchestrationDecision`
  `{modality, document_type, processor, confidence, reasoning}`, validated
  against the `ModalityType` / `DocumentType` / `ProcessorType` enums.
- **Failure modes** (any of these raises `OrchestrationDecisionError`):
  - LLM call fails
  - empty / unparseable JSON
  - unknown enum value

### Heuristic fallback
`app/ai/multimodal/classifier.py` + `router.py`

When the brain raises `OrchestrationDecisionError`, the orchestrator logs a
warning and falls back to the original MIME-based classifier + rule-based
router. `processing_metadata.fallback_used` is set to `True` so the path taken
is always observable.

## Phase 2 — Execution Nodes

| Node | Service | Model / Engine | Purpose |
|------|---------|----------------|---------|
| `vision_node` | `VisionService` | Gemini `gemini-3.5-flash` → `gemini-2.5-flash` | Images + PDFs |
| `ocr_node` | `OCRService` | PaddleOCR / easyocr (local, no LLM) | Scanned documents |
| `text_node` | `SharedMedicalParser` | Gemini `gemini-2.5-flash` → Groq | Plain-text uploads |
| `lab_node` | `LabInterpretationService` | Rules (reference ranges) | Interpret extracted lab values |
| `drug_node` | `InteractionChecker` | Rules (curated pairs) | Pairwise drug-drug interactions |
| `finalize_node` | — | — | Blend confidences, mark complete |

Sync services (`LabInterpretationService`, `InteractionChecker`) are wrapped
with `asyncio.to_thread` so they don't block the event loop.

## Model Usage Summary

| Role | Model | Provider |
|------|-------|----------|
| **Orchestration brain (classify + route)** | `llama-3.3-70b-versatile` | Groq |
| Vision extraction | `gemini-3.5-flash` (fallback `gemini-2.5-flash`) | Gemini |
| Text parsing | `gemini-2.5-flash` (fallback Groq) | Gemini |
| Lab interpretation | — (rules) | — |
| Drug interactions | — (rules) | — |

The orchestration model is registered in the model registry under
`ModelType.ORCHESTRATION`:

```python
from app.ai.providers.model_registry import get_model_registry
get_model_registry().get_default_orchestration_model()
# 'llama-3.3-70b-versatile'
```

## How to Test

### 1. Run the automated test suite
```bash
cd DEPI/backend
python -m pytest tests/ -q
```
Covers the brain (JSON parsing, error/fallback paths), the orchestrator
(LLM success + heuristic fallback), and the graph (vision/text/lab/drug routing).

The dedicated file is `tests/ai/test_orchestration_brain.py`.

### 2. Exercise the graph directly (script)
```python
import asyncio
from app.ai.graph.multimodal_builder import get_multimodal_graph
from app.ai.multimodal.orchestrator import MultimodalOrchestrator

async def run(path, mime):
    with open(path, "rb") as f:
        data = f.read()

    orchestrator = MultimodalOrchestrator()
    context = await orchestrator.process_upload(
        upload_id="demo",
        filename=path,
        mime_type=mime,
        file_bytes=data,
    )

    graph = get_multimodal_graph()
    result = await graph.ainvoke({"context": context})

    print("processor:", context.processor_type.value)
    print("document_type:", context.document_type.value)
    print("fallback_used:", context.unified_context.processing_metadata.fallback_used)
    print("overall_confidence:", result["context"].unified_context.overall_confidence)

asyncio.run(run("report.pdf", "application/pdf"))
```

### 3. Via the API
```bash
curl -X POST http://localhost:8000/upload \
  -F "file=@scan.jpg"
```

### 4. Force the heuristic fallback (no LLM call)
Inject a failing brain to verify the safety net works:
```python
from unittest.mock import MagicMock, AsyncMock
from app.ai.multimodal.decision import OrchestrationDecisionError

failing = MagicMock()
failing.decide = AsyncMock(side_effect=OrchestrationDecisionError("disabled"))
orchestrator = MultimodalOrchestrator(brain=failing)
```

## Routing Decision Examples

### Example 1: Lab report PDF
```json
{ "filename": "cbc.pdf", "mime_type": "application/pdf" }
```
- Brain decision: `document` / `Laboratory Report` / `VISION` @ 0.9
- Graph path: `route → vision → lab → finalize`
- Result: structured lab values + interpreted abnormalities

### Example 2: Prescription image with interacting drugs
```json
{ "filename": "rx.jpg", "mime_type": "image/jpeg" }
```
- Brain decision: `image` / `Prescription` / `VISION` @ 0.9
- Graph path: `route → vision → drug → finalize` (≥2 meds found)
- Result: extracted medications + interaction warnings

### Example 3: Plain-text note
```json
{ "filename": "note.txt", "mime_type": "text/plain" }
```
- Brain decision: `text` / `Unknown` / `TEXT` @ 1.0
- Graph path: `route → text → finalize`
- Result: parsed clinical entities, no OCR/Vision needed

### Example 4: Brain failure
- LLM call fails or returns bad JSON
- Orchestrator falls back to heuristics (e.g. `application/pdf` → `DOCUMENT` → `VISION`)
- Graph runs normally with `fallback_used: true`

## Extending the System

### Add a new orchestration model (any provider)
The brain is model/provider-agnostic. Swap in a different model in one line:
```python
from app.ai.multimodal.llm_brain import GroqOrchestratorBrain

brain = GroqOrchestratorBrain(
    provider_name="gemini",
    model_name="gemini-2.5-flash",
    temperature=0.0,
)
MultimodalOrchestrator(brain=brain)
```
Any provider registered in `ProviderFactory` works. Register new models in
the model registry under `ModelType.ORCHESTRATION` for discoverability.

### Add a brand-new brain type (not an LLM)
Implement the `BaseOrchestratorBrain` interface
(`app/ai/multimodal/interfaces.py`) — e.g. a local rules engine, a fine-tuned
classifier, an embedding-based router — and pass it to the orchestrator:
```python
class MyBrain(BaseOrchestratorBrain):
    async def decide(self, context) -> OrchestrationDecision: ...

MultimodalOrchestrator(brain=MyBrain())
```

### Add a new processor route
1. Add the value to `ProcessorType` (`enums.py`).
2. Add a node in `multimodal_nodes.py`.
3. Wire it in `multimodal_builder.py` via the `route_after_route` map.
4. Teach the brain's prompt about it (the allowed processor values are
   injected from the enum automatically).

### Add a new enrichment (post-extraction)
1. Add a node (e.g. `vitals_node`) in `multimodal_nodes.py`.
2. Add a `maybe_*` conditional-edge function and connect it in the builder.
3. Set its intent flag in `route_node` (like `needs_lab_interpretation`).

## Performance Characteristics

- **Brain latency:** ~0.3–1s (one small Groq call, text-only).
- **Vision branch:** ~8–10s (Gemini multimodal).
- **OCR branch:** varies with document size (local model).
- **Text branch:** ~1–2s (one LLM parse).
- **Enrichments:** < 50ms each (rules-based).
- **Heuristic fallback:** < 10ms (no LLM).

## Integration Points

1. **`/upload` API** (`app/api/upload.py`) — entrypoint; Phase 1 then Phase 2.
2. **Provider Layer** — `ProviderFactory` supplies the brain and extraction models.
3. **Model Registry** — discoverable model metadata, including orchestration models.
4. **UnifiedMedicalContext** — the single structured output consumed by all downstream workflows (LangGraph agent layer, safety layer, reporting).
