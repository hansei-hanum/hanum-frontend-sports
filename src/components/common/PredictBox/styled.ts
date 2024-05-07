import styled from '@emotion/styled';
import { colors } from '../../../styles';

interface PercentageBarProps {
    backgroundColor: string;
    percentage: number;
}

interface PercentageBoxProps {
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
`;

export const PercentageCont = styled.div<TeamBoxProps>`
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
    font-size: 18px;
    color: ${(props) => (props.isLeft ? colors.redTeamColor : colors.blueTeamColor)};
    margin: 0 auto;
`;

export const PercentageBox = styled.div<PercentageBoxProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 50px;
    color: ${(props) => props.color};
`;
export const PercentageBar = styled.div<PercentageBarProps>`
    background-color: ${(props) => props.backgroundColor};
    border-radius: 100px;
    width: ${(props) => props.percentage}%;
    height: 13px;
`;
export const EtcBox = styled.p`
    font-size: 20px;
    font-weight: bold;
`;
