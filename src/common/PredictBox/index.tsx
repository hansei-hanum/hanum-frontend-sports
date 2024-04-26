import React from 'react';
import * as S from './styled';

export const PredictBox: React.FC = () => {
    return (
        <S.PredictContainer>
            <S.LeftTeamBox>
                <S.LeftDeptBox>
                    클라우드 보안과 <p />
                    2학년 1반
                </S.LeftDeptBox>
                <S.RatingBox>50%</S.RatingBox>
                <S.RatingBar />
                <S.EtcBox>
                    1500
                    <p />
                    50
                    <p />
                    1:3.1
                </S.EtcBox>
            </S.LeftTeamBox>
            <S.RightTeamBox>
                <S.RightDeptBox>
                    클라우드 보안과 <p />
                    2학년 2반
                </S.RightDeptBox>
                <S.RatingBox>50%</S.RatingBox>
                <S.RatingBar />
                <S.EtcBox>
                    1500
                    <p />
                    50
                    <p />
                    1:3.1
                </S.EtcBox>
            </S.RightTeamBox>
        </S.PredictContainer>
    );
};
