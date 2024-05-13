import React from 'react';

import { Header, PredictLogBox, Spinner } from 'src/components';
import { useGetBettingHistory } from 'src/hooks';
import { colors } from 'src/styles';
import { GameStatus } from 'src/api';

import * as S from './styled';

export const PredictLogsSection: React.FC = () => {
  const { data, isLoading } = useGetBettingHistory();

  return (
    <>
      <Header text="예측 내역" />
      <S.PredictLogsContainer>
        {isLoading ? (
          <Spinner size="40px" color={colors.placeHolder} />
        ) : data && data.data.history.length > 0 ? (
          data.data.history
            .filter((item) => item.game.status === GameStatus.ENDED)
            .map((item, index) => (
              <>
                <PredictLogBox isButton={false} disabled={false} key={index} data={item} />
              </>
            ))
        ) : (
          <S.NoDataText>아직 예측한 내역이 없어요</S.NoDataText>
        )}
      </S.PredictLogsContainer>
    </>
  );
};
