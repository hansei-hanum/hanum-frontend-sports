import styled from 'styled-components';
import { colors } from '../../styles';

interface RatingBarProps {
    backgroundColor: string;
}

interface RatingBoxProps {
    color: string;
}

export const PredictContainer = styled.div`
    width: 100%;
    height: 240px;
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
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    border: 3px solid #e7e7e7;
    border-radius: 20px;
    padding: 10px 5px;
    text-align: center;
`;
export const LeftTeamBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    border: 3px solid #e7e7e7;
    border-radius: 20px;
    padding: 10px 5px;
`;

export const LeftRatioBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-end;
    margin: 0 auto;
`;

export const RightRatioBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    margin: 0 auto;
`;

export const LeftDeptBox = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 13px;
    color: ${colors.redTeamColor};
    margin: 0 auto;
`;
export const RightDeptBox = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 13px;
    font-weight: bold;
    color: ${colors.blueTeamColor};
    margin: 0 auto;
`;

export const RatingBox = styled.div<RatingBoxProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 60px;
    color: ${(props) => props.color};
`;
export const RatingBar = styled.div<RatingBarProps>`
    background-color: ${(props) => props.backgroundColor};
    border-radius: 100px;
    width: 80px;
    height: 13px;
`;
export const EtcBox = styled.p`
    font-size: 20px;
    font-weight: bold;
`;
