import React from 'react';

import { GetLiveGameTeamProps, SportGameType } from 'src/api';

import * as S from './styled';

interface TeamProps {
  teamData: GetLiveGameTeamProps;
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
  const realPercentage = Math.floor(teamData.predictions.ratio * 100);

  return (
    <S.TeamBox color={color} alignItems={alignItems}>
      {isDuring ? (
        <>
          <S.Class textAlign={textAlign} fontSize={12.8} style={{ lineHeight: 1.2 }}>
            {teamData.name}
          </S.Class>
          <S.Ratio>{realPercentage}%</S.Ratio>
          <S.Graph backgorundColor={color} width={realPercentage} />
        </>
      ) : (
        <>
          {isEnd ? (
            <S.TeamBoxEndContent alignItems={alignItems}>
              <S.ClassBox>
                <S.Department>{teamData.name}</S.Department>
                <S.Class textAlign={textAlign} fontSize={13}>
                  {/* {teamData.class} */}
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
              <S.Department>{teamData.name}</S.Department>
              <S.Class textAlign={textAlign} fontSize={25}>
                {/* {teamData.class} */}
              </S.Class>
            </S.OfflineClassBox>
          )}
        </>
      )}
    </S.TeamBox>
  );
};
