import { create } from 'zustand';

import { GetGameResponse } from 'src/api';

export interface LiveGameStore {
  liveGame?: GetGameResponse;
  setLiveGame: ({ game }: { game: GetGameResponse }) => void;
}

export const useLiveGameStore = create<LiveGameStore>((set) => ({
  liveGame: undefined,
  setLiveGame: ({ game }) => {
    set({ liveGame: game });
  },
}));
