import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { APIErrorResponse, APIResponse } from 'src/api';
import { GetBettingHistoryResponse, getBettingHistory } from 'src/api/getBettingHistory';

import { keys } from '../keys';

export const useGetBettingHistory = (): UseQueryResult<
  APIResponse<GetBettingHistoryResponse>,
  AxiosError<APIErrorResponse>
> => {
  return useQuery({
    queryKey: keys.bettingHistory,
    queryFn: getBettingHistory,
  });
};
