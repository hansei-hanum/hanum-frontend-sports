import React from "react";
import { SportsCategoty } from "../../components/matchList/SportsCategory";
import { Header } from "../../components/common/Header";
import { MyRankBar } from "../../components/common/MyRankBar";
import { GameSchedule } from "../../components/matchList";
import {
  ScheduleData,
  ScheduleData2,
  ScheduleData3,
  ScheduleData4,
  ScheduleData5,
} from "../../constants/scheduleData";

export const MatchListPage: React.FC = () => {
  return (
    <>
      <Header text="교내스포츠한마당" hasIcon={true} />
      <SportsCategoty />
      <MyRankBar />
      <GameSchedule scheduleData={ScheduleData} />
      <GameSchedule scheduleData={ScheduleData2} />
      <GameSchedule scheduleData={ScheduleData3} />
      <GameSchedule scheduleData={ScheduleData4} />
      <GameSchedule scheduleData={ScheduleData5} />
    </>
  );
};
