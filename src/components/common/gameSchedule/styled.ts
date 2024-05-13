import styled from '@emotion/styled';

import { colors } from 'src/styles';

interface ContentProps {
  isEnd: boolean;
}

export const SheduleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

export const Schedule = styled.div<{ isEnd: boolean }>`
  width: 100%;
  border-radius: 20px;
  gap: ${(props) => (props.isEnd ? '5' : '15')}px;
  box-shadow: 0px 2px 10px 4px rgba(0, 0, 0, 0.1);
  padding: 4px 16px;
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
  gap: ${(props) => (props.isEnd ? '20' : '15')}px;
  margin-top: 10px;
  flex-direction: column;
`;

export const IconBox = styled.span`
  font-size: 25px;
  color: ${colors.uiBrightGray};
  font-weight: bold;
`;

export const AllBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 15px;
`;

export const ButtonBox = styled.div`
  width: 100%;
`;
