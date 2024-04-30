import React, { useState } from 'react';
import * as S from './styled';
import { colors } from '../../styles';

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
            <S.LeftTeamBox
                onClick={handleLeftBoxClick}
                style={{ borderColor: leftBoxClicked ? colors.redTeamColor : colors.defaultBorderColor }}
            >
                <S.LeftDeptBox>보안과 2학년 1반</S.LeftDeptBox>
                <S.LeftRatioBox>
                    <S.RatingBox color={colors.redTeamColor}>50%</S.RatingBox>
                    <S.RatingBar backgroundColor={colors.redTeamColor} />
                </S.LeftRatioBox>

                <S.EtcBox>
                    <p>🎉1500</p>
                    <p>⛷️50</p>
                    <p>😢1:3.1</p>
                </S.EtcBox>
            </S.LeftTeamBox>
            <S.RightTeamBox
                onClick={handleRightBoxClick}
                style={{ borderColor: rightBoxClicked ? colors.blueTeamColor : colors.defaultBorderColor }}
            >
                <S.RightDeptBox>보안과 2학년 2반</S.RightDeptBox>
                <S.RightRatioBox>
                    <S.RatingBox color={colors.blueTeamColor}>50%</S.RatingBox>
                    <S.RatingBar backgroundColor={colors.blueTeamColor} />
                </S.RightRatioBox>

                <S.EtcBox>
                    <p>🎉1500</p>
                    <p>⛷️50</p>
                    <p>😢1:3.1</p>
                </S.EtcBox>
            </S.RightTeamBox>
        </S.PredictContainer>
    );
};
