import React from "react";
import * as S from "./styled";

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
}

export const Team: React.FC<TeamProps> = ({
  teamData,
  color,
  alignItems,
  textAlign,
  isDuring,
  isEnd,
}) => {
  return (
    <S.TeamBox color={color} alignItems={alignItems}>
      {isDuring ? (
        <>
          <S.Class
            textAlign={textAlign}
            fontSize={13}
            style={{ lineHeight: 1.2 }}
          >
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
              <S.Score>{teamData.score}</S.Score>
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
