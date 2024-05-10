import styled from "@emotion/styled";

export const BettingContainer = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 15px;
  font-size: 17px;
  display: flex;
  font-weight: bold;
  flex-direction: column;
  gap: 10px;
`;

export const BettingBox = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  color: ${(props) => (props.value ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 1)")};
  border: none;
  border-radius: 10px;
  background-color: #f5f5f5;
  font-size: 17px;
  font-weight: midium;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    content: "베팅할 금액을 입력해주세요";
  }
`;

export const BettingAmountContainer = styled.div`
  padding: 0 10px;
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const BettingAmountBox = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
`;
