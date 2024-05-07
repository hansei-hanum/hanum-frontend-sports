import React from 'react';
import { Header } from '../../components/common/Header';
import { Betting } from '../../components/Betting';

export const BettingSection: React.FC = () => {
    return (
        <>
            <Header hasIcon={false} text="베팅" />
            <Betting />
        </>
    );
};
