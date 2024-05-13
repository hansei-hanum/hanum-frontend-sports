import styled from '@emotion/styled';

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
  textAlign: string;
}

interface TeamBoxEndContentProps {
  alignItems: string;
}

export const TeamBox = styled.div<TeamBoxProps>`
  width: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  color: ${(props) => props.color};
  gap: 5px;
`;

export const TeamBoxEndContent = styled.div<TeamBoxEndContentProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  row-gap: 10px;
`;

export const ClassBox = styled.div`
  display: flex;
  flex-direction: column;
  /* display: flex; */
  column-gap: 4px;
`;

export const OfflineClassBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Department = styled.p`
  font-size: 13px;
`;

export const Class = styled.p<ClassProps>`
  font-size: ${(props) => props.fontSize + 'px'};
  text-align: ${(props) => props.textAlign};
`;

export const Ratio = styled.span`
  font-size: 36px;
`;

export const Graph = styled.div<GraphProps>`
  width: ${(props) => props.width}%;
  height: 14px;
  border-radius: 50px;
  background-color: ${(props) => props.backgorundColor};
`;

export const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Score = styled.p`
  font-size: 28px;
`;

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: flex-end;
`;

export const ScoreResult = styled.p`
  font-weight: 600;
`;
