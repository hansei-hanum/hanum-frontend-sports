import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BettingBar, MyPointBox, SubmitButton } from 'src/components';
import { useBetting, useGetMyPoint } from 'src/hooks';
import { useBettingStore, useLiveGameStore } from 'src/stores';

import * as S from './styled';

export const BettingSection: React.FC = () => {
  const { mutate, data: bettingResult, isSuccess, error } = useBetting();

  const { liveGame } = useLiveGameStore();
  const { betting, setBetting, reset } = useBettingStore();

  const [inputValue, setInputValue] = useState('0');

  const { data, isLoading } = useGetMyPoint();

  const navigate = useNavigate();

  const onClick = () => {
    setBetting({ ...betting, amount: Number(inputValue) });
    mutate({ id: betting.id, team: betting.team, amount: Number(inputValue) });
  };

  useEffect(() => {
    if (!liveGame) {
      navigate('/');
    }
  }, [liveGame]);

  useEffect(() => {
    if (error?.response?.data.message === 'ALREADY_PREDICTED') {
      alert('이미 예측한 경기입니다.');
      navigate('/');
    }
    if (isSuccess) {
      reset();
      navigate('/');
    }
  }, [bettingResult, error]);

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
