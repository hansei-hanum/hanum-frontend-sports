import React from 'react';

import * as S from './styled';

export interface GameAlertBoxProps {
  children: React.ReactNode;
}

export const GameAlertBox: React.FC<GameAlertBoxProps> = ({ children }) => {
  return (
    <S.GameBoxContainer>
      <S.GameBoxText>{children}</S.GameBoxText>
    </S.GameBoxContainer>
  );
};
