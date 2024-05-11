import React from 'react';
import * as S from './styled';
import { PredictLogBox } from '@common';

export const PredictLogs: React.FC = () => {
    return (
        <S.PredictLogsContainer>
            <S.PredictLogsBox>
                <PredictLogBox />
            </S.PredictLogsBox>
        </S.PredictLogsContainer>
    );
};
