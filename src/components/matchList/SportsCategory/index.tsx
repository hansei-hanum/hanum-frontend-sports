import React from 'react';

import { SportsEvent } from 'src/constants';
import { useSelectedSportsStore } from 'src/stores';

import * as S from './styled';

export const SportsCategory: React.FC = () => {
  const { setSelectedSport, selectedSport } = useSelectedSportsStore();

  const handleItemClick = (item: string) => {
    if (selectedSport === item) return;
    setSelectedSport({ selectedSport: item });
  };

  return (
    <S.CategoryContainer>
      {SportsEvent.sportEvent.map((item, index) => {
        const isSelected = selectedSport === item;
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
