import React from "react";
import * as S from "./styled";
import { IoIosArrowForward } from "react-icons/io";
import pointIcon from "../../../assets/icons/point.png";

interface RankBarProps {
  rank: number;
  name: string;
  point: number;
}

export const MyRankBar: React.FC<RankBarProps> = ({ rank, name, point }) => {
  return (
    <S.MyRankContainer>
      <S.RankBarLeft>
        <S.MyRank>{rank}</S.MyRank>
        <S.MyName>{name}(나)</S.MyName>
      </S.RankBarLeft>
      <S.RankBarRight>
        <S.MyPoint>{point}</S.MyPoint>
        <S.RankBarIcon />
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
