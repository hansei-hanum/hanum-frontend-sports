import styled from '@emotion/styled';

import { colors } from 'src/styles';

import { SchedulePropsIsEnd } from '../gameSchedule/styled';

interface StatusContainerProps {
  isEnd: boolean;
}

interface ContentProps {
  isEnd: boolean;
}

export const StatusContainer = styled.div<StatusContainerProps>`
  min-height: 175px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0px 2px 10px 4px rgba(0, 0, 0, 0.1);
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  border: 4px solid transparent;
  background: ${(props) =>
    props.isEnd
      ? ''
      : `linear-gradient(${colors.appBackground} 0 0) padding-box,
  linear-gradient(to right, ${colors.redTeamColor}, ${colors.blueTeamColor})
    border-box;`};
  background-color: white;
`;

export const SheduleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const Schedule = styled.div<SchedulePropsIsEnd>`
  width: 100%;
  height: 160px;
  border-radius: 20px;
  gap: ${(props) => (props.isEnd ? '5' : '15')}px;
  box-shadow: 0px 4px 40px 6px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScheduleTop = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  font-weight: 900;
`;

export const StatusDescription = styled.div`
  width: 100%;
  font-size: 17px;
  font-weight: 900;
`;

export const Content = styled.div<ContentProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const IconBox = styled.span`
  font-size: 25px;
  color: ${colors.uiBrightGray};
  font-weight: bold;
`;
