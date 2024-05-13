import { API_SUFFIX, instance } from './api';
import { GetGameResponse, TeamType } from './types';

export interface GetBettingHistoryDetail {
  predictionId: number;
  team: TeamType;
  amount: number;
  profit: number;
  game: GetGameResponse;
}

export interface GetBettingHistoryResponse {
  amount: number;
  rank: number;
  history: GetBettingHistoryDetail[];
}

export const getBettingHistory = async () => {
  const { data } = await instance.get(API_SUFFIX.BETTING_HISTORY);

  return data;
};
