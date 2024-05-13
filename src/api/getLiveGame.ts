import { API_SUFFIX, instance } from './api';
import { GetGameResponse } from './types';

export type GetLiveGameResponse = GetGameResponse;

export const getLiveGame = async () => {
  const { data } = await instance.get(API_SUFFIX.LIVE_GAME);

  return data;
};
