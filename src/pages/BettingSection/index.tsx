import React from 'react';
import { Header } from '@common';
import { Betting } from '@components';

export const BettingSection: React.FC = () => {
    return (
        <>
            <Header hasIcon={false} text="베팅" />
            <Betting />
        </>
    );
};
