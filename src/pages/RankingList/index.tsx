import React from 'react';
import { Header } from '../../components/common/Header';
import { MyRankBar } from '../../components/common';
import { RankList } from '../../components/RankList';

export const RankingList: React.FC = () => {
    return (
        <>
            <Header hasIcon={false} text="포인트 순위" />
            <MyRankBar rank={12} name="김태훈" point={10} />
            <RankList />
        </>
    );
};
