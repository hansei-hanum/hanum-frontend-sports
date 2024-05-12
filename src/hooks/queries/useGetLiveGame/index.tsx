import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { APIErrorResponse, APIResponse, GetLiveGameResponse, getLiveGame } from 'src/api';

import { keys } from '../keys';

export const useGetLiveGame = (): UseQueryResult<APIResponse<GetLiveGameResponse>, AxiosError<APIErrorResponse>> => {
  return useQuery({
    queryKey: keys.getLiveGame,
    queryFn: getLiveGame,
    refetchInterval: 5000,
  });
};
