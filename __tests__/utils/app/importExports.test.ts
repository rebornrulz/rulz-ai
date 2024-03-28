// ...

import { OpenAIModels, OpenAIModelID } from "@/types/openai";
import { DEFAULT_SYSTEM_PROMPT, DEFAULT_TEMPERATURE } from "@/utils/app/const";
import { isLatestExportFormat, cleanData } from "@/utils/app/importExport";

describe('isLatestExportFormat', () => {
  it('should return true for the latest format', () => {
    const obj = {
      version: 4,
      history: [],
      folders: [],
      prompts: [],
    };
    expect(isLatestExportFormat(obj)).toBe(true);
  });

  it('should return false for non-latest formats', () => {
    const obj = {
      version: 3,
      history: [],
      folders: [],
      prompts: [],
    };
    expect(isLatestExportFormat(obj)).toBe(false);
  });
});

describe('cleanData Functions', () => {
  // ...

  describe('cleaning v3 data', () => {
    it('should return the latest format', () => {
      const data = {
        version: 3,
        history: [
          {
            id: '1',
            name: 'conversation 1',
            messages: [
              {
                role: 'user',
                content: "what's up ?",
              },
              {
                role: 'assistant',
                content: 'Hi',
              },
            ],
          },
        ],
        folders: [
          {
            id: '1',
            name: 'folder 1',
            type: 'chat',
          },
        ],
      };
      const obj = cleanData(data);
      expect(isLatestExportFormat(obj)).toBe(true);
      expect(obj).toEqual({
        version: 4,
        history: [
          {
            id: '1',
            name: 'conversation 1',
            messages: [
              {
                role: 'user',
                content: "what's up ?",
              },
              {
                role: 'assistant',
                content: 'Hi',
              },
            ],
            model: OpenAIModels[OpenAIModelID.GPT_3_5],
            prompt: DEFAULT_SYSTEM_PROMPT,
            temperature: DEFAULT_TEMPERATURE,
            folderId: null,
          },
        ],
        folders: [
          {
            id: '1',
            name: 'folder 1',
            type: 'chat',
          },
        ],
        prompts: [],
      });
    });
  });

  // ...

  describe('cleaning v4 data', () => {
    // ...

    it('should return the latest format', () => {
      const data = {
        version: 4,
        history: [
          {
            id: '1',
            name: 'conversation 1',
            messages: [
              {
                role: 'user',
                content: "what's up ?",
              },
              {
                role: 'assistant',
                content: 'Hi',
              },
            ],
            model: OpenAIModels[OpenAIModelID.GPT_4],
            prompt: DEFAULT_SYSTEM_PROMPT,
            temperature: DEFAULT_TEMPERATURE,
            folderId: null,
          },
        ],
        folders: [
          {
            id: '1',
            name: 'folder 1',
            type: 'chat',
          },
        ],
        prompts: [
          {
            id: '1',
            name: 'prompt 1',
            description: '',
            content: '',
            model: OpenAIModels[OpenAIModelID.GPT_4],
            folderId: null,
          },
        ],
      };

      const obj = cleanData(data);
      expect(isLatestExportFormat(obj)).toBe(true);
      expect(obj).toEqual({
        version: 4,
        history: [
          {
            id: '1',
            name: 'conversation 1',
            messages: [
              {
                role: 'user',
                content: "what's up ?",
              },
              {
                role: 'assistant',
                content: 'Hi',
              },
            ],
            model: OpenAIModels[OpenAIModelID.GPT_4],
            prompt: DEFAULT_SYSTEM_PROMPT,
            temperature: DEFAULT_TEMPERATURE,
            folderId: null,
          },
        ],
        folders: [
          {
            id: '1',
            name: 'folder 1',
            type: 'chat',
          },
        ],
        prompts: [
          {
            id: '1',
            name: 'prompt 1',
            description: '',
            content: '',
            model: OpenAIModels[OpenAIModelID.GPT_4],
            folderId: null,
          },
        ],
      });
    });
  });
});
