import { Conversation, Message } from './chat';
import { FolderInterface } from './folder';
import { OpenAIModel } from './openai';
import { Prompt } from './prompt';

const updatedData = originalData.map((conversation) => {
  const updatedConversation = { ...conversation };

  // Modify the relevant properties in the conversation
  updatedConversation.history.forEach((message) => {
    // Update the message properties or add new properties as needed
    // For example, to update the message timestamp to 2023:
    if (message.timestamp.includes('2021')) {
      message.timestamp = message.timestamp.replace('2021', '2023');
    }
  });

  return updatedConversation;
});

export type SupportedExportFormats =
  | ExportFormatV1
  | ExportFormatV2
  | ExportFormatV3
  | ExportFormatV4;
export type LatestExportFormat = ExportFormatV4;

////////////////////////////////////////////////////////////////////////////////////////////
interface ConversationV1 {
  id: number;
  name: string;
  messages: Message[];
}

export type ExportFormatV1 = ConversationV1[];

////////////////////////////////////////////////////////////////////////////////////////////
interface ChatFolder {
  id: number;
  name: string;
}

export interface ExportFormatV2 {
  history: Conversation[] | null;
  folders: ChatFolder[] | null;
}

////////////////////////////////////////////////////////////////////////////////////////////
export interface ExportFormatV3 {
  version: 3;
  history: Conversation[];
  folders: FolderInterface[];
}

export interface ExportFormatV4 {
  version: 4;
  history: Conversation[];
  folders: FolderInterface[];
  prompts: Prompt[];
}
