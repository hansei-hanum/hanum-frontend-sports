import React from 'react';

import { colors } from 'src/styles';

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
  isbutton: boolean;
}

interface StatusDescription {
  description: string;
}

export const GameSchedule: React.FC<ScheduleProps & StatusDescription & isButton> = ({
  scheduleData,
  description,
  isbutton,
}) => {
  const { isEnd, isDuring, gameType, redTeam, blueTeam } = scheduleData;
  const renderScheduleContent = () => (
    <>
      <S.ScheduleTop>
        <div>{isDuring || isEnd ? <MatchStatus isEnd={scheduleData.isEnd} /> : scheduleData.date}</div>
        <p>{gameType}</p>
      </S.ScheduleTop>
      {isEnd || isDuring ? <S.StatusDescription>{description}</S.StatusDescription> : null}
      <S.Content isEnd={scheduleData.isEnd}>
        <S.AllBox>
          <Team
            textAlign="right"
            isEnd={scheduleData.isEnd}
            isDuring={isDuring}
            teamData={redTeam}
            alignItems="flex-end"
            color={colors.redTeamColor}
          />
          <S.IconBox>{isEnd ? ':' : 'VS'}</S.IconBox>
          <Team
            textAlign="left"
            isEnd={scheduleData.isEnd}
            isDuring={isDuring}
            alignItems="flex-start"
            teamData={blueTeam}
            color={colors.blueTeamColor}
          />
        </S.AllBox>
        {isbutton ? (
          <S.ButtonBox>
            <SubmitButton isChangeColor={false} />
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
        <StatusContainer isEnd={scheduleData.isEnd}>{renderScheduleContent()}</StatusContainer>
      ) : (
        <S.Schedule isEnd={scheduleData.isEnd}>{renderScheduleContent()}</S.Schedule>
      )}
    </S.SheduleContainer>
  );
};
