import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const MyRankContainer = styled.div`
  width: 100%;
  border-radius: 50px;
  background-color: #f9f9f9;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 8px 10px 8px 15px;
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
  color: ${colors.placeHolder};
`;

export const MyName = styled.p``;

export const MyPoint = styled.p``;

export const RankBarIcon = styled.span``;
