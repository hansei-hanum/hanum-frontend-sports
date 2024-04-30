import React from "react";
import * as S from "./styled";
import { colors } from "../../../../styles";
import { LiveContainer } from "../../common/LiveContainer";
import { LiveStatus } from "../../common/LiveStatus";

interface TeamProps {
  teamData: {
    department: string;
    ratio: number;
    class: string;
  };
  color: string;
  alignItems: string;
  isLive: boolean;
}

const Team: React.FC<TeamProps> = ({ teamData, color, alignItems, isLive }) => {
  return (
    <S.TeamBox color={color} alignItems={alignItems}>
      {isLive ? (
        <>
          <S.ClassBox>
            <S.Department>{teamData.department}</S.Department>
            <S.Class fontSize={13}>{teamData.class}</S.Class>
          </S.ClassBox>

          <S.Ratio>{teamData.ratio}%</S.Ratio>
          <S.Graph backgorundColor={color} width={teamData.ratio} />
        </>
      ) : (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <S.Department>{teamData.department}</S.Department>
          <S.Class fontSize={25}>{teamData.class}</S.Class>
        </div>
      )}
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
      class: string;
      ratio: number;
    };
    blueTeam: {
      department: string;
      class: string;
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
          isLive={isLive}
          teamData={redTeam}
          alignItems="flex-end"
          color={colors.redTeamColor}
        />
        <S.IconBox>VS</S.IconBox>
        <Team
          isLive={isLive}
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
