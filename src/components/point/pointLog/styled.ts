import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const LogContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 20px 10px;
`;

export const LogBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LogBoxLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;
`;

export const Cause = styled.p`
  font-size: 17px;
  font-weight: 900;
`;

export const Event = styled.p`
  font-size: 15px;
  font-weight: 900;
  color: ${colors.placeHolder};
`;

export const LogBoxRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  font-weight: 900;
  gap: 5px;
  margin-right: 10px;
`;
