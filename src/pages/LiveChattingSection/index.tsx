import React from 'react';
import { Header } from '../../common/Header';
import { LiveChatting } from '../../components/LiveChatting';

export const LiveChattingSection: React.FC = () => {
    return (
        <>
            <Header hasIcon={false} text="실시간 채팅" />
            <LiveChatting></LiveChatting>
        </>
    );
};
