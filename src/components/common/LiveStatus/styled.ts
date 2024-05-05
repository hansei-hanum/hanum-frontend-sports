import styled from "@emotion/styled";
import { colors } from "../../../../styles";

interface SatusCircleProps {
  isEnd: boolean;
}

export const MatchStatusContainer = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 17px;
`;

export const StatusCircle = styled.div<SatusCircleProps>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.isEnd ? colors.placeHolder : colors.redTeamColor};
`;
