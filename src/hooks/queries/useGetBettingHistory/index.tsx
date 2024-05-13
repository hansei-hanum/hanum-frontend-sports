import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { APIErrorResponse, APIResponse } from 'src/api';
import { GetBettingHistoryResponse, getBettingHistory } from 'src/api/getBettingHistory';
import useAuthStore from 'src/stores/auth';

import { keys } from '../keys';

export const useGetBettingHistory = (): UseQueryResult<
  APIResponse<GetBettingHistoryResponse>,
  AxiosError<APIErrorResponse>
> => {
  const { token } = useAuthStore();

  return useQuery({
    queryKey: keys.bettingHistory,
    queryFn: getBettingHistory,
    enabled: token !== null,
  });
};
