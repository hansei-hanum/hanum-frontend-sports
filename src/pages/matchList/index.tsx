import React from "react";
import { SportsCategory } from "../../components/matchList";
import { Header } from "../../components/common/Header";
import { MyRankBar } from "../../components/common/MyRankBar";
import { GameSchedule } from "../../components/matchList/";
import {
  ScheduleData,
  ScheduleData2,
  ScheduleData3,
  ScheduleData4,
  ScheduleData5,
} from "../../constants/scheduleData";
import { useRecoilValue } from "recoil";
import { selectedSportsAtom } from "../../atom/selectedSports";

export const MatchListPage: React.FC = () => {
  const selectedItem = useRecoilValue(selectedSportsAtom);
  const selectedSports: string = selectedItem.selected ?? "";

  let scheduleData;

  if (selectedSports === "전체") {
    scheduleData = [
      ScheduleData,
      ScheduleData2,
      ScheduleData3,
      ScheduleData4,
      ScheduleData5,
    ];
  } else {
    scheduleData = ScheduleData.event.includes(selectedSports)
      ? ScheduleData
      : ScheduleData2.event.includes(selectedSports)
      ? ScheduleData2
      : ScheduleData3.event.includes(selectedSports)
      ? ScheduleData3
      : ScheduleData4.event.includes(selectedSports)
      ? ScheduleData4
      : ScheduleData5.event.includes(selectedSports)
      ? ScheduleData5
      : ScheduleData;
  }

  return (
    <>
      <Header text="교내스포츠한마당" hasIcon={true} />
      <SportsCategory />
      <MyRankBar />
      {Array.isArray(scheduleData) ? (
        scheduleData.map((data, index) => (
          <GameSchedule key={index} scheduleData={data} />
        ))
      ) : (
        <GameSchedule scheduleData={scheduleData} />
      )}
    </>
  );
};
