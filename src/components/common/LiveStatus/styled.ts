import styled from "@emotion/styled";
import { colors } from "../../../../styles";

interface SatusCircleProps {
  isEnd: boolean;
}

export const MatchStatusContainer = styled.div`
  padding: 0 8px;
  height: 27px;
  border-radius: 30px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background-color: ${colors.grey};
`;

export const StatusCircle = styled.div<SatusCircleProps>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.isEnd ? colors.placeHolder : colors.redTeamColor};
`;
