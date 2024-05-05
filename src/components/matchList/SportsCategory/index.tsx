import React from "react";
import * as S from "./styled";
import { SportsEvent } from "../../../constants/sportsEvent";
import { selectedSportsAtom } from "../../../atom/selectedSports";
import { useRecoilState } from "recoil";

export const SportsCategory: React.FC = () => {
  const [selectedItem, setSelectedItem] = useRecoilState(selectedSportsAtom);

  const handleItemClick = (item: string) => {
    if (selectedItem.selected === item) return;
    setSelectedItem({ selected: item });
  };

  return (
    <S.CategoryContainer>
      {SportsEvent.sportEvent.map((item, index) => {
        const isSelected = selectedItem.selected === item;
        return (
          <S.CategoryItem
            width={index === 4 ? 80 : 55}
            key={index}
            onClick={() => handleItemClick(item)}
            isSelected={isSelected}
          >
            {item}
          </S.CategoryItem>
        );
      })}
    </S.CategoryContainer>
  );
};
