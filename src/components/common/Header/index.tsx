import React from 'react';

import * as S from './styled';

export interface HeaderProps {
  text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <S.HeaderContainer>
      <S.HeaderText>{text}</S.HeaderText>
    </S.HeaderContainer>
  );
};
