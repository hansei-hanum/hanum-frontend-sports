import React from 'react';

import { PredictLogBox } from 'src/components';

import * as S from './styled';

export const PredictLogs: React.FC = () => {
  return (
    <S.PredictLogsContainer>
      <S.PredictLogsBox>
        <PredictLogBox />
      </S.PredictLogsBox>
    </S.PredictLogsContainer>
  );
};
