import React from 'react';
import { Header } from '../../common/Header';
import { Betting } from '../../components/main';

export const RankingList: React.FC = () => {
    return (
        <>
            <Header hasIcon={false} text="베팅" />
            <Betting />
        </>
    );
};
