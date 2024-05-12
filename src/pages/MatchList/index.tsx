import React from 'react';

import { GameSchedule, SportsCategory } from 'src/components';
import { MatchList } from 'src/constants';
import { useSelectedSportsStore } from 'src/stores';

import * as S from './styled';

export const MatchListPage: React.FC = () => {
  const { selectedSport } = useSelectedSportsStore();

  const selectedSports: string = selectedSport ?? '';

  let scheduleData = MatchList.data.games;

  if (selectedSports !== '전체' && selectedSports !== '지난경기') {
    scheduleData = scheduleData.filter((item) => item.gameType.includes(selectedSports));
  }

  if (selectedSports === '지난경기') {
    scheduleData = scheduleData.filter((item) => item.isEnd === true);
  } else if (selectedSports !== '전체') {
    scheduleData = scheduleData.filter((item) => !item.isEnd);
  } else {
    scheduleData = scheduleData.filter((item) => !item.isEnd);
  }

  return (
    <S.MatchListContainer>
      <SportsCategory />
      <S.GameListContainer>
        {scheduleData.map((item, index) => (
          <GameSchedule
            disabled={false}
            isButton={false}
            key={index}
            scheduleData={item}
            description={item.isDuring === true ? '' : '경기가 종료되었습니다.'}
          />
        ))}
      </S.GameListContainer>
    </S.MatchListContainer>
  );
};
