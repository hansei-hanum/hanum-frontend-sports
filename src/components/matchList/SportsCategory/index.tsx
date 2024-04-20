import React, { useState } from "react";
import * as S from "./styled";
import { SportsData } from "../../../constants/sportsData";

export const SportsCategoty: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>("전체");

  const handleItemClick = (item: string) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  return (
    <S.CategoryContainer>
      {SportsData.sportEvent.map((item, index) => {
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
