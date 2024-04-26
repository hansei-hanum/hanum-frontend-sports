import React from 'react';

import { SubmitBox } from '../../../common';
import { PredictBox } from '../../../common';

import * as S from './styled';

export const Predict: React.FC = () => {
    return (
        <section>
            <S.PredictSectionContainer>
                <S.SituationBox>
                    <S.ColorBox />
                    예측 진행중
                </S.SituationBox>
                <S.ExplaneBox>
                    이번 경기 결과를
                    <p />
                    예측해주세요!
                </S.ExplaneBox>
                <S.PredictContainer>
                    <PredictBox></PredictBox>
                </S.PredictContainer>
                <SubmitBox></SubmitBox>
            </S.PredictSectionContainer>
        </section>
    );
};
