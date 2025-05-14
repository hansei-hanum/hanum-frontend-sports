import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BettingBar, MyPointBox, SubmitButton } from 'src/components';
import { useBetting, useGetMyPoint } from 'src/hooks';
import { useBettingStore, useLiveGameStore } from 'src/stores';
import { bettingError } from 'src/constants';

import * as S from './styled';

export const BettingSection: React.FC = () => {
  const { mutate, data: bettingResult, isSuccess, error } = useBetting();

  const { liveGame } = useLiveGameStore();
  const { betting, setBetting, reset } = useBettingStore();

  const [inputValue, setInputValue] = useState(0);

  const { data, isLoading } = useGetMyPoint();

  const navigate = useNavigate();

  const onClick = () => {
    setBetting({ ...betting, amount: inputValue });
    mutate({ id: betting.id, team: betting.team, amount: inputValue });
  };

  useEffect(() => {
    if (!liveGame) {
      navigate('/');
    }
  }, [liveGame]);

  useEffect(() => {
    const errorMessage = error?.response?.data.message;
    if (errorMessage) {
      alert(bettingError[errorMessage] || '알 수 없는 오류가 발생했어요.');
      navigate('/');
    }
    if (isSuccess) {
      alert('예측이 완료되었어요!');
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
