import React from 'react';
import { Header } from '../../common/Header';
import { MyRankBar } from '../../common/MyRankBox';
import { RankList } from '../../components/main';

export const RankingList: React.FC = () => {
    return (
        <>
            <Header hasIcon={false} text="포인트 순위" />
            <MyRankBar rank={12} name="김태훈" point={10} />
            <RankList />
        </>
    );
};
