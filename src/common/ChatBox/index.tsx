import React from 'react';
import * as S from './styled';
import profile from '../../assets/icons/profile.png';

export const ChatBox: React.FC = () => {
    return (
        <S.ChatContainer>
            <S.UserChatCont>
                <S.ProfileBox>
                    <img width={40} src={profile}></img>
                </S.ProfileBox>
                <S.UserBox>
                    <S.UserNameBox>권기현</S.UserNameBox>
                    <S.UserChatBox>나는야 퉁퉁이~ 골목대장 이라네~</S.UserChatBox>
                </S.UserBox>
            </S.UserChatCont>
        </S.ChatContainer>
    );
};
