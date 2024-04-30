import React from "react";
import * as S from "./styled";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";

export interface HeaderProps {
  text: string;
  hasIcon: boolean;
}

export const Header: React.FC<HeaderProps> = ({ text, hasIcon }) => {
  return (
    <S.HeaderContainer>
      <S.HeaderIcon>
        <IoIosArrowBack size={35} />
      </S.HeaderIcon>
      <S.HeaderText>{text}</S.HeaderText>
      {hasIcon ? (
        <S.HeaderIcon>
          <MdOutlinePersonOutline size={35} />
        </S.HeaderIcon>
      ) : (
        <S.HeaderIcon></S.HeaderIcon>
      )}
    </S.HeaderContainer>
  );
};
