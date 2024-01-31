import * as z from 'zod';

export const OpenAIModelSchema = z.object({
  id: z.string(),
  azureDeploymentId: z.string().optional(),
  name: z.string(),
  maxLength: z.number(), // max length of a message.
  tokenLimit: z.number(),
});
export type OpenAIModel = z.infer<typeof OpenAIModelSchema>;

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_16K = 'gpt-3.5-turbo-16k',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_3_5_16K_AZ = 'gpt-35-turbo-16k',
  GPT_3_5_0613 = 'gpt-3.5-turbo-0613',
  GPT_3_5_16K_0613 = 'gpt-3.5-turbo-16k-0613',
  GPT_3_5_0301 = 'gpt-3.5-turbo-0301',
  GPT_3_5_1106 ='gpt-3.5-turbo-1106',
  GPT_4 = 'gpt-4',
  GPT_4_0613 = 'gpt-4-0613',
  GPT_4_32K = 'gpt-4-32k-0613',
  GPT_4_0125 = 'gpt-4-turbo-preview',
  GPT_4_1106 = 'gpt-4-1106-preview',
  GPT_4V = 'gpt-4-vision-preview'
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_16K]: {
    id: OpenAIModelID.GPT_3_5_16K,
    name: 'GPT-3.5-16K',
    maxLength: 48000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_16K_AZ]: {
    id: OpenAIModelID.GPT_3_5_16K_AZ,
    name: 'GPT-3.5-16K',
    maxLength: 48000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_3_5_0613]: {
    id: OpenAIModelID.GPT_3_5_0613,
    name: 'GPT-3.5-0613',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_16K_0613]: {
    id: OpenAIModelID.GPT_3_5_16K_0613,
    name: 'GPT-3.5-16K-0613',
    maxLength: 48000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_3_5_0301]: {
    id: OpenAIModelID.GPT_3_5_0301,
    name: 'GPT-3.5-0301',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_1106]: {
    id: OpenAIModelID.GPT_3_5_1106,
    name: 'GPT-3.5-1106',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8912,
  },
  [OpenAIModelID.GPT_4_0613]: {
    id: OpenAIModelID.GPT_4_0613,
    name: 'GPT-4-0613',
    maxLength: 24000,
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K-0613',
    maxLength: 96000,
    tokenLimit: 32768,
  },
  [OpenAIModelID.GPT_4_1106]: {
    id: OpenAIModelID.GPT_4_1106,
    name: 'GPT-4-1106-preview',
    maxLength: 96000,
    tokenLimit: 128000,
  },
  [OpenAIModelID.GPT_4V]: {
    id: OpenAIModelID.GPT_4V,
    name: 'GPT-4-vision-preview',
    maxLength: 96000,
    tokenLimit: 128000,
  },
  [OpenAIModelID.GPT_4_0125]: {
    id: OpenAIModelID.GPT_4_0125,
    name: 'GPT-4-turbo-preview',
    maxLength: 96000,
    tokenLimit: 128000,
  },
};
