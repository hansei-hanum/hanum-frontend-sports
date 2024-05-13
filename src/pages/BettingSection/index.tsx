import React, { useState } from 'react';

import { BettingBar, MyPointBox, SubmitButton } from 'src/components';
import { useLiveGameStore } from 'src/stores';

import * as S from './styled';

export const BettingSection: React.FC = () => {
  const [isInputValueBig, setIsInputValueBig] = useState(false);
  const [isHundred, setIsHundred] = useState(false);

  return (
    <>
      <section>
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
              <MyPointBox />
            </div>
            <BettingBar setIsInputValueBig={setIsInputValueBig} setIsHundred={setIsHundred} />
          </S.BettingSectionInnerContainer>
          <SubmitButton isDisabled={isInputValueBig || isHundred} />
        </S.BettingSectionContainer>
      </section>
    </>
  );
};
