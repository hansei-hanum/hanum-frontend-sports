import React from 'react';

import { pointIcon } from 'src/assets';
import { GetBettingHistoryDetail } from 'src/api/getBettingHistory';
import { formattedSportType } from 'src/utils';

import * as S from './styled';

interface LogProps {
  isSuccess: boolean;
  event: string;
  point: number;
}

const Log: React.FC<LogProps> = ({ isSuccess, event, point }) => {
  return (
    <S.LogBox>
      <S.LogBoxLeft>
        <S.Cause>{isSuccess ? '예측 성공!' : '예측 실패!'}</S.Cause>
        <S.Event>{event} 경기</S.Event>
      </S.LogBoxLeft>
      <S.LogBoxRight>
        <p>{point}</p>
        <img width={25} src={pointIcon} alt="" />
      </S.LogBoxRight>
    </S.LogBox>
  );
};

export interface LosProps {
  history: GetBettingHistoryDetail[];
}

export const Logs: React.FC<LosProps> = ({ history }) => {
  return (
    <div>
      <p style={{ fontSize: 18, fontWeight: 900 }}>포인트 내역</p>
      <S.LogContainer>
        {history.map((item, index) => {
          const isSuccess = item.team === item.game.winner;
          const sportType = formattedSportType(item.game.type);
          return <Log isSuccess={isSuccess} event={sportType} point={item.profit} key={index} />;
        })}
      </S.LogContainer>
    </div>
  );
};
