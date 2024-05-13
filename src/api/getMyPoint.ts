import { API_SUFFIX, instance } from './api';

export interface GetMyPointResponse {
  amount: number;
}

export const getMyPoint = async () => {
  const { data } = await instance.get(API_SUFFIX.MY_POINT);

  return data;
};
