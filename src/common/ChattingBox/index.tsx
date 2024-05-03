import React from 'react';
import * as S from './styled';
import sendIcon from '../../assets/icons/sendIcon.png';

export const ChattingBox: React.FC = () => {
    return (
        <S.ChatContainer>
            <S.WriteChatContainer>
                <S.WriteBox type="text" placeholder="메세지 보내기"></S.WriteBox>
                <img width={30} src={sendIcon}></img>
            </S.WriteChatContainer>
        </S.ChatContainer>
    );
};
