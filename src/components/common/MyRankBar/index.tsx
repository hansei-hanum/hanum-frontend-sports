import React from "react";
import * as S from "./styled";
import { IoIosArrowForward } from "react-icons/io";
import pointIcon from "../../../assets/icons/point.png";

export const MyRankBar: React.FC = () => {
  return (
    <S.MyRankContainer>
      <S.RankBarLeft>
        <S.MyRank>12위</S.MyRank>
        <S.MyName>박찬영 (나)</S.MyName>
      </S.RankBarLeft>
      <S.RankBarRight>
        <S.MyPoint></S.MyPoint>
        <S.RankBarIcon>500</S.RankBarIcon>
        <S.RankBarIcon>
          <img width={25} src={pointIcon} alt="" />
        </S.RankBarIcon>
        <S.RankBarIcon>
          <IoIosArrowForward size={20} color="gray" />
        </S.RankBarIcon>
      </S.RankBarRight>
    </S.MyRankContainer>
  );
};
