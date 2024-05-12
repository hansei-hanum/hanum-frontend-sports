import React from 'react';

import { useAppBridge } from 'src/hooks';

import * as S from './styled';

interface RankBarProps {
  children: React.ReactNode;
}

export const MyRankBar: React.FC<RankBarProps> = ({ children }) => {
  const { goToScreen } = useAppBridge();

  return (
    <S.MyRankContainer onClick={() => goToScreen()}>
      {/* <S.RankBarLeft>
        <S.MyRank>{rank}위</S.MyRank>
        <S.MyName>{name}(나)</S.MyName>
      </S.RankBarLeft>
      <S.RankBarRight>
        <S.MyPoint>{point.toLocaleString()}</S.MyPoint>
        <img width={20} src={pointIcon} alt="" />
        <IoIosArrowForward size={20} color={colors.placeHolder} />
      </S.RankBarRight> */}
      {children}
    </S.MyRankContainer>
  );
};
