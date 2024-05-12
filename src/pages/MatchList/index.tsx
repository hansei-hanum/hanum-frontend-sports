import React from 'react';

import { useRecoilValue } from 'recoil';

import { selectedSportsAtom } from 'src/atom';
import { GameSchedule, SportsCategory } from 'src/components';
import { MatchList } from 'src/constants';

import * as S from './styled';

export const MatchListPage: React.FC = () => {
  const selectedItem = useRecoilValue(selectedSportsAtom);
  const selectedSports: string = selectedItem.selected ?? '';

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
            isbutton={false}
            key={index}
            scheduleData={item}
            description={item.isDuring === true ? '' : '경기가 종료되었습니다.'}
          />
        ))}
      </S.GameListContainer>
    </S.MatchListContainer>
  );
};
