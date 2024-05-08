import React from 'react';
import * as S from './styled';
import { colors } from '@styles';
import { StatusContainer } from '../StatusContainer';
import { MatchStatus } from '../LiveStatus';
import { Team } from '../Team';

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

interface StatusDescription {
    description: string;
}

export const GameSchedule: React.FC<ScheduleProps & StatusDescription> = ({ scheduleData, description }) => {
    const { isEnd, isDuring, gameType, redTeam, blueTeam } = scheduleData;

    const renderScheduleContent = () => (
        <>
            <S.ScheduleTop>
                <div>{isDuring || isEnd ? <MatchStatus isEnd={scheduleData.isEnd} /> : scheduleData.date}</div>
                <p>{gameType}</p>
            </S.ScheduleTop>
            {isEnd || isDuring ? <S.StatusDescription>{description}</S.StatusDescription> : null}
            <S.Content isEnd={scheduleData.isEnd}>
                <Team
                    isEnd={scheduleData.isEnd}
                    isDuring={isDuring}
                    teamData={redTeam}
                    alignItems="flex-end"
                    color={colors.redTeamColor}
                />
                <S.IconBox>{isEnd ? ':' : 'VS'}</S.IconBox>
                <Team
                    isEnd={scheduleData.isEnd}
                    isDuring={isDuring}
                    alignItems="flex-start"
                    teamData={blueTeam}
                    color={colors.blueTeamColor}
                />
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
            {/* 
      <S.Schedule isEnd={scheduleData.isEnd} isDuring={isDuring}>
          {renderScheduleContent()}
        </S.Schedule> */}
        </S.SheduleContainer>
    );
};
