import styled from "@emotion/styled";

export const PredictSectionContainer = styled.section`
  height: 92vh;
  width: 100%;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  background-color: #fefefe;
  row-gap: 0.6rem;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const PredictContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ExplainBox = styled.div`
  gap: 10px;
  font-size: 30px;
  font-weight: 700;
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
