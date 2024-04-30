import { atom } from "recoil";

export interface selectedSportsAtomProps {
  selected: string | null;
}

export const selectedSportsAtom = atom<selectedSportsAtomProps>({
  key: "selectedSports",
  default: {
    selected: "전체",
  },
});
