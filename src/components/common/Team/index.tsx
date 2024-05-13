import React from 'react';

import { GetGameTeamProps, SportGameType } from 'src/api';

import * as S from './styled';

interface TeamProps {
  teamData: GetGameTeamProps;
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
  const realPercentage = teamData.predictions ? Math.floor(teamData.predictions.ratio * 100) : 0;

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
                {teamData.name.split('\n').map((line, index) => (
                  <>
                    <S.Department key={index}>
                      <span style={{ fontSize: index !== 0 ? '24px' : '14px' }}>{line}</span>
                      {index !== teamData.name.split('\n').length - 1 && <br />}
                    </S.Department>
                  </>
                ))}
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
