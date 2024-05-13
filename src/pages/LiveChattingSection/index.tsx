import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { io } from 'socket.io-client';

import { ChattingBox, GameSchedule, ChatBox, Spinner, GameAlertBox } from 'src/components';
import { useGetLiveGame, useSendChat } from 'src/hooks';
import { colors } from 'src/styles';
import { useBettingStore, useLiveGameStore } from 'src/stores';
import useAuthStore from 'src/stores/auth';

import * as S from './styled';

export interface LiveChattingCommentsProps {
  content: string;
  predictionTeam?: string;
  user: {
    name: string;
  };
}

export const LiveChattingSection: React.FC = () => {
  const { token } = useAuthStore();

  const { setLiveGame } = useLiveGameStore();
  const { setBetting } = useBettingStore();

  const { data, isLoading, error } = useGetLiveGame();
  const { mutate } = useSendChat();
  const navigate = useNavigate();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [comments, setComments] = useState<LiveChattingCommentsProps[]>([]);

  const handleCommentSubmit = (content: string) => {
    console.log('content', content);
    mutate({ content });
  };

  const onButtonClick = () => {
    data && setBetting({ team: null, amount: 0, id: data?.data.id });
    navigate('predict');
  };

  useEffect(() => {
    if (token) {
      const socket = io('wss://sports.hanum.us/chats/ws', {
        withCredentials: false,
        auth: {
          token: token,
        },
        transports: ['websocket'],
      });

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
    }
  }, [token]);

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
      <S.LiveChatSectionContainer>
        {isLoading ? (
          <S.LoadingWrapper>
            <Spinner color={colors.placeHolder} size="40px" />
          </S.LoadingWrapper>
        ) : error?.response?.status === 404 ? (
          <GameAlertBox>진행 중인 경기가 없어요</GameAlertBox>
        ) : (
          data && <GameSchedule isButton={true} scheduleData={data?.data} onClick={onButtonClick} index={0} />
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
