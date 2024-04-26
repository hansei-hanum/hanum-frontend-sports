import React from 'react';
import * as S from './styled';

export const BettingAmount: React.FC = () => {
    return (
        <S.BettingAmountContainer>
            <S.BettingAmountBox>25%</S.BettingAmountBox>
            <S.BettingAmountBox>50%</S.BettingAmountBox>
            <S.BettingAmountBox>75%</S.BettingAmountBox>
            <S.BettingAmountBox>100%</S.BettingAmountBox>
        </S.BettingAmountContainer>
    );
};
