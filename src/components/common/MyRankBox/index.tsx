import React from 'react';

import { pointIcon } from 'src/assets';

import * as S from './styled';

export interface MyRankingBoxProps {
  rank: number;
  name: string;
  point: number;
}

export const MyRankBox: React.FC<MyRankingBoxProps> = ({ rank, name, point }) => {
  return (
    <S.MyRankContainer>
      <S.RankBarLeft>
        <S.MyRank>{rank}위</S.MyRank>
        <S.MyName>{name} (나)</S.MyName>
      </S.RankBarLeft>
      <S.RankBarRight>
        <S.MyPoint>{point}</S.MyPoint>
        <img width={20} src={pointIcon} alt="" />
      </S.RankBarRight>
    </S.MyRankContainer>
  );
};
