import styled from "@emotion/styled";

export const SubmitContainer = styled.button`
  width: 100%;
  height: 70px;

  border-radius: 10px;
  background-color: #4580f1;
  margin-top: 15px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  padding: 0 10px;
  color: white;
  border: none;
  box-shadow: 0px 4px 40px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  &:active {
    background-color: #2455c3;
  }
`;

export const SubmitBox = styled.p`
  display: flex;
  width: 100%;
  height: 100%;
  // background-color: #4580f1;
  border: none;
  color: white;
  justify-content: center;
  align-items: center;
`;
