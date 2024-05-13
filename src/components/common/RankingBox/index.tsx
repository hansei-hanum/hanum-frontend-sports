import React from 'react';

import { pointIcon } from 'src/assets';
import { formatNumber } from 'src/utils';

import * as S from './styled';

export interface RankingBoxProps {
  rank: number;
  name: string;
  dept: string;
  point: number;
}

export const RankBox: React.FC<RankingBoxProps> = ({ rank, name, dept, point }) => {
  return (
    <S.RankingBox rank={rank}>
      <S.RankBarLeft>
        <S.Rank rank={rank}>{rank}위</S.Rank>
        <S.IntroBox>
          <S.Name rank={rank}>{name}</S.Name>
          <S.Dept>{dept}</S.Dept>
        </S.IntroBox>
      </S.RankBarLeft>
      <S.RankBarRight>
        <S.RankBarIcon>{formatNumber(point)}</S.RankBarIcon>
        <S.RankBarIcon>
          <img width={25} src={pointIcon} alt="" />
        </S.RankBarIcon>
      </S.RankBarRight>
    </S.RankingBox>
  );
};
