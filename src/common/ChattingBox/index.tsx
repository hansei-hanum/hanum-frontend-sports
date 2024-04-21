import React from 'react';
import * as S from './styled';
import sendIcon from '../../assets/icons/sendIcon.png';

export const ChattingBox: React.FC = () => {
    return (
        <S.ChatContainer>
            <S.WriteChatContainer>메세지 보내기</S.WriteChatContainer>
            <S.WriteChatContainer>
                <img width={30} src={sendIcon}></img>
            </S.WriteChatContainer>
        </S.ChatContainer>
    );
};
