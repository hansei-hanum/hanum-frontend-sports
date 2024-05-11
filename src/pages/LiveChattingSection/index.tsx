import React, { useEffect, useRef, useState } from 'react';

import { ChattingBox, GameSchedule, ChatBox } from 'src/components';
import { MatchList } from 'src/constants';
import { socket } from 'src/socket';

import * as S from './styled';

export interface LiveChattingCommentsProps {
  content: string;
  predictionTeam: string;
  user: {
    name: string;
  };
}

export const LiveChattingSection: React.FC = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [comments, setComments] = useState<LiveChattingCommentsProps[]>([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('socket connected');
    });

    socket.on('message', (data) => {
      setComments((prevComments) => [...prevComments, data]);
      chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' });
    });

    return () => {
      socket.off('connect');
      socket.off('message');
    };
  }, []);

  const handleCommentSubmit = (newComment: string) => {
    // setComments([...comments, newComment]);
  };

  return (
    <section>
      <S.LiveChatSectionContainer>
        <GameSchedule isbutton={true} description="현재 예측이 진행 중입니다" scheduleData={MatchList.data.games[0]} />
        <S.ChattingContainer ref={chatContainerRef}>
          {comments.map(({ user, content, predictionTeam }, index) => (
            <ChatBox key={index} user={user} content={content} predictionTeam={predictionTeam} />
          ))}
        </S.ChattingContainer>
        <S.WriteChatCont>
          <ChattingBox onCommentSubmit={handleCommentSubmit} />
        </S.WriteChatCont>
      </S.LiveChatSectionContainer>
    </section>
  );
};
