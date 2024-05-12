import { API_SUFFIX, instance } from './api';

/**
 * WAITING - 아직 시작 안된
 *
 * PREDICTING - 배팅 중
 *
 * PREDICTION_ENDED - 배팅 끝나고 게임 시작 기다리는 애
 *
 * STARTED - 경기 진행 중
 *
 * ENDED - 경기 끝남
 *
 * ** PREDICTION_ENDED에서는 예측 종료, 나머지는 LIVE로 표시 **
 *
 * @enum {string}
 */
export enum GameStatus {
  WAITING = 'Waiting',
  PREDICTING = 'Predicting',
  PREDICTION_ENDED = 'PredictionEnded',
  STARTED = 'Started',
  ENDED = 'Ended',
}

/**
 * 농구
 *
 * 족구
 *
 * 피구
 *
 * @enum {string}
 */
export enum SportGameType {
  Basketball = 'Basketball',
  FootVolleyball = 'FootVolleyball',
  Dodgeball = 'Dodgeball',
}

export interface GetLiveGameTeamProps {
  name: string;
  score: number;
  predictions: {
    ratio: number;
    count: number;
    totalAmount: number;
    multiplier: number;
  };
}

export interface GetLiveGameResponse {
  id: number;
  type: SportGameType;
  teamA: GetLiveGameTeamProps;
  teamB: GetLiveGameTeamProps;
  status: GameStatus;
}

export const getLiveGame = async () => {
  const { data } = await instance.get(API_SUFFIX.LIVE_GAME);

  return data;
};
