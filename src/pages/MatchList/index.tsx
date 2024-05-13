import React from 'react';

import { BottomTab, DefaultLayout, GameAlertBox, GameSchedule, Header, Spinner, SportsCategory } from 'src/components';
import { useSelectedSportsStore } from 'src/stores';
import { useGetGames } from 'src/hooks';
import { GameStatus } from 'src/api';
import { colors } from 'src/styles';

import * as S from './styled';

export const MatchListPage: React.FC = () => {
  const { data, isLoading } = useGetGames();

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

  return (
    <>
      <Header text="경기 목록" />
      <S.MatchListContainer>
        <SportsCategory />
        <DefaultLayout>
          <S.GameListContainer>
            {isLoading ? (
              <S.LoadingWrapper>
                <Spinner size="40px" color={colors.placeHolder} />
              </S.LoadingWrapper>
            ) : scheduleData.length > 0 ? (
              scheduleData.map((item, index) => (
                <GameSchedule isButton={false} key={index} scheduleData={item} index={index} />
              ))
            ) : (
              <GameAlertBox>해당 종목의 경기가 없어요</GameAlertBox>
            )}
          </S.GameListContainer>
        </DefaultLayout>
      </S.MatchListContainer>
      <BottomTab />
    </>
  );
};
