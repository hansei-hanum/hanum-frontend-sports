import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { APIErrorResponse, APIResponse, GetMyPointResponse, getMyPoint } from 'src/api';

import { keys } from '../keys';

export const useGetMyPoint = (): UseQueryResult<APIResponse<GetMyPointResponse>, AxiosError<APIErrorResponse>> => {
  return useQuery({ queryKey: keys.getMyPoint, queryFn: getMyPoint, refetchInterval: 5000 });
};
