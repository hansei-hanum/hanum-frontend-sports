import React from 'react';

import { profileIcon } from 'src/assets';
import { LiveChattingCommentsProps } from 'src/pages';

import * as S from './styled';

export const ChatBox: React.FC<LiveChattingCommentsProps> = ({ user, content, predictionTeam }) => {
  const isBlueTeam = predictionTeam === 'TeamB' ? true : false;

  return (
    <S.ChatContainer>
      <S.UserChatCont>
        <S.ProfileBox>
          <img width={40} src={profileIcon} alt="" />
        </S.ProfileBox>
        <S.UserBox>
          <S.UserNameBox isBlueTeam={isBlueTeam}>{user.name}</S.UserNameBox>
          <S.UserChatBox>{content}</S.UserChatBox>
        </S.UserBox>
      </S.UserChatCont>
    </S.ChatContainer>
  );
};
