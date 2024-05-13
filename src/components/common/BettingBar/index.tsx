import React, { useState } from 'react';

import { useBettingStore } from 'src/stores';

import * as S from './styled';

interface BettingBarProps {
  myPoint?: number;
  inputValue: string;
  setInputValue: (value: string) => void;
}

export const BettingBar: React.FC<BettingBarProps> = ({ myPoint, inputValue, setInputValue }) => {
  const [isInputValueBig, setIsInputValueBig] = useState(false);
  const [isHundred, setIsHundred] = useState(false);

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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const numericValue = parseInt(newValue.replace(/[^0-9]/g, ''), 10);
    setIsInputValueBig(numericValue > (myPoint || 0));
    setIsHundred(numericValue % 100 !== 0);
    setInputValue((isNaN(numericValue) ? 0 : numericValue).toLocaleString());
  };

  return (
    <S.BettingContainer>
      <S.BettingBox type="text" placeholder="베팅할 포인트를 입력해주세요." value={inputValue} onChange={onChange} />
      <S.BettingAmountContainer isInputValueBig={isInputValueBig} isHundred={isHundred}>
        {isInputValueBig ? (
          <S.BettingAmountBox
            style={{
              color: 'red',
            }}
          >
            사용 가능한 포인트가 모자라요.
          </S.BettingAmountBox>
        ) : isHundred ? (
          <S.BettingAmountBox
            style={{
              color: 'red',
            }}
          >
            100포인트 단위로만 포인트 사용할 수 있어요
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
