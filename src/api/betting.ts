import { BettingStore } from 'src/stores';

import { API_SUFFIX, instance } from './api';

export type BettingValues = BettingStore['betting'];

export const betting = async ({ id, team, amount }: BettingValues) => {
  console.log('click', id, team, amount);
  const { data } = await instance.post(`${API_SUFFIX.BETTING}${id}/predictions`, {
    team,
    amount,
  });

  return data;
};
