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
}

export const Team: React.FC<TeamProps> = ({
  teamData,
  color,
  alignItems,
  isDuring,
  isEnd,
}) => {
  return (
    <S.TeamBox color={color} alignItems={alignItems}>
      {isDuring ? (
        <>
          <S.ClassBox>
            <S.Department>{teamData.department}</S.Department>
            <S.Class fontSize={13}>{teamData.class}</S.Class>
          </S.ClassBox>

          <S.Ratio>{teamData.ratio}%</S.Ratio>
          <S.Graph backgorundColor={color} width={teamData.ratio} />
        </>
      ) : (
        <>
          {isEnd ? (
            <S.TeamBoxEndContent alignItems={alignItems}>
              <S.ClassBox>
                <S.Department>{teamData.department}</S.Department>
                <S.Class fontSize={13}>{teamData.class}</S.Class>
              </S.ClassBox>
              <S.Score>{teamData.score}</S.Score>
            </S.TeamBoxEndContent>
          ) : (
            <S.OfflineClassBox>
              <S.Department>{teamData.department}</S.Department>
              <S.Class fontSize={25}>{teamData.class}</S.Class>
            </S.OfflineClassBox>
          )}
        </>
      )}
    </S.TeamBox>
  );
};
