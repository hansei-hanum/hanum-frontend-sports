import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const BettingSectionContainer = styled.section`
  height: 95vh;
  width: 100%;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  background-color: ${colors.appBackground};
  row-gap: 0.6rem;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const BettingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ExplaneBox = styled.div`
  gap: 10px;
  font-size: 25px;
  font-weight: bold;
`;

export const SituationBox = styled.div`
  width: 120px;
  height: 50px;
  padding: 0 5px;
  gap: 5px;
  display: flex;
  align-items: center;
  border-radius: 90px;
  background-color: #f5f5f5;
  font-size: 15px;
  font-weight: 700;
`;

export const ColorBox = styled.div`
  background-color: #0cee52;
  width: 20px;
  height: 20px;
  border-radius: 100px;
`;

export const SubmitContainer = styled.div``;
