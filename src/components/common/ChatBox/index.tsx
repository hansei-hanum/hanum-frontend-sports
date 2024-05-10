import React from 'react';
import * as S from './styled';
import { profileIcon } from '@assets';

export interface ChatProps {
    name: string;
    comment: string;
}

export const ChatBox: React.FC<ChatProps> = ({ name, comment }) => {
    return (
        <S.ChatContainer>
            <S.UserChatCont>
                <S.ProfileBox>
                    <img width={40} src={profileIcon}></img>
                </S.ProfileBox>
                <S.UserBox>
                    <S.UserNameBox>{name}</S.UserNameBox>
                    <S.UserChatBox>{comment}</S.UserChatBox>
                </S.UserBox>
            </S.UserChatCont>
        </S.ChatContainer>
    );
};
