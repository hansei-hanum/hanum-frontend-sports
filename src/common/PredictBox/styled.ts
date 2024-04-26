import styled from 'styled-components';

export const PredictContainer = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 10px;
    background-color: #ffffff;
    margin-top: 15px;
    font-size: 17px;
    display: flex;
    font-weight: bold;
    padding: 0 10px;
    gap: 15px;
    justify-content: center;
`;

export const RightTeamBox = styled.div`
    display: flex;
    align-items: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    border: 3px solid;
    border-radius: 20px;
    padding: 0 5px;
`;
export const LeftTeamBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    border: 3px solid;
    border-radius: 20px;
    padding: 0 5px;
`;

export const LeftDeptBox = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 18px;
`;
export const RightDeptBox = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 18px;
`;

export const RatingBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 60px;
`;
export const RatingBar = styled.div`
    background-color: #e12525;
    border-radius: 100px;
    width: 80px;
    height: 10px;
`;
export const EtcBox = styled.p``;
