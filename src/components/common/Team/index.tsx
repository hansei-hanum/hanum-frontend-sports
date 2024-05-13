import React from 'react';

import { GetGameTeamProps, SportGameType } from 'src/api';

import * as S from './styled';

interface TeamProps {
  teamData: GetGameTeamProps;
  color: string;
  alignItems: string;
  isDuring: boolean;
  isLive?: boolean;
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
  isLive,
}) => {
  const realPercentage = teamData.predictions ? Math.floor(teamData.predictions.ratio * 100) : 0;
  const isDodgeball = sportGameType === SportGameType.Dodgeball;

  return (
    <S.TeamBox color={color} alignItems={alignItems}>
      {isDuring ? (
        <>
          <S.Class textAlign={textAlign} fontSize={teamData.predictions ? 12 : 20} style={{ lineHeight: 1.2 }}>
            {teamData.name}
          </S.Class>
          {teamData.predictions && (
            <>
              <S.Ratio>{realPercentage}%</S.Ratio>
              <S.Graph backgorundColor={color} width={realPercentage} />
            </>
          )}
        </>
      ) : (
        <>
          {isEnd || isLive ? (
            <S.TeamBoxEndContent alignItems={alignItems}>
              <S.ClassBox>
                <S.Department>{teamData.name}</S.Department>
              </S.ClassBox>
              <S.ScoreContainer textAlign={textAlign}>
                {isDodgeball && isEnd ? (
                  <S.Score>{win ? '승리!' : '패배!'}</S.Score>
                ) : sportGameType !== 'Dodgeball' ? (
                  <S.Score>{teamData.score}점</S.Score>
                ) : (
                  <>
                    <S.Ratio>{realPercentage}%</S.Ratio>
                    <S.Graph backgorundColor={color} width={realPercentage} />
                  </>
                )}
                {isEnd && !isDodgeball && <S.ScoreResult>({win ? '승리!' : '패배!'})</S.ScoreResult>}
              </S.ScoreContainer>
            </S.TeamBoxEndContent>
          ) : (
            <S.OfflineClassBox>
              {teamData.name.split('\n').map((line, index) => (
                <div key={index}>
                  <span style={{ fontSize: index !== 0 ? '24px' : '14px', fontWeight: index !== 0 ? 600 : 500 }}>
                    {line}
                  </span>
                  {index !== teamData.name.split('\n').length - 1 && <br />}
                </div>
              ))}
            </S.OfflineClassBox>
          )}
        </>
      )}
    </S.TeamBox>
  );
};
