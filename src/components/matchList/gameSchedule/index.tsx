import React from "react";
import * as S from "./styled";
import { colors } from "../../../../styles";
import { StatusContainer } from "../../common/StatusContainer";
import { MatchStatus } from "../../common/LiveStatus";
import { Team } from "../../common/Team";

interface ScheduleProps {
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

export const GameSchedule: React.FC<ScheduleProps> = ({ scheduleData }) => {
  const { isEnd, isDuring, gameType, redTeam, blueTeam } = scheduleData;

  const renderScheduleContent = () => (
    <>
      <S.ScheduleTop>
        <div>
          {isDuring || isEnd ? (
            <MatchStatus isEnd={scheduleData.isEnd} />
          ) : (
            scheduleData.date
          )}
        </div>

        <p>{gameType}</p>
      </S.ScheduleTop>
      {isEnd ? (
        <S.StatusDescription>경기가 종료되었습니다.</S.StatusDescription>
      ) : null}
      <S.Content isEnd={scheduleData.isEnd}>
        <Team
          isEnd={scheduleData.isEnd}
          isDuring={isDuring}
          teamData={redTeam}
          alignItems="flex-end"
          color={colors.redTeamColor}
        />
        <S.IconBox>{isEnd ? ":" : "VS"}</S.IconBox>
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
        <StatusContainer isEnd={scheduleData.isEnd}>
          {renderScheduleContent()}
        </StatusContainer>
      ) : (
        <S.Schedule isEnd={scheduleData.isEnd}>
          {renderScheduleContent()}
        </S.Schedule>
      )}
    </S.SheduleContainer>
  );
};
