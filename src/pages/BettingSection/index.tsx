import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BettingBar, MyPointBox, SubmitButton } from 'src/components';
import { useGetMyPoint } from 'src/hooks';
import { useBettingStore, useLiveGameStore } from 'src/stores';

import * as S from './styled';

export const BettingSection: React.FC = () => {
  const { liveGame } = useLiveGameStore();
  const { betting, setBetting } = useBettingStore();

  const [inputValue, setInputValue] = useState('0');

  const { data, isLoading } = useGetMyPoint();

  const navigate = useNavigate();

  const onClick = () => {
    setBetting({ ...betting, amount: Number(inputValue) });
  };

  useEffect(() => {
    if (!liveGame) {
      navigate('/');
    }
  }, [liveGame]);

  return (
    <S.BettingSectionContainer>
      <S.BettingSectionInnerContainer>
        <S.SituationBox>
          <S.ColorBox />
          예측 진행중
        </S.SituationBox>
        <div>
          <S.Description>
            예측에 사용할 포인트를 <br />
            입력해 주세요
          </S.Description>
          <br />
          <MyPointBox data={data?.data} isLoading={isLoading} />
        </div>
        <BettingBar myPoint={data?.data.amount} inputValue={inputValue} setInputValue={setInputValue} />
      </S.BettingSectionInnerContainer>
      <SubmitButton isDisabled={Number(inputValue) === 0} onClick={onClick} />
    </S.BettingSectionContainer>
  );
};
