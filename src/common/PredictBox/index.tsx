import React, { useState } from 'react';
import * as S from './styled';
import { colors } from '../../styles';
import { detail } from '../../constants/detail';

export interface PredictProps {
    dept: string;
    point: number;
    person: number;
    allocation: number;
    percentage: number;
}

const formatNumber = (value: number): string => {
    if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}K`;
    } else {
        return `${value}`;
    }
};

export const PredictBox: React.FC<PredictProps> = () => {
    const [selectedTeam, setSelectedTeam] = useState<'team_a' | 'team_b' | null>(null);
    const { team_a, team_b } = detail.data;
    const total_people = team_a.total_people + team_b.total_people;
    const team_a_percentage: string = ((team_a.total_people / total_people) * 100).toFixed(0);
    const team_b_percentage: string = ((team_b.total_people / total_people) * 100).toFixed(0);
    const team_a_allocation: string = (100 / +team_a_percentage).toFixed(1);
    const team_b_allocation: string = (100 / +team_b_percentage).toFixed(1);

    const handleTeamClick = (team: 'team_a' | 'team_b') => {
        setSelectedTeam((prevTeam) => (prevTeam === team ? null : team));
    };

    return (
        <S.PredictContainer>
            {[team_a, team_b].map((team, index) => (
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
                            {index === 0 ? team_a_percentage : team_b_percentage}%
                        </S.RatingBox>
                        <S.RatingBar backgroundColor={index === 0 ? colors.redTeamColor : colors.blueTeamColor} />
                    </S.RatioBox>

                    <S.EtcBox>
                        <p>🎉{index === 0 ? formatNumber(team_a.total_point) : formatNumber(team_b.total_point)}</p>
                        <p>⛷️{index === 0 ? team_a.total_people : team_b.total_people}</p>
                        <p>😢1:{index === 0 ? team_a_allocation : team_b_allocation}</p>
                    </S.EtcBox>
                </S.TeamBox>
            ))}
        </S.PredictContainer>
    );
};
