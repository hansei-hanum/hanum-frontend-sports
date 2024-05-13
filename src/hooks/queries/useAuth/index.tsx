import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { APIErrorResponse, APIResponse, AuthValues, login, phone } from 'src/api';

import { keys } from '../keys';

export const useAuth = (): UseMutationResult<APIResponse<string | null>, AxiosError<APIErrorResponse>, AuthValues> => {
  return useMutation({
    mutationKey: keys.auth,
    mutationFn: (variables: AuthValues) => {
      if (variables.code === '') {
        return phone({ phone: variables.phone });
      } else {
        return login({ phone: variables.phone, code: variables.code });
      }
    },
  });
};
