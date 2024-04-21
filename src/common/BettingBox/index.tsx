import React from 'react';
import * as S from './styled';

export const BettingBox: React.FC = () => {
    return (
        <S.BettingContainer>
            <S.HighBetContainer>
                <S.BettingSituationBox>
                    <S.BettingSituation />
                    베팅 진행중
                </S.BettingSituationBox>
                <S.EventBox>🏀농구</S.EventBox>
            </S.HighBetContainer>
            <S.MidBetContainer>현재 베팅 진행중!</S.MidBetContainer>
            <S.LowBetContainer>
                <S.RightDeptBox>
                    <S.RightDeptBox>클라우드보안과</S.RightDeptBox>
                    <S.RightClassBox>2학년 1반</S.RightClassBox>
                </S.RightDeptBox>
                <S.LowBetContainer>vs</S.LowBetContainer>
                <S.LeftDeptBox>
                    <S.LeftDeptBox>클라우드보안과</S.LeftDeptBox>
                    <S.LeftClassBox>2학년 1반</S.LeftClassBox>
                </S.LeftDeptBox>
            </S.LowBetContainer>
        </S.BettingContainer>
    );
};
