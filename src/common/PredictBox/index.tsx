import React, { useState } from 'react';
import * as S from './styled';
import { colors } from '../../styles';
import { detail } from '../../constants/detail';

const formatNumber = (value: number): string => {
    if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}K`;
    } else {
        return `${value}`;
    }
};

export const PredictBox: React.FC = () => {
    const teamA = detail.data.team_a;
    const teamB = detail.data.team_b;

    const [selectedTeam, setSelectedTeam] = useState<'team_a' | 'team_b' | null>(null);

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
                    <S.RatioBox isLeft={index === 0}>
                        <S.RatingBox color={index === 0 ? colors.redTeamColor : colors.blueTeamColor}>
                            {index === 0 ? team.percentage : team.percentage}%
                        </S.RatingBox>
                        <S.RatingBar backgroundColor={index === 0 ? colors.redTeamColor : colors.blueTeamColor} />
                    </S.RatioBox>

                    <S.EtcBox>
                        <p>🎉{index === 0 ? formatNumber(teamA.total_point) : formatNumber(teamB.total_point)}</p>
                        <p>⛷️{index === 0 ? teamA.total_people : teamB.total_people}</p>
                        <p>😢1:{index === 0 ? teamA.allocation : teamB.allocation}</p>
                    </S.EtcBox>
                </S.TeamBox>
            ))}
        </S.PredictContainer>
    );
};
