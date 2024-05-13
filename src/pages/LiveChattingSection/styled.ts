import styled from '@emotion/styled';

export const LiveChatSectionContainer = styled.section`
  height: 100%;
  width: 100%;
  row-gap: 0.6rem;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-bottom: 10px;
`;

export const ChattingContainer = styled.div`
  padding: 10px;
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;
  flex-grow: 1;
`;

export const WriteChatCont = styled.div`
  margin-bottom: 20px;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
