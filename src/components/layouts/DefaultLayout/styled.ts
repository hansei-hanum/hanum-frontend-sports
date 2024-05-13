import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const DefaultLayoutContainer = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 10px 20px 70px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  background-color: ${colors.appBackground};
`;
