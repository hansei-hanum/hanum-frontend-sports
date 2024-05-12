import React from 'react';

import { profileIcon } from 'src/assets';
import { LiveChattingCommentsProps } from 'src/pages';
import { colors } from 'src/styles';

import * as S from './styled';

export const ChatBox: React.FC<LiveChattingCommentsProps> = ({ user, content, predictionTeam }) => {
  const teamColors =
    predictionTeam === 'TeamB' ? colors.blueTeamColor : !predictionTeam ? colors.placeHolder : colors.redTeamColor;
  return (
    <S.ChatContainer>
      <S.UserChatCont>
        <S.ProfileBox>
          <img width={40} src={profileIcon} alt="" />
        </S.ProfileBox>
        <S.UserBox>
          <S.UserNameBox teamColors={teamColors}>{user.name}</S.UserNameBox>
          <S.UserChatBox>{content}</S.UserChatBox>
        </S.UserBox>
      </S.UserChatCont>
    </S.ChatContainer>
  );
};
