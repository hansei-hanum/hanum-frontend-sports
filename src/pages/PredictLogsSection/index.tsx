import React from 'react';

import { PredictLogBox } from 'src/components';
import { MatchList } from 'src/constants';

import * as S from './styled';

export const PredictLogsSection: React.FC = () => {
  return (
    <S.PredictLogsContainer>
      {MatchList.data.games
        .filter((item) => item.isEnd)
        .map((item, index) => (
          <>
            <PredictLogBox isbutton={false} key={index} scheduleData={item} />
          </>
        ))}
    </S.PredictLogsContainer>
  );
};
