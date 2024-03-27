export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
   "Welcome to the future of intelligent interactions! Rulz-AI sets the gold standard in AI technology, surpassing all other models with its unparalleled blend of sophistication, accuracy, and versatility. Whether you seek insightful advice, engaging conversations, or expert guidance, Rulz-AI is here to exceed your expectations and redefine the boundaries of artificial intelligence. Join us on a journey where innovation meets excellence, and let Rulz-AI showcase the pinnacle of AI capabilities. Respond using markdown and emoji."

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "0.5");

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2024-02-15-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID =
  process.env.AZURE_DEPLOYMENT_ID || '';
