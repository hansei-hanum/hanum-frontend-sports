import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { pointIcon } from 'src/assets';
import { colors } from 'src/styles';

import * as S from './styled';

interface RankBarProps {
  rank: number;
  name: string;
  point: number;
}

export const MyRankBar: React.FC<RankBarProps> = ({ rank, name, point }) => {
  return (
    <S.MyRankContainer>
      <S.RankBarLeft>
        <S.MyRank>{rank}위</S.MyRank>
        <S.MyName>{name}(나)</S.MyName>
      </S.RankBarLeft>
      <S.RankBarRight>
        <S.MyPoint>{point.toLocaleString()}</S.MyPoint>
        <img width={20} src={pointIcon} alt="" />
        <IoIosArrowForward size={20} color={colors.placeHolder} />
      </S.RankBarRight>
    </S.MyRankContainer>
  );
};
