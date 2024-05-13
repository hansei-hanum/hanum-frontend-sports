import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { APIErrorResponse, APIResponse, BettingValues, betting } from 'src/api';

import { keys } from '../keys';

export const useBetting = (): UseMutationResult<APIResponse<null>, AxiosError<APIErrorResponse>, BettingValues> => {
  return useMutation({ mutationKey: keys.betting, mutationFn: betting });
};
