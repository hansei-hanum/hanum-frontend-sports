import styled from '@emotion/styled';

export const ChatContainer = styled.div``;

export const ProfileBox = styled.div``;

export const UserChatCont = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserNameBox = styled.div<{ teamColors: string }>`
  font-size: 20px;
  font-weight: 700;
  color: ${({ teamColors }) => teamColors};
`;

export const UserChatBox = styled.div`
  white-space: pre-line;
  overflow-wrap: break-word;
  width: 70vw;
  font-size: 15px;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;
