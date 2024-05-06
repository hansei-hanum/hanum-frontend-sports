import React from "react";
import * as S from "./styled";

export interface StatusContainerProps {
  children: React.ReactNode;
  isEnd: boolean;
}

export const StatusContainer: React.FC<StatusContainerProps> = ({
  children,
  isEnd,
}) => {
  return (
    <S.StatusContainer isEnd={isEnd ? true : false}>
      {children}
    </S.StatusContainer>
  );
};
