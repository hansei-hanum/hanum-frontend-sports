import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChattingBox, GameSchedule, ChatBox, Spinner, GameAlertBox, Header } from 'src/components';
import { socket } from 'src/socket';
import { useGetLiveGame, useSendChat } from 'src/hooks';
import { colors } from 'src/styles';
import { useLiveGameStore } from 'src/stores';

import * as S from './styled';

export interface LiveChattingCommentsProps {
  content: string;
  predictionTeam?: string;
  user: {
    name: string;
  };
}

export const LiveChattingSection: React.FC = () => {
  const { setLiveGame } = useLiveGameStore();

  const { data, isLoading } = useGetLiveGame();
  const { mutate } = useSendChat();
  const navigate = useNavigate();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [comments, setComments] = useState<LiveChattingCommentsProps[]>([]);

  const handleCommentSubmit = (content: string) => {
    mutate({ content });
  };

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

  useEffect(() => {
    if (data) {
      setLiveGame({ game: data.data });
    }
  }, [data]);

  return (
    <>
      <Header hasIcon={false} text="실시간 경기" />
      <S.LiveChatSectionContainer>
        {isLoading ? (
          <S.LoadingWrapper>
            <Spinner color={colors.placeHolder} size="40px" />
          </S.LoadingWrapper>
        ) : data ? (
          <GameSchedule isButton={true} scheduleData={data?.data} onClick={() => navigate('predict')} index={0} />
        ) : (
          <GameAlertBox>진행 중인 경기가 없어요</GameAlertBox>
        )}
        <S.ChattingContainer ref={chatContainerRef}>
          {comments.map(({ user, content, predictionTeam }, index) => (
            <ChatBox key={index} user={user} content={content} predictionTeam={predictionTeam} />
          ))}
        </S.ChattingContainer>
        <ChattingBox onCommentSubmit={handleCommentSubmit} />
      </S.LiveChatSectionContainer>
    </>
  );
};
