import React, { useState } from 'react';

import { ChattingBox, GameSchedule, ChatBox } from 'src/components';
import { MatchList } from 'src/constants';

import * as S from './styled';

export const LiveChatting: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = (newComment: string) => {
    setComments([...comments, newComment]);
  };

  return (
    <section>
      <S.LiveChatSectionContainer>
        <GameSchedule isbutton={true} description="현재 예측이 진행 중입니다" scheduleData={MatchList.data.games[0]} />
        <S.ChattingContainer>
          {comments.map((comment, index) => (
            <ChatBox key={index} name="권기현" comment={comment} />
          ))}
        </S.ChattingContainer>
        <S.WriteChatCont>
          <ChattingBox onCommentSubmit={handleCommentSubmit} />
        </S.WriteChatCont>
      </S.LiveChatSectionContainer>
    </section>
  );
};
