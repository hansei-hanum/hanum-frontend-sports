import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const GameBoxContainer = styled.div`
  padding: 18px;
  border-radius: 16px;
  box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.1);
  border: 3px solid ${colors.placeHolder};
  text-align: center;
`;

export const GameBoxText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
