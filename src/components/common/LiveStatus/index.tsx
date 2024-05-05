import React from "react";
import * as S from "./styled";

interface MatchStatusProps {
  isEnd: boolean;
}

export const MatchStatus: React.FC<MatchStatusProps> = ({ isEnd }) => {
  return (
    <S.MatchStatusContainer>
      <S.StatusCircle isEnd={isEnd} />
      {isEnd ? "경기종료" : "LIVE"}
    </S.MatchStatusContainer>
  );
};
