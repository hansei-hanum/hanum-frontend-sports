import React, { useState } from 'react';

import { SubmitButton, BettingBar, MyPointBox } from '@common';

import * as S from './styled';

export const Betting: React.FC = () => {
    const [isInputValueBig, setIsInputValueBig] = useState(false);
    const [isHundred, setIsHundred] = useState(false);
    return (
        <section>
            <S.BettingSectionContainer>
                <S.SituationBox>
                    <S.ColorBox />
                    예측 진행중
                </S.SituationBox>
                <S.ExplaneBox>
                    <S.ExplaneBox>예측에 사용할 포인트를</S.ExplaneBox>
                    <S.ExplaneBox>입력해 주세요</S.ExplaneBox>
                </S.ExplaneBox>
                <MyPointBox />
                <S.BettingContainer>
                    <BettingBar setIsInputValueBig={setIsInputValueBig} setIsHundred={setIsHundred} />
                </S.BettingContainer>
                <S.SubmitContainer>
                    <SubmitButton isChangeColor={isInputValueBig || isHundred} />
                </S.SubmitContainer>
            </S.BettingSectionContainer>
        </section>
    );
};
