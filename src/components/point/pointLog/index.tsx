import React from "react";
import * as S from "./styled";
import pointIcon from "@assets/icons/point.png";
import { IoIosArrowForward } from "react-icons/io";
import { PointLog } from "@constants/pointLog";

interface LogProps {
  cause: string;
  event: string;
  point: number;
}

const Log: React.FC<LogProps> = ({ cause, event, point }) => {
  return (
    <S.LogBox>
      <S.LogBoxLeft>
        <S.Cause>{cause}</S.Cause>
        <S.Event>{event}</S.Event>
      </S.LogBoxLeft>
      <S.LogBoxRight>
        <p>{point}</p>
        <img width={25} src={pointIcon} alt="" />
      </S.LogBoxRight>
      <S.IconBox>
        <IoIosArrowForward size={25} />
      </S.IconBox>
    </S.LogBox>
  );
};

export const Logs: React.FC = () => {
  return (
    <>
      <p style={{ fontSize: 18, fontWeight: 900, marginTop: 20 }}>
        포인트 내역
      </p>
      <S.LogContainer>
        {PointLog.data.details.map((item, index) => {
          return (
            <Log
              cause={item.cause}
              event={item.event}
              point={item.point}
              key={index}
            />
          );
        })}
      </S.LogContainer>
    </>
  );
};
