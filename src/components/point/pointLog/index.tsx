import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { PointLog } from 'src/constants';
import { pointIcon } from 'src/assets';

import * as S from './styled';

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
    </S.LogBox>
  );
};

export const Logs: React.FC = () => {
  return (
    <div>
      <p style={{ fontSize: 18, fontWeight: 900 }}>포인트 내역</p>
      <S.LogContainer>
        {PointLog.data.details.map((item, index) => {
          return <Log cause={item.cause} event={item.event} point={item.point} key={index} />;
        })}
      </S.LogContainer>
    </div>
  );
};
