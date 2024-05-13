import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { APIErrorResponse, APIResponse, GetGamesResponse, getGames } from 'src/api';
import useAuthStore from 'src/stores/auth';

import { keys } from '../keys';

export const useGetGames = (): UseQueryResult<APIResponse<GetGamesResponse>, AxiosError<APIErrorResponse>> => {
  const { token } = useAuthStore();
  return useQuery({
    queryKey: keys.games,
    queryFn: getGames,
    refetchInterval: 5000,
    enabled: token !== null,
  });
};
