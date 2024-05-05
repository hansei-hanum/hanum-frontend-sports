import styled from "@emotion/styled";
import { colors } from "../../../../styles";

interface StatusContainerProps {
  isEnd: boolean;
}

export const StatusContainer = styled.div<StatusContainerProps>`
  width: 100%;
  height: 180px;
  border-radius: 20px;
  box-shadow: 0px 4px 40px 6px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid transparent;
  background: ${(props) =>
    props.isEnd
      ? ""
      : `linear-gradient(${colors.appBackground} 0 0) padding-box,
  linear-gradient(to right, ${colors.redTeamColor}, ${colors.blueTeamColor})
    border-box;`} 
  background-color: white;
`;
