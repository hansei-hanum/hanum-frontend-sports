import React, { useEffect } from "react";
import { SportsCategory } from "../../components/matchList";
import { Header } from "../../components/common/Header";
import { MyRankBar } from "../../components/common/MyRankBar";
import { GameSchedule } from "../../components/matchList/";
import { MatchList } from "../../constants/scheduleData";
import { useRecoilValue } from "recoil";
import { selectedSportsAtom } from "../../atom/selectedSports";

export const MatchListPage: React.FC = () => {
  const selectedItem = useRecoilValue(selectedSportsAtom);
  const selectedSports: string = selectedItem.selected ?? "";

  let scheduleData = MatchList.data.games;

  if (selectedSports !== "전체") {
    scheduleData = scheduleData.filter((item) =>
      item.gameType.includes(selectedSports)
    );
  }

  return (
    <>
      <Header text="교내스포츠한마당" hasIcon={true} />
      <SportsCategory />
      <MyRankBar rank={1} name="박한" point={1000} />
      {scheduleData.map((data, index) => (
        <GameSchedule key={index} scheduleData={data} />
      ))}
    </>
  );
};
