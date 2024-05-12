/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { APIResponse, sendChat, SendChatValue } from 'src/api';

export const useSendChat = (): UseMutationResult<APIResponse<any>, AxiosError<APIResponse<void>>, SendChatValue> => {
  return useMutation({
    mutationKey: ['sendChat'],
    mutationFn: sendChat,
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
