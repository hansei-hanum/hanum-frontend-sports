import styled from '@emotion/styled';

import { colors } from 'src/styles';

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
  font-size: 17px;
  display: flex;
  font-weight: bold;

  gap: 15px;
  justify-content: center;
`;

export const TeamBox = styled.div<TeamBoxProps>`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: ${(props) => (props.isLeft ? 'flex-end' : 'flex-start')};
  flex-direction: column;
  gap: 20px;
  border: 3px solid #e7e7e7;
  border-radius: 10px;
  padding: 10px 5px;
  transition: border-color 150ms;
`;

export const PercentageCont = styled.div<TeamBoxProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: ${(props) => (props.isLeft ? 'flex-end' : 'flex-start')};
  margin: 0 auto;
`;

export const DeptBox = styled.p<TeamBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isLeft ? 'flex-end' : 'flex-start')};
  font-size: 14px;
  color: ${(props) => (props.isLeft ? colors.redTeamColor : colors.blueTeamColor)};
  margin: 0 auto;
`;

export const PercentageBox = styled.div<PercentageBoxProps & TeamBoxProps>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.isLeft ? 'flex-end' : 'flex-start')};
  font-size: 46px;
  color: ${(props) => props.color};
`;

export const PercentageBar = styled.div<PercentageBarProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 100px;
  width: ${(props) => props.percentage}%;
  height: 13px;
`;

export const EtcBox = styled.div<TeamBoxProps>`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  font-size: 18px;
  font-weight: bold;
  flex-direction: column;
  align-items: ${(props) => (props.isLeft ? 'flex-end' : 'flex-start')};
`;

export const Etc = styled.div<TeamBoxProps>`
  display: flex;
  column-gap: 6px;
  flex-direction: ${(props) => (props.isLeft ? 'row' : 'row-reverse')};
`;
