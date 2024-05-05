import React from "react";
import * as S from "./styled";
import { colors } from "../../../../styles";
import { StatusContainer } from "../../common/StatusContainer";
import { MatchStatus } from "../../common/LiveStatus";

interface TeamProps {
  teamData: {
    department: string;
    ratio: number;
    class: string;
    score: number;
  };
  color: string;
  alignItems: string;
  isDuring: boolean;
  isEnd: boolean;
}

const Team: React.FC<TeamProps> = ({
  teamData,
  color,
  alignItems,
  isDuring,
  isEnd,
}) => {
  return (
    <S.TeamBox color={color} alignItems={alignItems}>
      {isDuring ? (
        <>
          <S.ClassBox>
            <S.Department>{teamData.department}</S.Department>
            <S.Class fontSize={13}>{teamData.class}</S.Class>
          </S.ClassBox>

          <S.Ratio>{teamData.ratio}%</S.Ratio>
          <S.Graph backgorundColor={color} width={teamData.ratio} />
        </>
      ) : (
        <>
          {isEnd ? (
            <S.TeamBoxEndContent>
              <S.ClassBox>
                <S.Department>{teamData.department}</S.Department>
                <S.Class fontSize={15}>{teamData.class}</S.Class>
              </S.ClassBox>
              <S.Score>{teamData.score}</S.Score>
            </S.TeamBoxEndContent>
          ) : (
            <S.OfflineClassBox>
              <S.Department>{teamData.department}</S.Department>
              <S.Class fontSize={25}>{teamData.class}</S.Class>
            </S.OfflineClassBox>
          )}
        </>
      )}
    </S.TeamBox>
  );
};

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
          {isDuring ? (
            <MatchStatus isEnd={scheduleData.isEnd} />
          ) : (
            scheduleData.date
          )}
        </div>
        <p>{gameType}</p>
      </S.ScheduleTop>
      <S.Content>
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
        <S.Schedule>{renderScheduleContent()}</S.Schedule>
      )}
    </S.SheduleContainer>
  );
};
