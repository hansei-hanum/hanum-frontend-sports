import React, { useState } from 'react';
import * as S from './styled';
import { Balance } from '@constants';

export const BettingBar: React.FC = () => {
    const myPoint = Balance.data.balance;

    const [inputValue, setInputValue] = useState('');
    const [selectedBoxIndex, setSelectedBoxIndex] = useState(-1);

    const handleAmountSelection = (percentage: number, index: number) => {
        if (selectedBoxIndex === index) {
            setInputValue('');
            setSelectedBoxIndex(-1);
        } else {
            const calculatedAmount = (myPoint * percentage) / 100;
            setInputValue(calculatedAmount.toString());
            setSelectedBoxIndex(index);
        }
    };
    const isInputValueBig = Number(inputValue) > myPoint;

    return (
        <S.BettingContainer>
            <S.BettingBox
                type="number"
                placeholder="베팅할 포인트를 입력해주세요."
                value={inputValue}
                onChange={(e: { target: { value: React.SetStateAction<string> } }) => setInputValue(e.target.value)}
            />
            <S.BettingAmountContainer>
                {isInputValueBig && (
                    <S.BettingAmountBox
                        style={{
                            color: 'red',
                            justifyContent: 'flex-start',
                        }}
                    >
                        사용 가능한 포인트가 부족합니다.
                    </S.BettingAmountBox>
                )}
                {[25, 50, 75, 100].map((percentage, index) => (
                    <S.BettingAmountBox
                        key={index}
                        onClick={() => handleAmountSelection(percentage, index)}
                        style={{
                            color: selectedBoxIndex === index ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)',
                            justifyContent: 'flex-end;',
                            flexDirection: 'row',
                            display: isInputValueBig ? 'none' : 'block',
                        }}
                    >
                        {`${percentage}%`}
                    </S.BettingAmountBox>
                ))}
            </S.BettingAmountContainer>
        </S.BettingContainer>
    );
};
