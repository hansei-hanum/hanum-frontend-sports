import React from 'react';
import { SportsCategory } from '@components';
import { Header } from '@common';
import { MyRankBar } from '@common';
import { GameSchedule } from '@common';
import { MatchList } from '@constants';
import { LeaderBoard } from '@constants';
import { useRecoilValue } from 'recoil';
import { selectedSportsAtom } from '@atom/selectedSports';
import { Balance } from '@constants';

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

    //   switch (selectedSports) {
    //     case "전체" || selectedSports !== "지난경기":
    //       scheduleData = scheduleData.filter((item) => !item.isEnd);
    //       break;
    //     case "지난경기":
    //       scheduleData = scheduleData.filter((item) => item.isEnd === true);
    //       break;
    //     default:
    //       scheduleData = scheduleData.filter((item) =>
    //         item.gameType.includes(selectedSports)
    //       );
    //       break;
    //   }

    const userRank =
        LeaderBoard.data.leaderboard.details.findIndex((item) => item.userName === Balance.data.user_name) + 1;

    return (
        <>
            <Header text="교내스포츠한마당" hasIcon={true} />
            <SportsCategory />
            <MyRankBar rank={userRank} name={Balance.data.user_name} point={Balance.data.balance} />
            {scheduleData.map((item, index) => (
                <GameSchedule
                    key={index}
                    scheduleData={item}
                    description={item.isDuring === true ? '' : '경기가 종료되었습니다.'}
                />
            ))}
        </>
    );
};
