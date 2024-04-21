import React from 'react';
import { ChattingBox } from '../../../common';
import { BettingBox } from '../../../common';
import { ChatBox } from '../../../common/ChatBox';

import * as S from './styled';

export const LiveChatting: React.FC = () => {
    return (
        <section>
            <S.LiveChatSectionContainer>
                <BettingBox />
                <S.ChattingContainer>
                    <ChatBox />
                </S.ChattingContainer>
                <ChattingBox />
            </S.LiveChatSectionContainer>
        </section>
    );
};
