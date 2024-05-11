import React from 'react';
import * as S from './styled';
import { profileIcon } from '@assets';
import { Bet } from '@constants';

export interface ChatProps {
    betTeam: number;
    name: string;
    comment: string;
}

export const ChatBox: React.FC<ChatProps> = ({ name, comment }) => {
    const betTeam = Bet.data.teamId;
    return (
        <S.ChatContainer>
            <S.UserChatCont>
                <S.ProfileBox>
                    <img width={40} src={profileIcon}></img>
                </S.ProfileBox>
                <S.UserBox>
                    <S.UserNameBox betTeam={betTeam}>{name}</S.UserNameBox>
                    <S.UserChatBox>{comment}</S.UserChatBox>
                </S.UserBox>
            </S.UserChatCont>
        </S.ChatContainer>
    );
};
