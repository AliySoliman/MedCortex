# MedCortex Orchestration Graph Documentation

## Overview

The Orchestration Graph is a LangGraph-based workflow that intelligently routes user input to specialized AI pipelines. It serves as the central decision engine for MedCortex, determining which clinical AI components need to be activated based on the user's query, uploaded images, and context.

## Graph Architecture

```
User Input
    │
    ├── user_message: str
    ├── has_image: bool
    ├── image_description: Optional[str]
    ├── conversation_history: List[Dict]
    ├── user_profile: Dict (age, gender, conditions, allergies)
    └── from_audio: bool
    │
    ▼
┌─────────────────────────────────────────────────────────────┐
│                    ORCHESTRATOR NODE                        │
│  Uses: OrchestratorEngine (rule-based routing)              │
│  Model: None (rule-based, no LLM needed)                    │
│                                                             │
│  - Analyzes user message for keywords                       │
│  - Detects urgency (urgent/soon/routine)                    │
│  - Identifies specialist type                               │
│  - Classifies image type (if present)                       │
│  - Determines which pipelines to activate                  │
│                                                             │
│  Outputs:                                                   │
│  - pipelines: List[str] (e.g., ["rag", "vision"])          │
│  - primary_pipeline: str                                   │
│  - urgency: str                                            │
│  - specialist_hint: Optional[str]                          │
│  - routing_reason: str                                     │
│  - image_type: Optional[str]                               │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                 PIPELINE DISPATCHER NODE                     │
│  Routes to specialized pipelines based on orchestration      │
│                                                             │
│  Activated Pipelines:                                       │
│  - rag: Medical knowledge retrieval                         │
│  - vision: Image analysis (lab reports, prescriptions)      │
│  - drug_rag: Drug interaction checking                       │
│  - doctor_finder: Physician/specialist lookup               │
│  - lifestyle: Diet/exercise recommendations                  │
│  - wound_vision: Wound classification                       │
│  - stt_passthrough: Audio input flag                        │
│                                                             │
│  Each pipeline uses its own model (see below)              │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
                          END
                     (Final Response)
```

## How It Works

### 1. Orchestrator Node (Rule-Based Routing)

The orchestrator node uses **no AI model** - it's a deterministic rule-based system that:

- **Keyword Analysis**: Scans user message for medical terms, drug names, lifestyle keywords
- **Urgency Detection**: Matches symptoms against urgent/soon/routine lists
- **Specialist Mapping**: Maps symptoms/conditions to appropriate specialists
- **Image Classification**: Classifies uploaded images (lab_report, wound, xray, etc.)
- **Pipeline Selection**: Determines which specialized pipelines need activation

**No LLM is used here** - this ensures fast, predictable routing without AI latency or cost.

### 2. Pipeline Dispatcher Node

The dispatcher node executes the selected pipelines in the correct order:

- **Sequential Execution**: Pipelines run in the order specified by the orchestrator
- **Result Aggregation**: Collects outputs from all activated pipelines
- **Error Handling**: Gracefully handles pipeline failures

## Model Usage by Pipeline

Each activated pipeline uses its own specialized model:

| Pipeline | Model | Provider | Purpose |
|----------|-------|----------|---------|
| **rag** | `llama-3.3-70b-versatile` | Groq | Medical knowledge retrieval from textbooks |
| **vision** | `gemini-3.5-flash` | Gemini | Multimodal image analysis (lab reports, prescriptions) |
| **drug_rag** | `llama-3.3-70b-versatile` | Groq | Drug interaction checking |
| **doctor_finder** | `llama-3.3-70b-versatile` | Groq | Physician/specialist lookup |
| **lifestyle** | `llama-3.3-70b-versatile` | Groq | Diet/exercise recommendations |
| **wound_vision** | `gemini-3.5-flash` | Gemini | Specialized wound classification |
| **stt_passthrough** | N/A | N/A | Flag only (no model) |

### Model Details

**Primary Chat Model**: `llama-3.3-70b-versatile` (Groq)
- Context: 131,072 tokens
- Temperature: 0.3 (settings.AI_TEMPERATURE_CHAT)
- Timeout: 30.0s (settings.AI_TIMEOUT_CHAT)

