import React, { useState } from 'react';
import { ChattingBox } from '@common';
import { ChatBox } from '@common';

import * as S from './styled';

export const LiveChatting: React.FC = () => {
    const [comments, setComments] = useState<string[]>([]);

    const handleCommentSubmit = (newComment: string) => {
        setComments([...comments, newComment]);
    };

    return (
        <section>
            <S.LiveChatSectionContainer>
                <GameSchedule description="ang" scheduleData={MatchList.data.games[0]} />
                <S.ChattingContainer>
                    {comments.map((comment, index) => (
                        <ChatBox key={index} name="권기현" comment={comment} />
                    ))}
                </S.ChattingContainer>
                <ChattingBox onCommentSubmit={handleCommentSubmit} />
            </S.LiveChatSectionContainer>
        </section>
    );
};
