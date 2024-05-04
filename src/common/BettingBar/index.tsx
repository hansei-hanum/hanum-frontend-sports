import React, { useState } from 'react';
import * as S from './styled';
import { Bet } from '../../constants/bet';

export const BettingBar: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectedBoxIndex, setSelectedBoxIndex] = useState(-1); // 선택된 박스의 인덱스를 상태로 관리, 초기값은 -1로 설정

    const handleAmountSelection = (percentage: number, index: number) => {
        const calculatedAmount = (Bet.data.amount * percentage) / 100;
        setInputValue(calculatedAmount.toString());
        setSelectedBoxIndex(index); // 선택된 박스의 인덱스를 설정
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
