import React from 'react';

import * as S from './styled';

export enum SportGameType {
  // 농구
  Basketball = 'Basketball',
  // 족구
  FootVolleyball = 'FootVolleyball',
  // 피구
  Dodgeball = 'Dodgeball',
}

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
  textAlign: string;
  sportGameType?: SportGameType;
  win?: boolean;
}

export const Team: React.FC<TeamProps> = ({
  teamData,
  color,
  alignItems,
  textAlign,
  isDuring,
  isEnd,
  sportGameType,
  win,
}) => {
  return (
    <S.TeamBox color={color} alignItems={alignItems}>
      {isDuring ? (
        <>
          <S.Class textAlign={textAlign} fontSize={13} style={{ lineHeight: 1.2 }}>
            {teamData.department} <br /> {teamData.class}
          </S.Class>
          <S.Ratio>{teamData.ratio}%</S.Ratio>
          <S.Graph backgorundColor={color} width={teamData.ratio} />
        </>
      ) : (
        <>
          {isEnd ? (
            <S.TeamBoxEndContent alignItems={alignItems}>
              <S.ClassBox>
                <S.Department>{teamData.department}</S.Department>
                <S.Class textAlign={textAlign} fontSize={13}>
                  {teamData.class}
                </S.Class>
              </S.ClassBox>
              <S.ScoreContainer>
                {sportGameType === SportGameType.Dodgeball ? (
                  <S.Score>{win ? '승리!' : '패배!'}</S.Score>
                ) : (
                  <S.Score>{teamData.score}점</S.Score>
                )}
                <S.ScoreResult>({win ? '승리!' : '패배!'})</S.ScoreResult>
              </S.ScoreContainer>
            </S.TeamBoxEndContent>
          ) : (
            <S.OfflineClassBox>
              <S.Department>{teamData.department}</S.Department>
              <S.Class textAlign={textAlign} fontSize={25}>
                {teamData.class}
              </S.Class>
            </S.OfflineClassBox>
          )}
        </>
      )}
    </S.TeamBox>
  );
};
