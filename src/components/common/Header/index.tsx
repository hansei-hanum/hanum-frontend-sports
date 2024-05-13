import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import * as S from './styled';

export interface HeaderProps {
  text: string;
  hasIcon?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ text, hasIcon }) => {
  return (
    <S.HeaderContainer>
      {hasIcon ? (
        <S.HeaderIcon>
          <IoIosArrowBack size={35} />
        </S.HeaderIcon>
      ) : (
        <S.HeaderIcon />
      )}
      <S.HeaderText>{text}</S.HeaderText>
      <S.HeaderDummyDiv />
    </S.HeaderContainer>
  );
};
