import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { Logs, MyRankBar } from 'src/components';
import { pointIcon } from 'src/assets';
import { Balance } from 'src/constants';
import { colors } from 'src/styles';

import * as S from './styled';

export const PointPage: React.FC = () => {
  const rank = 12;
  return (
    <S.MyPointBox>
      <div>
        <S.Description>교내스포츠한마당 포인트</S.Description>
        <S.MyPoint>
          <p>{Balance.data.balance.toLocaleString()}</p>
          <img width={35} src={pointIcon} alt="" />
        </S.MyPoint>
      </div>
      <MyRankBar>
        <S.RankBarLeft>
          <p>현재 내 포인트는</p>
          <S.MyRank>전교 {rank}위!</S.MyRank>
        </S.RankBarLeft>
        <S.RankBarRight>
          <IoIosArrowForward size={20} color={colors.placeHolder} />
        </S.RankBarRight>
      </MyRankBar>
      <Logs />
    </S.MyPointBox>
  );
};
