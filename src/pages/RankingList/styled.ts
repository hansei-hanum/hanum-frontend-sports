import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const RankBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const RankBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  padding-right: 8.8px;
`;

export const MyRank = styled.p`
  color: ${colors.placeHolder};
`;
