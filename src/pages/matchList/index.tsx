import React from "react";

import { SportsCategoty } from "../../components/matchList/SportsCategory";
import { Header } from "../../components/common/Header";
import { MyRankBar } from "../../components/common/MyRankBar";

export const MatchListPage: React.FC = () => {
  return (
    <>
      <Header text="교내스포츠한마당" hasIcon={true} />
      <SportsCategoty />
      <MyRankBar />
    </>
  );
};
