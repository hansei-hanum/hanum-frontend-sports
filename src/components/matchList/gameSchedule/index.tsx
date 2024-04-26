import React from "react";
import * as S from "./styled";
import { colors } from "../../../../styles";
import { LiveContainer } from "../../common/LiveContainer";
import { LiveStatus } from "../../common/LiveStatus";

interface TeamProps {
  teamData: {
    department: string;
    ratio: number;
  };
  color: string;
  alignItems: string;
}

const Team: React.FC<TeamProps> = ({ teamData, color, alignItems }) => {
  return (
    <S.TeamBox color={color} alignItems={alignItems}>
      <S.Department>{teamData.department}</S.Department>
      <S.Ratio>{teamData.ratio}%</S.Ratio>
      <S.Graph backgorundColor={color} width={teamData.ratio} />
    </S.TeamBox>
  );
};

interface ScheduleProps {
  scheduleData: {
    isLive: boolean;
    event: string;
    startTime: string;

    redTeam: {
      department: string;
      ratio: number;
    };
    blueTeam: {
      department: string;
      ratio: number;
    };
  };
}

export const GameSchedule: React.FC<ScheduleProps> = ({ scheduleData }) => {
  const { isLive, event, redTeam, blueTeam } = scheduleData;

  const renderScheduleContent = () => (
    <>
      <S.ScheduleTop>
        <div>{isLive ? <LiveStatus /> : scheduleData.startTime}</div>
        <p>{event}</p>
      </S.ScheduleTop>
      <S.Content>
        <Team
          teamData={redTeam}
          alignItems="flex-end"
          color={colors.redTeamColor}
        />
        <S.IconBox>VS</S.IconBox>
        <Team
          alignItems="flex-start"
          teamData={blueTeam}
          color={colors.blueTeamColor}
        />
      </S.Content>
    </>
  );

  return (
    <S.SheduleContainer>
      {isLive ? (
        <LiveContainer>{renderScheduleContent()}</LiveContainer>
      ) : (
        <S.Schedule>{renderScheduleContent()}</S.Schedule>
      )}
    </S.SheduleContainer>
  );
};
