import { create } from 'zustand';

import { TeamType } from 'src/api';

export interface BettingStore {
  betting: {
    team: TeamType | null;
    amount: number;
    id: number | null;
  };
  setBetting: (betting: { team: TeamType | null; amount: number; id: number | null }) => void;
  reset: () => void;
}

const initialState = {
  betting: {
    team: null,
    amount: 0,
    id: null,
  },
};

export const useBettingStore = create<BettingStore>((set) => ({
  ...initialState,
  setBetting: (betting) => {
    set({ betting });
  },
  reset: () => {
    set(initialState);
  },
}));
