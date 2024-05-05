import React from "react";
import { SportsCategory } from "../../components/matchList";
import { Header } from "../../components/common/Header";
import { MyRankBar } from "../../components/common/MyRankBar";
import { GameSchedule } from "../../components/common/gameSchedule";
import { MatchList } from "../../constants/scheduleData";
import { LeaderBoard } from "../../constants/leaderBoard";
import { useRecoilValue } from "recoil";
import { selectedSportsAtom } from "../../atom/selectedSports";
import { Balance } from "../../constants/balance";

export const MatchListPage: React.FC = () => {
  const selectedItem = useRecoilValue(selectedSportsAtom);
  const selectedSports: string = selectedItem.selected ?? "";

  let scheduleData = MatchList.data.games;

  if (selectedSports !== "전체" && selectedSports !== "지난경기") {
    scheduleData = scheduleData.filter((item) =>
      item.gameType.includes(selectedSports)
    );
  }

  if (selectedSports === "지난경기") {
    scheduleData = scheduleData.filter((item) => item.isEnd === true);
  } else if (selectedSports !== "전체") {
    scheduleData = scheduleData.filter((item) => !item.isEnd);
  } else {
    scheduleData = scheduleData.filter((item) => !item.isEnd);
  }

  const userRank =
    LeaderBoard.data.leaderboard.details.findIndex(
      (item) => item.userName === Balance.data.user_name
    ) + 1;

  return (
    <>
      <Header text="교내스포츠한마당" hasIcon={true} />
      <SportsCategory />
      <MyRankBar
        rank={userRank}
        name={Balance.data.user_name}
        point={Balance.data.balance}
      />

      {scheduleData.map((item, index) => (
        <GameSchedule
          key={index}
          scheduleData={item}
          description={item.isDuring === true ? "" : "경기가 종료되었습니다."}
        />
      ))}
    </>
  );
};
