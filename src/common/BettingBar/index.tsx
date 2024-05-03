import React, { useState } from 'react';
import * as S from './styled';
import { Bet } from '../../constants/bet';

export const BettingBar: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleAmountSelection = (percentage: number) => {
        const calculatedAmount = (Bet.data.amount * percentage) / 100;
        setInputValue(calculatedAmount.toString());
    };
    return (
        <S.BettingContainer>
            <S.BettingBox
                type="number"
                placeholder="베팅할 금액을 입력해주세요."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <S.BettingAmountContainer>
                <S.BettingAmountBox onClick={() => handleAmountSelection(25)}>25%</S.BettingAmountBox>
                <S.BettingAmountBox onClick={() => handleAmountSelection(50)}>50%</S.BettingAmountBox>
                <S.BettingAmountBox onClick={() => handleAmountSelection(75)}>75%</S.BettingAmountBox>
                <S.BettingAmountBox onClick={() => handleAmountSelection(100)}>100%</S.BettingAmountBox>
            </S.BettingAmountContainer>
        </S.BettingContainer>
    );
};
