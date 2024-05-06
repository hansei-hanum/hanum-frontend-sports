import React from 'react';

import { SubmitBox, PredictBox } from '../../common';

import * as S from './styled';

export const Predict: React.FC = () => {
    return (
        <section>
            <S.PredictSectionContainer>
                <S.SituationBox>
                    <S.ColorBox />
                    예측 진행중
                </S.SituationBox>
                <S.ExplainBox>
                    이번 경기 결과를 <br />
                    예측해주세요!
                </S.ExplainBox>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'space-between',
                        paddingTop: '70px',
                    }}
                >
                    <S.PredictContainer>
                        <PredictBox />
                    </S.PredictContainer>
                    <SubmitBox />
                </div>
            </S.PredictSectionContainer>
        </section>
    );
};
