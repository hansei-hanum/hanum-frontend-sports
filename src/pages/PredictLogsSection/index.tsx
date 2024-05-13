import React from 'react';

import { PredictLogBox, Spinner } from 'src/components';
import { useGetBettingHistory } from 'src/hooks';
import { colors } from 'src/styles';
import { GameStatus } from 'src/api';

import * as S from './styled';

export const PredictLogsSection: React.FC = () => {
  const { data, isLoading } = useGetBettingHistory();

  return (
    <S.PredictLogsContainer>
      {isLoading ? (
        <Spinner size="40px" color={colors.placeHolder} />
      ) : (
        data &&
        data.data.history
          .filter((item) => item.game.status === GameStatus.ENDED)
          .map((item, index) => (
            <>
              <PredictLogBox isButton={false} disabled={false} key={index} data={item} />
            </>
          ))
      )}
    </S.PredictLogsContainer>
  );
};
