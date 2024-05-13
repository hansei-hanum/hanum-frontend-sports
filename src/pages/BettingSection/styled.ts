import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const BettingSectionContainer = styled.section`
  height: 100%;
  width: 100%;
  padding: 15px 20px 0 20px;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  background-color: ${colors.appBackground};
  row-gap: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const BettingSectionInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const BettingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  font-size: 30px;
  font-weight: 800;
  line-height: 1.2;
`;

export const SituationBox = styled.div`
  width: fit-content;
  padding: 8px;
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
