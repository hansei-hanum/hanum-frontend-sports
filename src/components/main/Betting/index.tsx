import React from 'react';

import { SubmitBox } from '../../../common';
import { BettingBar } from '../../../common';
import { BettingAmount } from '../../../common';

import * as S from './styled';

export const Betting: React.FC = () => {
    return (
        <section>
            <S.BettingSectionContainer>
                <S.SituationBox>
                    <S.ColorBox />
                    예측 진행중
                </S.SituationBox>
                <S.ExplaneBox>얼마나 베팅하실 건가요?</S.ExplaneBox>
                <S.BettingContainer>
                    <BettingBar />
                    <BettingAmount />
                </S.BettingContainer>
                <SubmitBox></SubmitBox>
            </S.BettingSectionContainer>
        </section>
    );
};
