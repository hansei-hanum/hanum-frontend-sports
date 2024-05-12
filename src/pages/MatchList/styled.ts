import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const MatchListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-bottom: 20px;
`;

export const GameListContainer = styled(MatchListContainer)`
  padding: 0 20px;
  background-color: ${colors.appBackground};
`;
