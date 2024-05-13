import React, { useState } from 'react';

import * as S from './styled';

interface BettingBarProps {
  setIsInputValueBig: React.Dispatch<React.SetStateAction<boolean>>;
  setIsHundred: React.Dispatch<React.SetStateAction<boolean>>;
  myPoint?: number;
}

export const BettingBar: React.FC<BettingBarProps> = ({ setIsInputValueBig, setIsHundred, myPoint }) => {
  const [inputValue, setInputValue] = useState('0');
  const [selectedBoxIndex, setSelectedBoxIndex] = useState<number | null>(null);

  const handleAmountSelection = (percentage: number, index: number) => {
    if (selectedBoxIndex === index) {
      setInputValue('0');
      setSelectedBoxIndex(null);
    } else if (myPoint) {
      const calculatedAmount = Math.floor((myPoint * percentage) / 100);
      const roundedAmount = Math.round(calculatedAmount / 100) * 100;
      setInputValue(roundedAmount.toLocaleString());
      setSelectedBoxIndex(index);
    }
  };

  const numericValue = parseInt(inputValue.replace(/[^0-9]/g, ''), 10);
  const isInputValueBig = numericValue > (myPoint || 0);
  setIsInputValueBig(isInputValueBig);

  const isHundred = numericValue % 100 !== 0;
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
        ) : isHundred ? (
          <S.BettingAmountBox
            style={{
              color: 'red',
            }}
          >
            100포인트 단위로만 포인트 사용 가능합니다.
          </S.BettingAmountBox>
        ) : (
          [25, 50, 75, 100].map((percentage, index) => (
            <S.BettingAmountBox
              key={index}
              onClick={() => handleAmountSelection(percentage, index)}
              style={{
                color: selectedBoxIndex === index && inputValue !== '0' ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)',
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
