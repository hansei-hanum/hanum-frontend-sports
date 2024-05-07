import React, { useState } from 'react';
import * as S from './styled';
import { Bet } from '../../constants/bet';

export const BettingBar: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectedBoxIndex, setSelectedBoxIndex] = useState(-1);

    const handleAmountSelection = (percentage: number, index: number) => {
        if (selectedBoxIndex === index) {
            setInputValue('');
            setSelectedBoxIndex(-1);
        } else {
            const calculatedAmount = (Bet.data.amount * percentage) / 100;
            setInputValue(calculatedAmount.toString());
            setSelectedBoxIndex(index);
        }
    };

    return (
        <S.BettingContainer>
            <S.BettingBox
                type="number"
                placeholder="베팅할 금액을 입력해주세요."
                value={inputValue}
                onChange={(e: { target: { value: React.SetStateAction<string> } }) => setInputValue(e.target.value)}
            />
            <S.BettingAmountContainer>
                {[25, 50, 75, 100].map((percentage, index) => (
                    <S.BettingAmountBox
                        key={index}
                        onClick={() => handleAmountSelection(percentage, index)}
                        style={{ color: selectedBoxIndex === index ? 'black' : 'gray' }}
                    >
                        {percentage}%
                    </S.BettingAmountBox>
                ))}
            </S.BettingAmountContainer>
        </S.BettingContainer>
    );
};
