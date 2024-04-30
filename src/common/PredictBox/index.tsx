import React, { useState } from 'react';
import * as S from './styled';
import { colors } from '../../styles';

export interface PredictProps {
    dept: string;
    point: number;
    person: number;
    allocation: number;
}

export const PredictBox: React.FC = () => {
    const [leftBoxClicked, setLeftBoxClicked] = useState(false);
    const [rightBoxClicked, setRightBoxClicked] = useState(false);

    const handleLeftBoxClick = () => {
        setLeftBoxClicked(true);
        setRightBoxClicked(false);
    };

    const handleRightBoxClick = () => {
        setLeftBoxClicked(false);
        setRightBoxClicked(true);
    };

    return (
        <S.PredictContainer>
            <S.TeamBox
                isLeft={true}
                onClick={handleLeftBoxClick}
                style={{ borderColor: leftBoxClicked ? colors.redTeamColor : colors.defaultBorderColor }}
            >
                <S.DeptBox isLeft={true}>보안과 2학년 1반</S.DeptBox>
                <S.RatioBox isLeft={true}>
                    <S.RatingBox color={colors.redTeamColor}>50%</S.RatingBox>
                    <S.RatingBar backgroundColor={colors.redTeamColor} />
                </S.RatioBox>

                <S.EtcBox>
                    <p>🎉1500</p>
                    <p>⛷️50</p>
                    <p>😢1:3.1</p>
                </S.EtcBox>
            </S.TeamBox>
            <S.TeamBox
                isLeft={false}
                onClick={handleRightBoxClick}
                style={{ borderColor: rightBoxClicked ? colors.blueTeamColor : colors.defaultBorderColor }}
            >
                <S.DeptBox isLeft={false}>보안과 2학년 2반</S.DeptBox>
                <S.RatioBox isLeft={false}>
                    <S.RatingBox color={colors.blueTeamColor}>50%</S.RatingBox>
                    <S.RatingBar backgroundColor={colors.blueTeamColor} />
                </S.RatioBox>

                <S.EtcBox>
                    <p>🎉1500</p>
                    <p>⛷️50</p>
                    <p>😢1:3.1</p>
                </S.EtcBox>
            </S.TeamBox>
        </S.PredictContainer>
    );
};
