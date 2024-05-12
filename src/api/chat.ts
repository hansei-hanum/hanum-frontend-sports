import { API_SUFFIX, instance } from './api';

export interface SendChatValue {
  content: string;
}

export const sendChat = async ({ content }: SendChatValue) => {
  const { data } = await instance.post(API_SUFFIX.CHAT, { content });

  return data;
};
