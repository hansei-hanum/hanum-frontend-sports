import { create } from 'zustand';

import { TeamType } from 'src/api';

export interface BettingStore {
  betting: {
    team: TeamType | null;
    amount: number;
  };
  setBetting: ({ team, amount }: { team: TeamType | null; amount: number }) => void;
}

const initialState = {
  betting: {
    team: null,
    amount: 0,
  },
};

export const useBettingStore = create<BettingStore>((set) => ({
  ...initialState,
  setBetting: ({ team, amount }) => {
    set({ betting: { team, amount } });
  },
  reset: () => {
    set(initialState);
  },
}));
