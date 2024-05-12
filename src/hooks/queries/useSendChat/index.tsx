import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { APIResponse, sendChat, SendChatValue } from 'src/api';

import { keys } from '../keys';

export const useSendChat = (): UseMutationResult<APIResponse<null>, AxiosError<APIResponse<void>>, SendChatValue> => {
  return useMutation({
    mutationKey: keys.sendChat,
    mutationFn: sendChat,
  });
};
