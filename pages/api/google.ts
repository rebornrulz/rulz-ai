import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

import { OPENAI_API_HOST } from '@/utils/app/const';
import { cleanSourceText } from '@/utils/server/google';

import { Message } from '@/types/chat';
import { GoogleBody, GoogleSource } from '@/types/google';

import { Readability } from '@mozilla/readability';
import endent from 'endent';
import jsdom, { JSDOM } from 'jsdom';

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const { messages, key, model, googleAPIKey, googleCSEId } =
      req.body as GoogleBody;

    const userMessage = messages[messages.length - 1];
    const query = encodeURIComponent(userMessage.content.trim());

    // Perform any necessary operations with userMessage.content.trim()

    // Perform any necessary operations with filteredSources

    const response = `
      Input:
      ${userMessage.content.trim()}

      Sources:
      ${filteredSources.map((source) => {
        return endent`
          ${source.title} (${source.link}):
          ${source.text}
        `;
      })}

      Response:
      ${answer}
    `;

    const answerMessage: Message = { role: 'user', content: response };

    const answerRes = await fetch(`${OPENAI_API_HOST}/v1/chat/completions`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key ? key : process.env.OPENAI_API_KEY}`,
        ...(process.env.OPENAI_ORGANIZATION && {
          'OpenAI-Organization': process.env.OPENAI_ORGANIZATION,
        }),
      },
      method: 'POST',
      body: JSON.stringify({
        model: model.id,
        messages: [
          {
            role: 'system',
            content: `Use the sources to provide an accurate response. Respond in markdown format. Cite the sources you used as [1](link), etc, as you use them. Maximum 4 sentences.`,
          },
          answerMessage,
        ],
        max_tokens: 1000,
        temperature: 1,
        stream: false,
      }),
    });

    const { choices: choices2 } = await answerRes.json();
    const answer = choices2[0].message.content;

    res.status(200).json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error' });
  }
};

export default handler;