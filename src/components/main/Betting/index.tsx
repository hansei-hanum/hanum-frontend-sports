import React from 'react';

import { SubmitBox } from '../../../common';
import { PredictBox } from '../../../common';

import * as S from './styled';

export const Betting: React.FC = () => {
    return (
        <section>
            <S.BettingSectionContainer>
                <S.SituationBox>
                    <S.ColorBox />
                    예측 진행중
                </S.SituationBox>
                <S.ExplaneBox>
                    이번 경기 결과를
                    <p />
                    예측해주세요!
                </S.ExplaneBox>
                <S.BettingContainer>
                    <PredictBox></PredictBox>
                </S.BettingContainer>
                <SubmitBox></SubmitBox>
            </S.BettingSectionContainer>
        </section>
    );
};
