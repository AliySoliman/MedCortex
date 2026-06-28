# backend/app/ai/multimodal/orchestrator.py
# ─────────────────────────────────────────────────────────────────────────────
# Multimodal Orchestrator
# ─────────────────────────────────────────────────────────────────────────────

import time
from typing import Optional
from app.ai.multimodal.schemas import (
    ProcessingContext,
    UnifiedMedicalContext,
    ProcessingHistoryEntry,
)
from app.ai.multimodal.enums import PipelineStage
from app.ai.multimodal.logger import MultimodalLogger
from app.ai.multimodal.classifier import DefaultClassifier
from app.ai.multimodal.router import DefaultRouter
from app.ai.multimodal.preprocessing import DefaultPreprocessor
from app.ai.multimodal.exceptions import ValidationError


class MultimodalOrchestrator:
    """
    Orchestrates the ingestion, classification, routing, and processing
    of all uploaded files in MedCortex.
    """
    
    def __init__(
        self,
        classifier: Optional[DefaultClassifier] = None,
        router: Optional[DefaultRouter] = None,
        preprocessor: Optional[DefaultPreprocessor] = None
    ):
        self.classifier = classifier or DefaultClassifier()
        self.router = router or DefaultRouter()
        self.preprocessor = preprocessor or DefaultPreprocessor()

    async def process_upload(self, upload_id: str, filename: str, mime_type: str, file_bytes: bytes) -> ProcessingContext:
        """
        Main entrypoint for any uploaded file.
        Returns a ProcessingContext that is ready to be handled by OCR or Vision.
        """
        start_time = time.time()
        MultimodalLogger.log_stage_start(PipelineStage.UPLOAD_RECEIVED, upload_id, {"filename": filename, "mime_type": mime_type})
        
        try:
            # 1. Validation
            self._validate_input(upload_id, file_bytes, mime_type)
            MultimodalLogger.log_stage_complete(PipelineStage.UPLOAD_VALIDATED, upload_id)
            unified_history_entry = ProcessingHistoryEntry(
                stage=PipelineStage.UPLOAD_VALIDATED,
                message="Upload validated",
            )
            
            # 2. Initialization
            unified_context = UnifiedMedicalContext(
                upload_id=upload_id,
                filename=filename,
                mime_type=mime_type
            )
            unified_context.processing_history.append(
                ProcessingHistoryEntry(
                    stage=PipelineStage.UPLOAD_RECEIVED,
                    message="Upload received",
                )
            )
            unified_context.processing_history.append(unified_history_entry)
            
            context = ProcessingContext(
                upload_id=upload_id,
                filename=filename,
                mime_type=mime_type,
                file_bytes=file_bytes,
                unified_context=unified_context
            )

            # 3. Classification
            modality, doc_type, conf = await self.classifier.classify(context)
            context.modality = modality
            context.document_type = doc_type
            context.classification_confidence = conf
            context.processor_type = self.router.route(context)
            context.unified_context.modality = modality
            context.unified_context.classification = doc_type
            context.unified_context.classification_confidence = conf
            context.unified_context.confidence_scores.classification = conf
            context.unified_context.processing_history.append(
                ProcessingHistoryEntry(
                    stage=PipelineStage.CLASSIFICATION_COMPLETED,
                    message=f"Classified as {modality.value}/{doc_type.value}",
                )
            )

            # 4. Preprocessing
            processed_bytes = await self.preprocessor.preprocess(context)
            context.preprocessed_bytes = processed_bytes
            context.unified_context.processing_history.append(
                ProcessingHistoryEntry(
                    stage=PipelineStage.PREPROCESSING_COMPLETED,
                    message="Preprocessing completed",
                )
            )

            # Finish Multimodal Core scope
            # Extraction (OCR/Vision) will be handled in subsequent milestones,
            # but the core orchestrator prepares the context fully up to this point.
            
            processing_time = (time.time() - start_time) * 1000
            context.unified_context.processing_metadata.processing_time_ms = processing_time
            
            return context
            
        except Exception as e:
            MultimodalLogger.log_event(PipelineStage.PIPELINE_FAILED, upload_id, str(e), is_error=True)
            raise
            
    def _validate_input(self, upload_id: str, file_bytes: bytes, mime_type: str) -> None:
        if not file_bytes:
            raise ValidationError("File is empty.")
        # Basic validation placeholder
        # In a real implementation, we would check magic bytes, max size, etc.
