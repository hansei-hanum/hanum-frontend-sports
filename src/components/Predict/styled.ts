import styled from '@emotion/styled';

const baseBoxStyles = `
  gap: 10px;
`;

export const PredictSectionContainer = styled.section`
    height: 95vh;
    width: 100%;
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-color: #fefefe;
    row-gap: 0.6rem;
    ${baseBoxStyles}
    display: flex;
    flex-direction: column;
`;

export const PredictContainer = styled.div`
    width: 100%;
    ${baseBoxStyles}
    display: flex;
    flex-direction: column;
`;

export const ExplainBox = styled.div`
    ${baseBoxStyles}
    font-size: 30px;
    font-weight: 700;
`;

export const SituationBox = styled.div`
    width: 130px;
    height: 45px;
    padding: 0 5px;
    ${baseBoxStyles}
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
