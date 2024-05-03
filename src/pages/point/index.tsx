import React from "react";
import { Header } from "../../components/common/Header";
import { Logs } from "../../components/point/logs";
import * as S from "./styled";
import pointIcon from "../../assets/icons/point.png";
import { LeaderBoard } from "../../constants/leaderBoard";

export const PointPage: React.FC = () => {
  return (
    <>
      <Header hasIcon={false} text="포인트 내역" />
      <S.MyPointBox>
        <S.Description>교내스포츠한마당 포인트</S.Description>
        <S.MyPoint>
          <p>{LeaderBoard.data.leaderboard[0].total_points}</p>
          <img width={35} src={pointIcon} alt="" />
        </S.MyPoint>
      </S.MyPointBox>
      <Logs />
    </>
  );
};
