import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const MyPointBox = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: ${colors.placeHolder};
`;

export const MyPoint = styled.p`
  font-size: 35px;
  font-weight: 900;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
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
  color: #48a7ff;
`;
