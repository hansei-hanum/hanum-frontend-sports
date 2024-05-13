import React from 'react';

import { DefaultLayout, GameAlertBox, GameSchedule, SportsCategory } from 'src/components';
import { useSelectedSportsStore } from 'src/stores';
import { useGetGames } from 'src/hooks';
import { GameStatus } from 'src/api';

import * as S from './styled';

export const MatchListPage: React.FC = () => {
  const { data } = useGetGames();

  const { selectedSport } = useSelectedSportsStore();

  const selectedSports: string = selectedSport ?? '';

  let scheduleData = data ? data.data.games : [];

  if (selectedSports !== '전체' && selectedSports !== '지난경기') {
    scheduleData = data ? scheduleData.filter((item) => item.type.includes(selectedSports)) : [];
  }

  if (selectedSports === '지난경기') {
    scheduleData = data ? scheduleData.filter((item) => item.status === GameStatus.ENDED) : [];
  } else {
    scheduleData = data ? scheduleData.filter((item) => item.status !== GameStatus.ENDED) : [];
  }
  console.log(scheduleData);

  return (
    <S.MatchListContainer>
      <SportsCategory />
      <DefaultLayout>
        <S.GameListContainer>
          {scheduleData.length > 0 ? (
            scheduleData.map((item, index) => <GameSchedule isButton={false} key={index} scheduleData={item} />)
          ) : (
            <GameAlertBox>해당 종목의 경기가 없어요</GameAlertBox>
          )}
        </S.GameListContainer>
      </DefaultLayout>
    </S.MatchListContainer>
  );
};
