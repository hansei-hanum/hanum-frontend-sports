import React from "react";
import * as S from "./styled";
import profile from "@assets/icons/profile.png";

export interface ChatProps {
  name: string;
  comment: string;
}

export const ChatBox: React.FC<ChatProps> = ({ name, comment }) => {
  return (
    <S.ChatContainer>
      <S.UserChatCont>
        <S.ProfileBox>
          <img width={40} src={profile}></img>
        </S.ProfileBox>
        <S.UserBox>
          <S.UserNameBox>{name}</S.UserNameBox>
          <S.UserChatBox>{comment}</S.UserChatBox>
        </S.UserBox>
      </S.UserChatCont>
    </S.ChatContainer>
  );
};
