import React from 'react';
import { ChattingBox } from '../../common';
import { ChatBox } from '../../common/ChatBox';

import * as S from './styled';

export const LiveChatting: React.FC = () => {
    return (
        <section>
            <S.LiveChatSectionContainer>
                <S.ChattingContainer>
                    <ChatBox name="권기현" comment="선배님" />
                </S.ChattingContainer>
                <ChattingBox />
            </S.LiveChatSectionContainer>
        </section>
    );
};
