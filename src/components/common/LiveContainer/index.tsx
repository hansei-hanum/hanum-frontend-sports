import React from "react";
import * as S from "./styled";

export interface LiveContainerProps {
  children: React.ReactNode;
}

export const LiveContainer: React.FC<LiveContainerProps> = ({ children }) => {
  return <S.LiveContainer>{children}</S.LiveContainer>;
};
