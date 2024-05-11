import React from 'react';

import { useRecoilValue } from 'recoil';

import { selectedSportsAtom } from 'src/atom';
import { GameSchedule, MyRankBar, SportsCategory } from 'src/components';
import { Balance, LeaderBoard, MatchList } from 'src/constants';

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

  const userRank =
    LeaderBoard.data.leaderboard.details.findIndex((item) => item.userName === Balance.data.user_name) + 1;

  return (
    <S.MatchListContainer>
      <SportsCategory />
      <MyRankBar rank={userRank} name={Balance.data.user_name} point={Balance.data.balance} />
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
