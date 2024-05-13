import React from 'react';

import { colors } from 'src/styles';
import { GameStatus, GetLiveGameResponse, TeamType } from 'src/api';
import { formattedSportType } from 'src/utils';

import { StatusContainer } from '../StatusContainer';
import { MatchStatus } from '../LiveStatus';
import { Team } from '../Team';
import { SubmitButton } from '../SubmitButton';

import * as S from './styled';

export interface isButton {
  isButton: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export interface StatusDescription {
  description: string;
}

export interface GameScheduleProps {
  scheduleData: GetLiveGameResponse;
  index: number;
}

export const GameSchedule: React.FC<GameScheduleProps & isButton> = ({
  scheduleData,
  isButton,
  disabled,
  onClick,
  index,
}) => {
  const { status, type, teamA, teamB, winner } = scheduleData;

  const isEnd = status === GameStatus.ENDED;
  const isDuring = index === 0 && status !== GameStatus.ENDED && status !== GameStatus.WAITING;

  const renderScheduleContent = () => (
    <>
      <S.ScheduleTop>
        <div>{isDuring ? <MatchStatus isEnd={isEnd} /> : '시작 예정'}</div>
        <p>{formattedSportType(type)}</p>
      </S.ScheduleTop>
      {isEnd ? <S.StatusDescription>경기가 종료되었습니다.</S.StatusDescription> : null}
      <S.Content isEnd={isEnd}>
        <S.AllBox>
          <Team
            textAlign="right"
            isEnd={isEnd}
            isDuring={isDuring}
            teamData={teamA}
            alignItems="flex-end"
            color={colors.redTeamColor}
            win={winner === TeamType.TeamA}
          />
          <S.IconBox>{isEnd ? ':' : 'VS'}</S.IconBox>
          <Team
            textAlign="left"
            isEnd={isEnd}
            isDuring={isDuring}
            alignItems="flex-start"
            teamData={teamB}
            color={colors.blueTeamColor}
            win={winner === TeamType.TeamB}
          />
        </S.AllBox>
        {isButton ? (
          <S.ButtonBox onClick={onClick}>
            <SubmitButton isDisabled={disabled ?? false} />
          </S.ButtonBox>
        ) : (
          <S.ButtonBox />
        )}
      </S.Content>
    </>
  );

  return (
    <S.SheduleContainer>
      {isDuring ? (
        <StatusContainer isEnd={isEnd}>{renderScheduleContent()}</StatusContainer>
      ) : (
        <S.Schedule isEnd={isEnd}>{renderScheduleContent()}</S.Schedule>
      )}
    </S.SheduleContainer>
  );
};
