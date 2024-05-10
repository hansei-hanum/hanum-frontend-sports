import styled from '@emotion/styled';

export const ChatContainer = styled.div``;

export const ProfileBox = styled.div``;

export const UserChatCont = styled.div`
    display: flex;
    gap: 10px;
`;

export const UserNameBox = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: #48a7ff;
`;

export const UserChatBox = styled.div`
    white-space: pre-line; /* 줄 바꿈을 유지하되, 연속된 공백은 하나로 처리 */
    overflow-wrap: break-word; /* 긴 단어를 강제로 줄 바꿈 */
    width: 70vw; /* 텍스트의 최대 너비 제한을 위해 임의로 지정 */
    font-size: 15px;
`;

export const UserBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
`;
