import { create } from 'zustand';

export interface SelectedSportsStore {
  selectedSport: string;
  setSelectedSport: ({ selectedSport }: { selectedSport: string }) => void;
}

export const useSelectedSportsStore = create<SelectedSportsStore>((set) => ({
  selectedSport: '전체',
  setSelectedSport: ({ selectedSport }) => {
    set({ selectedSport });
  },
}));
