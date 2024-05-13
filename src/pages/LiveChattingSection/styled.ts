import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const LiveChatSectionContainer = styled.section`
  height: 92vh;
  width: 100%;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  row-gap: 0.6rem;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChattingContainer = styled.div`
  padding: 10px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;
`;

export const WriteChatCont = styled.div`
  margin-bottom: -40px;
`;

export const GameBoxContainer = styled.div`
  padding: 18px;
  border-radius: 16px;
  box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.1);
  border: 3px solid ${colors.placeHolder};
  text-align: center;
`;

export const GameBoxText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
