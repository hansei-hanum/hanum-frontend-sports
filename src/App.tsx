import React from 'react';
import { Container } from '@components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { colors, globalStyle } from '@styles';
import { MatchListPage } from '@pages';
import { RankingList } from '@pages';
import { PointPage } from '@pages';
import { BettingSection } from '@pages';
import { LiveChattingSection } from '@pages';
import { PredictSection } from '@pages';

function App() {
    return (
        <Container>
            <Global styles={[globalStyle(colors.appBackground)]} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MatchListPage />} />
                    <Route path="/pointLog" element={<PointPage />} />
                    <Route path="/rankingList" element={<RankingList />} />
                    <Route path="/betting" element={<BettingSection />} />
                    <Route path="/LiveChatting" element={<LiveChattingSection />} />
                    <Route path="/Predict" element={<PredictSection />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
