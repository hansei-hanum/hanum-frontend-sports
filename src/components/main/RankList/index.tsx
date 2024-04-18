import React from 'react';

import { RankBox } from '../../../common/RankingBox';

import * as S from './styled';

export const RankList: React.FC = () => {
    return (
        <section>
            <S.RankSectionContainer>
                <RankBox rank={1} name="권기현" point={1300} dept="클라우드보안과 2학년 1반"></RankBox>
                <RankBox rank={2} name="아무개" point={333} dept="메타버스게임과 2학년 1반"></RankBox>
                <RankBox rank={3} name="아무개2" point={222} dept="네트워크보안과 3학년 1반"></RankBox>
                <RankBox rank={4} name="아무개3" point={111} dept="클라우드보안과 1학년 1반"></RankBox>
            </S.RankSectionContainer>
        </section>
    );
};
