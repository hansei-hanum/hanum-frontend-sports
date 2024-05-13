import { API_SUFFIX, instance } from './api';
import { GetGameResponse } from './types';

export interface GetGamesResponse {
  games: GetGameResponse[];
}

export const getGames = async () => {
  const { data } = await instance.get(API_SUFFIX.GAMES);

  return data;
};
