export interface ApiKey {
  id: string; // The API key itself
  name: string; // Optional user-friendly name, defaults to a snippet of the key
  addedDate: string; // ISO date string
}

export type ModelCategory = 'LLM Gratis' | 'Multimodal' | 'Custom LLM' | 'Custom Multimodal';

export interface AIModel {
  id: string; // e.g., "deepseek/deepseek-chat:free"
  name: string; // User-friendly name, e.g., "DeepSeek Chat"
  category: ModelCategory;
  isMultimodal: boolean;
  enabled: boolean; // If the user wants this model in the chat dropdown
  description?: string; // Optional description
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'error';
  content: string | ContentPart[];
  timestamp: string; // ISO date string
  modelId?: string; // Model used for assistant's response
  imagePreviewUrl?: string; // For user messages with images
}

export interface ContentPartText {
  type: 'text';
  text: string;
}

export interface ContentPartImageUrl {
  type: 'image_url';
  image_url: {
    url: string; // Can be a public URL or a data URI
  };
}

export type ContentPart = ContentPartText | ContentPartImageUrl;

export interface ChatSession {
  id: string;
  name: string;
  createdAt: string; // ISO date string for creation
  lastUpdatedAt: string; // ISO date string for last message or rename
  messages: ChatMessage[];
  modelId?: string; // Optional: Model used for the first message or a default for the session
}

export type View = 'chat' | 'settings';
