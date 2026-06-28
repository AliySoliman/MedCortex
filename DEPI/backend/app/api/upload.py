# backend/app/api/upload.py
# ─────────────────────────────────────────────────────────────────────────────
# Upload API
# ─────────────────────────────────────────────────────────────────────────────

from typing import Optional, Dict, Any
from fastapi import APIRouter, UploadFile, File, HTTPException, status, Depends
from sqlalchemy.orm import Session
import uuid

from app.database.database import get_db
from app.models.user import User
from app.api.chat import get_current_user_optional
from app.ai.multimodal.orchestrator import MultimodalOrchestrator
from app.ai.multimodal.enums import ProcessorType
from app.ai.ocr.service import OCRService
from app.ai.vision.service import VisionService

router = APIRouter(prefix="/upload", tags=["Uploads"])

# Instantiate the primary orchestrator
multimodal_engine = MultimodalOrchestrator()


@router.post("", summary="Upload a medical document or image for unified processing")
async def process_upload(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: Optional[User] = Depends(get_current_user_optional),
) -> Dict[str, Any]:
    """
    Ingests a file through the Multimodal Engine.
    Validates, Classifies, Routes to OCR or Vision, Parses into JSON, 
    and returns a UnifiedMedicalContext.
    """
    try:
        file_bytes = await file.read()
        upload_id = str(uuid.uuid4())
        mime_type = file.content_type or "application/octet-stream"
        
        # Phase 1: Core Multimodal Routing and Preprocessing
        context = await multimodal_engine.process_upload(
            upload_id=upload_id,
            filename=file.filename,
            mime_type=mime_type,
            file_bytes=file_bytes
        )

        # Phase 2: Execution based on orchestrator routing
        if context.processor_type == ProcessorType.VISION:
            vision_service = VisionService()
            context = await vision_service.process(context)
        elif context.processor_type == ProcessorType.OCR:
            ocr_service = OCRService()
            context = await ocr_service.process(context)
        else:
            # Text-only uploads or unsupported inputs can still surface the
            # structured multimodal context produced by preprocessing.
            pass
            
        # The result is now structured in context.unified_context.
        # We return it to the frontend. Later, this context can be passed
        # directly into the LangGraph state.
        
        return {
            "status": "success",
            "upload_id": upload_id,
            "unified_context": context.unified_context.model_dump()
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Upload processing failed: {str(e)}"
        )

# Future endpoints
@router.post("/ocr", summary="Force OCR processing")
async def process_ocr(file: UploadFile = File(...)):
    """Bypasses standard routing, forces OCR."""
    raise HTTPException(status_code=501, detail="Not Implemented")

@router.post("/vision", summary="Force Vision processing")
async def process_vision(file: UploadFile = File(...)):
    """Bypasses standard routing, forces Vision."""
    raise HTTPException(status_code=501, detail="Not Implemented")

@router.post("/analyze", summary="Analyze processed context")
async def analyze_context(context_id: str):
    """Triggers LangGraph workflows directly from an existing context."""
    raise HTTPException(status_code=501, detail="Not Implemented")
