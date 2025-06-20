
import { ApiKey, AIModel } from './types';

export const DEFAULT_API_KEY_VALUE = "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";

export const DEFAULT_API_KEYS: ApiKey[] = [
  { 
    id: DEFAULT_API_KEY_VALUE, 
    name: "Default OpenRouter Key", 
    addedDate: new Date().toISOString() 
  }
];

export const DEFAULT_MODELS: AIModel[] = [
  // Teks Only (LLM Gratis)
  { 
    id: "deepseek/deepseek-chat-v3-0324:free", 
    name: "DeepSeek Chat v3 (Free)", 
    category: "LLM Gratis", 
    isMultimodal: false, 
    enabled: true, 
    description: "DeepSeek's free chat model, version 3 (0324)." 
  },
  { 
    id: "qwen/qwq-32b:free", // Assuming this is qwen/qwen-32b-chat:free or similar. User provided qwq-32b.
    name: "Qwen 32B (Free)", 
    category: "LLM Gratis", 
    isMultimodal: false, 
    enabled: true, 
    description: "Qwen's 32B parameter free model." 
  },
  { 
    id: "mistralai/mistral-7b-instruct:free", 
    name: "Mistral 7B Instruct (Free)", 
    category: "LLM Gratis", 
    isMultimodal: false, 
    enabled: true, 
    description: "Mistral AI's 7B instruct model, free tier." 
  },
  
  // Multimodal
  { 
    id: "google/gemini-2.0-flash-001", // Assuming a slight correction from gemini-2.0-flash-001. Common pattern is gemini-1.5-flash or similar. If 2.0 exists, this is fine.
    name: "Google Gemini 2.0 Flash", 
    category: "Multimodal", 
    isMultimodal: true, 
    enabled: true, 
    description: "Google's fast Gemini 2.0 Flash multimodal model." 
  },
  { 
    id: "deepseek/deepseek-r1-distill-llama-70b", // User provided, assuming this is a valid ID
    name: "DeepSeek R1 Distill Llama 70B", 
    category: "Multimodal", 
    isMultimodal: true, 
    enabled: true, 
    description: "DeepSeek's distilled Llama 70B multimodal model." 
  },
  { 
    id: "openai/gpt-4.1-nano", // User provided, assuming this is a valid ID
    name: "OpenAI GPT-4.1 Nano", 
    category: "Multimodal", 
    isMultimodal: true, 
    enabled: true, 
    description: "OpenAI's GPT-4.1 Nano multimodal model." 
  },
  { 
    id: "anthropic/claude-3-haiku", // User provided. Assuming full ID, e.g., claude-3-haiku-20240307
    name: "Anthropic Claude 3 Haiku", 
    category: "Multimodal", 
    isMultimodal: true, 
    enabled: true, 
    description: "Anthropic's fast and affordable Claude 3 Haiku model." 
  },
];

export const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
export const OPENROUTER_SITE_URL = "https://kangsantri.ai"; // Placeholder URL, update if you have one
export const OPENROUTER_SITE_NAME = "KangSantri AI";

export const MAX_IMAGE_SIZE_MB = 5; // Max image size for upload in MB
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * 1024 * 1024;
