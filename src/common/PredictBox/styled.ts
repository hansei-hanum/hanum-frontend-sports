import styled from 'styled-components';
import { colors } from '../../styles';

interface RatingBarProps {
    backgroundColor: string;
}

interface RatingBoxProps {
    color: string;
}

interface TeamBoxProps {
    isLeft: boolean;
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

export const TeamBox = styled.div<TeamBoxProps>`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: ${(props) => (props.isLeft ? 'flex-end' : 'flex-start')};
    flex-direction: column;
    gap: 10px;
    border: 3px solid #e7e7e7;
    border-radius: 20px;
    padding: 10px 5px;
    text-align: center;
`;

export const RatioBox = styled.div<TeamBoxProps>`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: ${(props) => (props.isLeft ? 'flex-end' : 'flex-start')};
    margin: 0 auto;
`;

export const DeptBox = styled.p<TeamBoxProps>`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.isLeft ? 'flex-end' : 'flex-start')};
    font-size: 13px;
    color: ${(props) => (props.isLeft ? colors.redTeamColor : colors.blueTeamColor)};
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