**Primary Vision Model**: `gemini-3.5-flash` (Gemini)
- Context: 1,048,576 tokens
- Max Output Tokens: 16,384 (settings.AI_MAX_TOKENS_VISION)
- Timeout: 45.0s (settings.AI_TIMEOUT_VISION)
- Hard Timeout: 90.0s (settings.AI_MAX_TIMEOUT_VISION)

## Configuration

All models are configured in `app/config/settings.py`:

```python
MODEL_CHAT = "llama-3.3-70b-versatile"
MODEL_VISION = "gemini-3.5-flash"
MODEL_VISION_FALLBACK = "gemini-2.5-flash"
MODEL_DOCUMENT = "gemini-2.5-flash"
```

## How to Check

### 1. Check Current Model Configuration

```python
from app.config.settings import get_settings

settings = get_settings()
print(f"Chat Model: {settings.MODEL_CHAT}")
print(f"Vision Model: {settings.MODEL_VISION}")
print(f"Provider: {settings.PROVIDER_CHAT}")
```

### 2. Check Available Models

```python
from app.ai.providers.model_registry import get_model_registry

registry = get_model_registry()
models = registry.list_models()
for model in models:
    print(f"{model.name} ({model.provider}) - {model.description}")
```

### 3. Run Orchestration Graph Test

```python
import asyncio
from app.ai.graph.orchestration_builder import get_orchestration_graph

async def test_orchestration():
    graph = get_orchestration_graph()
    
    initial_state = {
        "user_message": "I have severe chest pain",
        "has_image": False,
        "image_description": None,
        "conversation_history": [],
        "user_profile": {"age": 45, "gender": "male"},
        "from_audio": False,
        "execution_time": 0.0,
        "metadata": {}
    }
    
    result = await graph.ainvoke(initial_state)
    print("Pipelines activated:", result["pipelines"])
    print("Urgency:", result["urgency"])
    print("Specialist:", result["specialist_hint"])
    print("Routing reason:", result["routing_reason"])

asyncio.run(test_orchestration())
```

### 4. Visualize the Graph

```python
from app.ai.graph.orchestration_builder import build_orchestration_graph

graph = build_orchestration_graph()
print(graph.get_graph().print_ascii())
```

## Routing Decision Examples

### Example 1: Urgent Chest Pain
```json
{
  "user_message": "I have severe chest pain radiating to my left arm",
  "has_image": false
}
```
**Output**:
- Pipelines: `["rag", "doctor_finder"]`
- Urgency: `urgent`
- Specialist: `cardiologist`
- Reason: "Chest pain radiating to arm is a cardiac emergency"

### Example 2: Lab Report Upload
```json
{
  "user_message": "Can you read my blood test?",
  "has_image": true,
  "image_description": "document with tabular lab values and reference ranges"
}
```
**Output**:
- Pipelines: `["vision", "lifestyle"]`
- Urgency: `routine`
- Image Type: `lab_report`
- Reason: "User uploaded a lab report — needs image analysis and lifestyle guidance"

### Example 3: Drug Interaction
```json
{
  "user_message": "Does ibuprofen interact with warfarin?",
  "has_image": false
}
```
**Output**:
- Pipelines: `["drug_rag"]`
- Urgency: `routine`
- Primary Pipeline: `drug_rag`
- Reason: "User asks about drug interaction — needs drug interaction check"

## Performance Characteristics

- **Orchestrator Latency**: < 10ms (rule-based, no AI)
- **Total Graph Latency**: Depends on activated pipelines
  - RAG only: ~2-3s
  - Vision only: ~8-10s
  - Multiple pipelines: ~10-15s

## Integration Points

The orchestration graph integrates with:

1. **Multimodal Pipeline**: For image preprocessing and classification
2. **Agent Layer**: For RAG, clinical reasoning, and coordination
3. **Safety Layer**: For response validation (runs after all pipelines)
4. **Memory Layer**: For conversation and patient context
