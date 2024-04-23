import React, { useState } from "react";
import * as S from "./styled";
import { SportsEvent } from "../../../constants/sportsEvent";

export const SportsCategoty: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>("전체");

  const handleItemClick = (item: string) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  return (
    <S.CategoryContainer>
      {SportsEvent.sportEvent.map((item, index) => {
        const isSelected = selectedItem === item;
        return (
          <S.CategoryItem
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
