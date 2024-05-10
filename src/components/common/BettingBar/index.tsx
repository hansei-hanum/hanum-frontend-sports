import React, { useState } from 'react';
import * as S from './styled';
import { Balance } from '@constants';

interface BettingBarProps {
    setIsInputValueBig: React.Dispatch<React.SetStateAction<boolean>>;
    setIsHundred: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BettingBar: React.FC<BettingBarProps> = ({ setIsInputValueBig, setIsHundred }) => {
    const myPoint = Balance.data.balance;

    const [inputValue, setInputValue] = useState('');
    const [selectedBoxIndex, setSelectedBoxIndex] = useState(-1);

    const handleAmountSelection = (percentage: number, index: number) => {
        if (selectedBoxIndex === index) {
            setInputValue('');
            setSelectedBoxIndex(-1);
        } else {
            const calculatedAmount = (myPoint * percentage) / 100;
            setInputValue(calculatedAmount.toLocaleString());
            setSelectedBoxIndex(index);
        }
    };

    const isInputValueBig = Number(inputValue) > myPoint;
    setIsInputValueBig(isInputValueBig);

    const isHundred = Number(inputValue) % 100 !== 0;
    setIsHundred(isHundred);

    return (
        <S.BettingContainer>
            <S.BettingBox
                type="text"
                placeholder="베팅할 포인트를 입력해주세요."
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const newValue = e.target.value;
                    const numericValue = parseInt(newValue.replace(/[^0-9]/g, ''), 10);
                    setInputValue((isNaN(numericValue) ? 0 : numericValue).toLocaleString());
                }}
            />

            <S.BettingAmountContainer isInputValueBig={isInputValueBig} isHundred={isHundred}>
                {isInputValueBig ? (
                    <S.BettingAmountBox
                        style={{
                            color: 'red',
                        }}
                    >
                        사용 가능한 포인트가 부족합니다.
                    </S.BettingAmountBox>
                ) : (
                    [25, 50, 75, 100].map((percentage, index) => (
                        <S.BettingAmountBox
                            key={index}
                            onClick={() => handleAmountSelection(percentage, index)}
                            style={{
                                color: selectedBoxIndex === index ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)',
                                display: isInputValueBig ? 'none' : 'block',
                            }}
                        >
                            {`${percentage}%`}
                        </S.BettingAmountBox>
                    ))
                )}
            </S.BettingAmountContainer>
        </S.BettingContainer>
    );
};

// : isHundred ? (
//     <S.BettingAmountBox
//         style={{
//             color: 'red',
//         }}
//     >
//         100포인트 단위로만 포인트 사용 가능합니다.
//     </S.BettingAmountBox>
// )
