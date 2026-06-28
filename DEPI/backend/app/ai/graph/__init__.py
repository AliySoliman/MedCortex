# backend/app/ai/graph/__init__.py
# ─────────────────────────────────────────────────────────────────────────────
# LangGraph Module
# Skeleton for LangGraph-based workflow orchestration
# ─────────────────────────────────────────────────────────────────────────────

from app.ai.graph.builder import build_medical_graph

__all__ = ["build_medical_graph"]
