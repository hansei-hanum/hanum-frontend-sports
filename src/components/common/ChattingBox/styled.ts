import styled from '@emotion/styled';

export const ChatContainer = styled.div`
  width: 100%;
  height: 55px;
  border-radius: 15px;
  background-color: #ffffff;
  margin-top: 15px;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 0 10px;
  box-shadow: 0px 4px 40px 6px rgba(0, 0, 0, 0.1);
`;

export const WriteChatContainer = styled.div`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
`;

export const WriteBox = styled.input`
  width: 300px;
  height: 100%;
  padding: 0 10px;
  color: ${(props) => (props.value ? 'rgba(0,0,0,1)' : 'rgba(0, 0, 0, 1)')};
  border: none;
  border-radius: 10px;
  font-size: 17px;
  font-weight: midium;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    content: '메세지 보내기';
  }

  &:focus {
    outline: none;
  }
`;
