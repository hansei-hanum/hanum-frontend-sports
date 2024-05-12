import React from 'react';

import { colors } from 'src/styles';
import { GameStatus, GetLiveGameResponse, SportGameType } from 'src/api';

import { StatusContainer } from '../StatusContainer';
import { MatchStatus } from '../LiveStatus';
import { Team } from '../Team';
import { SubmitButton } from '../SubmitButton';

import * as S from './styled';

export interface ScheduleProps {
  scheduleData: {
    isDuring: boolean;
    gameType: string;
    date: string;
    isEnd: boolean;

    redTeam: {
      department: string;
      class: string;
      ratio: number;
      score: number;
    };
    blueTeam: {
      department: string;
      class: string;
      ratio: number;
      score: number;
    };
  };
}

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
}

export const GameSchedule: React.FC<GameScheduleProps & isButton> = ({ scheduleData, isButton, disabled, onClick }) => {
  const { status, type, teamA, teamB } = scheduleData;
  const isEnd = status === GameStatus.ENDED;
  const isDuring = status !== GameStatus.PREDICTION_ENDED;

  const formattedType = () => {
    switch (type) {
      case SportGameType.Basketball:
        return '농구';
      case SportGameType.FootVolleyball:
        return '족구';
      case SportGameType.Dodgeball:
        return '피구';
      default:
        return '';
    }
  };

  const renderScheduleContent = () => (
    <>
      <S.ScheduleTop>
        <div>{isDuring ? <MatchStatus isEnd={isEnd} /> : '진행 예정'}</div>
        <p>{formattedType()}</p>
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
            win={true}
          />
          <S.IconBox>{isEnd ? ':' : 'VS'}</S.IconBox>
          <Team
            textAlign="left"
            isEnd={isEnd}
            isDuring={isDuring}
            alignItems="flex-start"
            teamData={teamB}
            color={colors.blueTeamColor}
            win={false}
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
