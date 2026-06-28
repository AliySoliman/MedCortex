# backend/app/ai/providers/provider_factory.py
# ─────────────────────────────────────────────────────────────────────────────
# Provider Factory
# Factory for creating AI provider instances
# ─────────────────────────────────────────────────────────────────────────────

from typing import Optional, Dict, Any
from functools import lru_cache

from app.ai.providers.base import BaseAIProvider
from app.ai.providers.groq_provider import GroqProvider
from app.ai.providers.gemini_provider import GeminiProvider


class ProviderFactory:
    """Factory for creating AI provider instances."""
    
    _providers: Dict[str, type] = {
        "groq": GroqProvider,
        "gemini": GeminiProvider,
    }
    
    @classmethod
    def register_provider(cls, name: str, provider_class: type):
        """Register a new provider class."""
        cls._providers[name.lower()] = provider_class
    
    @classmethod
    def create_provider(cls, provider_name: str, **kwargs) -> BaseAIProvider:
        """Create a provider instance by name."""
        provider_name = provider_name.lower()
        provider_class = cls._providers.get(provider_name)
        
        if not provider_class:
            raise ValueError(f"Unknown provider: {provider_name}. Available: {list(cls._providers.keys())}")
        
        return provider_class(**kwargs)
    
    @classmethod
    def get_default_provider(cls) -> BaseAIProvider:
        """Get the default provider (Groq)."""
        return cls.create_provider("groq")

    @classmethod
    def get_provider(cls, provider_name: str = "groq", **kwargs) -> BaseAIProvider:
        """Backward-compatible alias used by older AI modules."""
        return cls.create_provider(provider_name, **kwargs)


@lru_cache(maxsize=1)
def get_provider(provider_name: str = "groq", **kwargs) -> BaseAIProvider:
    """Get a cached provider instance."""
    return ProviderFactory.create_provider(provider_name, **kwargs)


def get_default_llm(**kwargs):
    """Get the default LLM instance (Groq)."""
    provider = get_provider("groq")
    return provider.get_llm(**kwargs)


def get_default_embeddings(**kwargs):
    """Get the default embeddings instance."""
    provider = get_provider("groq")
    return provider.get_embeddings(**kwargs)
