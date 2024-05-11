import React from 'react';

import { Bet } from 'src/constants';
import { profileIcon } from 'src/assets';

import * as S from './styled';

export interface ChatProps {
  betTeam: number;
  name: string;
  comment: string;
}

export const ChatBox: React.FC<Omit<ChatProps, 'betTeam'>> = ({ name, comment }) => {
  const betTeam = Bet.data.teamId;
  return (
    <S.ChatContainer>
      <S.UserChatCont>
        <S.ProfileBox>
          <img width={40} src={profileIcon} alt="" />
        </S.ProfileBox>
        <S.UserBox>
          <S.UserNameBox betTeam={betTeam}>{name}</S.UserNameBox>
          <S.UserChatBox>{comment}</S.UserChatBox>
        </S.UserBox>
      </S.UserChatCont>
    </S.ChatContainer>
  );
};
