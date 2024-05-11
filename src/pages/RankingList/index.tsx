import React from 'react';

import { MyRankBar, RankList } from 'src/components';
import { pointIcon } from 'src/assets';

import * as S from './styled';

export const RankingList: React.FC = () => {
  const rank = 12;
  const name = '김태훈';
  const point = 10;

  return (
    <>
      <MyRankBar>
        <S.RankBarLeft>
          <S.MyRank>{rank}위</S.MyRank>
          <p>{name}(나)</p>
        </S.RankBarLeft>
        <S.RankBarRight>
          <p>{point.toLocaleString()}</p>
          <img width={20} src={pointIcon} alt="" />
        </S.RankBarRight>
      </MyRankBar>
      <RankList />
    </>
  );
};
