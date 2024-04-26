import React from "react";
import * as S from "./styled";

export const LiveStatus: React.FC = () => {
  return (
    <S.LiveStatusContainer>
      <S.LiveCircle />
      LIVE
    </S.LiveStatusContainer>
  );
};
