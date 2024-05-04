import styled from "@emotion/styled";
import { colors } from "../../../../styles";

interface TeamBoxProps {
  color: string;
  alignItems: string;
}

interface GraphProps {
  backgorundColor: string;
  width: number;
}

interface ClassProps {
  fontSize: number;
}

export const SheduleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const Schedule = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 20px;
  gap: 15px;
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

export const Content = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: center;
  gap: 10px;
`;

export const TeamBox = styled.div<TeamBoxProps>`
  width: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  color: ${(props) => props.color};
  gap: 5px;
`;

export const ClassBox = styled.div`
  display: flex;
`;

export const Department = styled.p`
  font-size: 13px;
`;

export const Class = styled.p<ClassProps>`
  font-size: ${(props) => props.fontSize + "px"};
`;

export const IconBox = styled.span`
  font-size: 25px;
  color: ${colors.uiBrightGray};
  font-weight: bold;
`;

export const Ratio = styled.p`
  font-size: 40px;
`;

export const Graph = styled.div<GraphProps>`
  width: ${(props) => props.width}%;
  height: 14px;
  border-radius: 50px;
  background-color: ${(props) => props.backgorundColor};
`;
