import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const MatchListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-bottom: 20px;
`;

export const GameListContainer = styled(MatchListContainer)`
  background-color: ${colors.appBackground};
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
