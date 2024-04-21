import styled from 'styled-components';

export const BettingContainer = styled.div`
    width: 100%;
    height: 120px;
    border-radius: 10px;
    background-color: #f5f5f5;
    margin-top: 15px;
    font-size: 17px;
    display: flex;
    padding: 10px 10px;
    box-shadow: 0px 4px 40px 6px rgba(0, 0, 0, 0.1);
    gap: 2vh;
    flex-direction: column;
    justify-content: space-around;
`;

export const BettingSituation = styled.div`
    width: 15px;
    height: 15px;
    background-color: #00ca14;
    border-radius: 100px;
`;

export const EventBox = styled.div``;

export const BettingSituationBox = styled.div`
    border-radius: 100px;
    width: 100px;
    height: 20px;
    background-color: #d4d4d4;
    font-size: small;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const HighBetContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
`;

export const MidBetContainer = styled.div`
    display: flex;
    font-weight: bold;
`;

export const LowBetContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: x-large;
    font-weight: 700;
    gap: 5px;
    color: rgba(0, 0, 0, 0.5);
`;

export const RightDeptBox = styled.div`
    display: flex;
    font-size: small;
    flex-direction: column;
    align-items: center;
    color: #e12525;
`;

export const RightClassBox = styled.p`
    font-size: x-large;
    font-weight: 700;
`;

export const LeftDeptBox = styled.div`
    display: flex;
    font-size: small;
    flex-direction: column;
    align-items: center;
    color: #4785fa;
`;

export const LeftClassBox = styled.p`
    font-size: x-large;
    font-weight: 700;
`;
