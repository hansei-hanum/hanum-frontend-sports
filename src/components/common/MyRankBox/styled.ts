import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const MyRankContainer = styled.div`
  width: 100%;
  height: 35px;
  border-radius: 50px;
  background-color: ${colors.myRankBoxBackground};
  margin-top: 15px;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 0 10px;
`;

export const RankBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const RankBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const MyRank = styled.p`
  color: ${colors.myRankBoxFontColor};
`;

export const MyName = styled.p``;

export const MyPoint = styled.p`
  font-size: 14px;
`;

export const RankBarIcon = styled.span``;
