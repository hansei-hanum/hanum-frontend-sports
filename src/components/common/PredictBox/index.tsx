import React from 'react';

import { colors } from 'src/styles';
import { detail } from 'src/constants';
import { thropyIcon, peoplesIcon, pointIcon } from 'src/assets';

import * as S from './styled';

const formatNumber = (value: number): string => {
  if (value >= 10000) {
    return `${(value / 10000).toFixed(1)}만`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}천`;
  } else {
    return `${value}`;
  }
};

export interface PredictBoxProps {
  setSelectedTeam: React.Dispatch<React.SetStateAction<'team_a' | 'team_b' | null>>;
  selectedTeam: 'team_a' | 'team_b' | null;
}

export const PredictBox: React.FC<PredictBoxProps> = ({ setSelectedTeam, selectedTeam }) => {
  const teamA = detail.data.team_a;
  const teamB = detail.data.team_b;

  const handleTeamClick = (team: 'team_a' | 'team_b') => {
    setSelectedTeam((prevTeam) => (prevTeam === team ? null : team));
  };

  return (
    <S.PredictContainer>
      {[teamA, teamB].map((team, index) => (
        <S.TeamBox
          key={index}
          isLeft={index === 0}
          onClick={() => handleTeamClick(`team_${index === 0 ? 'a' : 'b'}` as 'team_a' | 'team_b')}
          style={{
            borderColor:
              selectedTeam === `team_${index === 0 ? 'a' : 'b'}`
                ? index === 0
                  ? colors.redTeamColor
                  : colors.blueTeamColor
                : colors.defaultBorderColor,
          }}
        >
          <S.DeptBox isLeft={index === 0}>{team.team_id}</S.DeptBox>
          <S.PercentageCont isLeft={index === 0}>
            <S.PercentageBox isLeft={index === 0} color={index === 0 ? colors.redTeamColor : colors.blueTeamColor}>
              {index === 0 ? team.percentage : team.percentage}%
            </S.PercentageBox>
            <S.PercentageBar
              backgroundColor={index === 0 ? colors.redTeamColor : colors.blueTeamColor}
              percentage={team.percentage}
            />
          </S.PercentageCont>
          <S.EtcBox isLeft={index === 0}>
            <S.Etc isLeft={index === 0}>
              <img src={pointIcon} width={20} alt="" />
              <p>총 {index === 0 ? formatNumber(teamA.total_point) : formatNumber(teamB.total_point)}</p>
            </S.Etc>
            <S.Etc isLeft={index === 0}>
              <img src={peoplesIcon} width={20} alt="" />
              <p>{index === 0 ? teamA.total_people : teamB.total_people}명 참여</p>
            </S.Etc>
            <S.Etc isLeft={index === 0}>
              <img src={thropyIcon} width={20} alt="" />
              <p>{index === 0 ? teamA.allocation : teamB.allocation}배</p>
            </S.Etc>
          </S.EtcBox>
        </S.TeamBox>
      ))}
    </S.PredictContainer>
  );
};
