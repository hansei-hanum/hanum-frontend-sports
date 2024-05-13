import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { Logs, MyRankBar, Spinner } from 'src/components';
import { pointIcon } from 'src/assets';
import { colors } from 'src/styles';
import { useGetBettingHistory } from 'src/hooks';

import * as S from './styled';

export const PointPage: React.FC = () => {
  const { data, isLoading } = useGetBettingHistory();

  return (
    <S.MyPointBox>
      {isLoading ? (
        <S.LoadingWrapper>
          <Spinner size="40px" color={colors.placeHolder} />
        </S.LoadingWrapper>
      ) : data ? (
        <>
          <div>
            <S.Description>교내스포츠한마당 포인트</S.Description>
            <S.MyPoint>
              <p>{data.data.amount.toLocaleString()}</p>
              <img width={35} src={pointIcon} alt="" />
            </S.MyPoint>
          </div>
          <MyRankBar>
            <S.RankBarLeft>
              <p>현재 내 포인트는</p>
              <S.MyRank>전교 {data.data.rank}위!</S.MyRank>
            </S.RankBarLeft>
            <S.RankBarRight>
              <IoIosArrowForward size={20} color={colors.placeHolder} />
            </S.RankBarRight>
          </MyRankBar>
          {data.data.history.length < 0 ? (
            <Logs history={data.data.history} />
          ) : (
            <S.NoDataText>아직 포인트를 획득한 내역이 없어요</S.NoDataText>
          )}
        </>
      ) : (
        <S.LoadingWrapper>
          잠시 문제가 생겼어요 <br />
          조금만 기다려 주세요.
        </S.LoadingWrapper>
      )}
    </S.MyPointBox>
  );
};
