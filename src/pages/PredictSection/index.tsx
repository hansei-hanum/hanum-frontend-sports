import React from 'react';
import { Header } from '../../common/Header';
import { Predict } from '../../components/Predict';

export const PredictSection: React.FC = () => {
    return (
        <>
            <Header hasIcon={false} text="베팅" />
            <Predict />
        </>
    );
};
