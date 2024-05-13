import React from 'react';

import { colors } from 'src/styles';
import { GameStatus, GetLiveGameResponse, TeamType } from 'src/api';
import { formattedSportType } from 'src/utils';
import { gameStatus } from 'src/constants';

import { StatusContainer } from '../StatusContainer';
import { MatchStatus } from '../LiveStatus';
import { Team } from '../Team';
import { SubmitButton } from '../SubmitButton';

import * as S from './styled';

export interface isButton {
  isButton: boolean;
  onClick?: () => void;
}

export interface StatusDescription {
  description: string;
}

export interface GameScheduleProps {
  scheduleData: GetLiveGameResponse;
  index: number;
}

export const GameSchedule: React.FC<GameScheduleProps & isButton> = ({ scheduleData, isButton, onClick, index }) => {
  const { status, type, teamA, teamB, winner } = scheduleData;

  const isEnd = status === GameStatus.ENDED;
  const isLive = index === 0 && status !== GameStatus.ENDED && status !== GameStatus.WAITING;
  const isDuring = status === GameStatus.PREDICTING;

  const renderScheduleContent = () => (
    <>
      <S.ScheduleTop>
        <div>
          {isLive ? (
            <MatchStatus isEnd={false} />
          ) : isEnd ? (
            <MatchStatus isEnd={true} />
          ) : (
            status === GameStatus.WAITING && '시작 예정'
          )}
        </div>
        <p>{formattedSportType(type)}</p>
      </S.ScheduleTop>
      <S.StatusDescription>{gameStatus[status]}</S.StatusDescription>
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
            sportGameType={type}
            isLive={isLive}
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
            sportGameType={type}
            isLive={isLive}
          />
        </S.AllBox>
        {isButton ? (
          <S.ButtonBox onClick={isDuring ? onClick : () => {}}>
            <SubmitButton isDisabled={!isDuring} />
          </S.ButtonBox>
        ) : (
          <S.ButtonBox />
        )}
      </S.Content>
    </>
  );

  return (
    <S.SheduleContainer>
      {isDuring || isLive ? (
        <StatusContainer isEnd={isEnd}>{renderScheduleContent()}</StatusContainer>
      ) : (
        <S.Schedule isEnd={isEnd}>{renderScheduleContent()}</S.Schedule>
      )}
    </S.SheduleContainer>
  );
};
