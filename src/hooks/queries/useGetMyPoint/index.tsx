import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { APIErrorResponse, APIResponse, GetMyPointResponse, getMyPoint } from 'src/api';
import useAuthStore from 'src/stores/auth';

import { keys } from '../keys';

export const useGetMyPoint = (): UseQueryResult<APIResponse<GetMyPointResponse>, AxiosError<APIErrorResponse>> => {
  const { token } = useAuthStore();

  return useQuery({ queryKey: keys.getMyPoint, queryFn: getMyPoint, refetchInterval: 5000, enabled: token !== null });
};
