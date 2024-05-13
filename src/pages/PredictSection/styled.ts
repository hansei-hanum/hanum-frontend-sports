import styled from '@emotion/styled';

import { colors } from 'src/styles';

const baseBoxStyles = `
  gap: 10px;
`;

export const PredictSectionContainer = styled.section`
  height: 100%;
  width: 100%;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  background-color: ${colors.appBackground};
  row-gap: 0.6rem;
  ${baseBoxStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const PredictSectionInnerContainer = styled.div`
  display: flex;
  max-width: 600px;
  padding: 15px 20px 0 20px;
  flex-direction: column;
  row-gap: 24px;
`;

export const PredictContainer = styled.div`
  width: 100%;
  ${baseBoxStyles}
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
  ${baseBoxStyles}
  display: flex;
  align-items: center;
  border-radius: 90px;
  background-color: #f5f5f5;
  font-size: 15px;
  font-weight: 700;
  justify-content: center;
`;

export const ColorBox = styled.div`
  background-color: #0cee52;
  width: 20px;
  height: 20px;
  border-radius: 100px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px 0 20px;
  max-width: 600px;
`;
