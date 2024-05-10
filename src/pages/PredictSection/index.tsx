import React from 'react';
import { Header } from '@common';
import { Predict } from '@components';

export const PredictSection: React.FC = () => {
    return (
        <>
            <Header hasIcon={false} text="베팅" />
            <Predict />
        </>
    );
};
