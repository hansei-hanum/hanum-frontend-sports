import React from 'react';

import { Header, PredictLogBox, Spinner } from 'src/components';
import { useGetBettingHistory } from 'src/hooks';
import { colors } from 'src/styles';
import { GameStatus } from 'src/api';

import * as S from './styled';

export const PredictLogsSection: React.FC = () => {
  const { data, isLoading } = useGetBettingHistory();

  const endedGames = data?.data.history.filter((item) => item.game.status === GameStatus.ENDED);

  return (
    <>
      <Header text="예측 내역" />
      <S.PredictLogsContainer>
        {isLoading ? (
          <Spinner size="40px" color={colors.placeHolder} />
        ) : data && data.data.history.length > 0 && endedGames ? (
          endedGames?.length > 0 ? (
            endedGames.map((item, index) => <PredictLogBox key={index} data={item} isButton={false} />)
          ) : (
            <S.NoDataText>아직 종료된 경기가 없어요</S.NoDataText>
          )
        ) : (
          <S.NoDataText>아직 예측한 내역이 없어요</S.NoDataText>
        )}
      </S.PredictLogsContainer>
    </>
  );
};
