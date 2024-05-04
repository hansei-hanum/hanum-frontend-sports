import React, { useEffect, useState } from "react";
import { SportsCategory } from "../../components/matchList";
import { Header } from "../../components/common/Header";
import { MyRankBar } from "../../components/common/MyRankBar";
import { GameSchedule } from "../../components/matchList/";
import { MatchList } from "../../constants/scheduleData";
import { LeaderBoard } from "../../constants/leaderBoard";
import { useRecoilValue } from "recoil";
import { selectedSportsAtom } from "../../atom/selectedSports";
import { Balance } from "../../constants/balance";

export const MatchListPage: React.FC = () => {
  const selectedItem = useRecoilValue(selectedSportsAtom);
  const selectedSports: string = selectedItem.selected ?? "";

  let scheduleData = MatchList.data.games;

  if (selectedSports !== "전체") {
    scheduleData = scheduleData.filter((item) =>
      item.gameType.includes(selectedSports)
    );
  }

  let userRank = 1;

  LeaderBoard.data.leaderboard.details.forEach((item, index) => {
    if (item.userName === Balance.data.user_name) {
      userRank = index + 1;
    }
  });

  return (
    <>
      <Header text="교내스포츠한마당" hasIcon={true} />
      <SportsCategory />
      <MyRankBar
        rank={userRank}
        name={Balance.data.user_name}
        point={Balance.data.balance}
      />

      {scheduleData.map((data, index) => (
        <GameSchedule key={index} scheduleData={data} />
      ))}
    </>
  );
};
