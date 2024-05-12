import styled from '@emotion/styled';

export const SubmitContainer = styled.button<{ isDisabled: boolean }>`
  width: 100%;
  height: 45px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.isDisabled ? '#a3a3a3' : '#4580f1')};
  margin-top: 15px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  padding: 0 10px;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
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
