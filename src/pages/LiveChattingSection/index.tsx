import React, { useEffect, useRef, useState } from 'react';

import { ChattingBox, GameSchedule, ChatBox, Spinner } from 'src/components';
import { socket } from 'src/socket';
import { useAppBridge } from 'src/hooks';
import { useSendChat } from 'src/hooks/queries';
import { useGetLiveGame } from 'src/hooks/queries/useGetLiveGame';
import { colors } from 'src/styles';

import * as S from './styled';

export interface LiveChattingCommentsProps {
  content: string;
  predictionTeam?: string;
  user: {
    name: string;
  };
}

export const LiveChattingSection: React.FC = () => {
  const { data, isLoading } = useGetLiveGame();
  const { mutate } = useSendChat();
  const { goToScreen } = useAppBridge();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [comments, setComments] = useState<LiveChattingCommentsProps[]>([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('socket connected');
    });

    socket.on('message', (data) => {
      setComments((prevComments) => [...prevComments, data]);
    });

    return () => {
      socket.off('connect');
      socket.off('message');
    };
  }, []);

  useEffect(() => {
    chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' });
  }, [comments]);

  const handleCommentSubmit = (content: string) => {
    mutate({ content });
  };

  return (
    <section>
      <S.LiveChatSectionContainer>
        {isLoading ? (
          <S.LoadingWrapper>
            <Spinner color={colors.placeHolder} size="40px" />
          </S.LoadingWrapper>
        ) : data ? (
          <GameSchedule disabled={false} isButton={true} scheduleData={data?.data} onClick={() => goToScreen()} />
        ) : (
          <S.GameBoxContainer>
            <S.GameBoxText>진행 중인 경기가 없어요</S.GameBoxText>
          </S.GameBoxContainer>
        )}

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
