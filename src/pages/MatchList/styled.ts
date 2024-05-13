import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const HeaderWrapper = styled.div`
  padding-top: 10px;
`;

export const MatchListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 10px;
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
