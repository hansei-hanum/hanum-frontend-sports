import React from 'react';

import { colors } from 'src/styles';
import { GameStatus, SportGameType } from 'src/api';
import { GetBettingHistoryDetail } from 'src/api/getBettingHistory';
import { formatNumber, formattedSportType } from 'src/utils';

import { isButton } from '../gameSchedule';
import { Team } from '../Team';
import { SubmitButton } from '../SubmitButton';

import * as S from './styled';

export interface PredictLogBoxProps {
  data: GetBettingHistoryDetail;
}

export const PredictLogBox: React.FC<PredictLogBoxProps & isButton> = ({ data, isButton: isbutton }) => {
  const { team, game, profit } = data;

  const whoWin = () => {
    return team === game.winner ? true : false;
  };

  const isEnd = game.status === GameStatus.ENDED;

  return (
    <S.SheduleContainer>
      <S.Schedule isEnd={isEnd}>
        <S.ScheduleTop>
          <S.PredictLogEndText isSuccess={whoWin()}>
            {whoWin() ? '예측 성공!' : '예측 실패!'} ({formatNumber(profit)}P)
          </S.PredictLogEndText>
          <p>{formattedSportType(game.type)}</p>
        </S.ScheduleTop>
        <S.Content isEnd={isEnd}>
          <S.AllBox>
            <Team
              textAlign="right"
              isEnd={isEnd}
              isDuring={false}
              teamData={game.teamA}
              alignItems="flex-end"
              color={colors.redTeamColor}
              sportGameType={SportGameType.Basketball}
              win={true}
            />
            <S.IconBox>:</S.IconBox>
            <Team
              textAlign="left"
              isEnd={isEnd}
              isDuring={false}
              alignItems="flex-start"
              teamData={game.teamB}
              color={colors.blueTeamColor}
              sportGameType={SportGameType.Basketball}
              win={false}
            />
          </S.AllBox>
          {isbutton ? (
            <S.ButtonBox>
              <SubmitButton isDisabled={false} />
            </S.ButtonBox>
          ) : (
            <S.ButtonBox />
          )}
        </S.Content>
      </S.Schedule>
    </S.SheduleContainer>
  );
};
