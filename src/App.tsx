import React from 'react';
import { Container } from './components/layouts/AppLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { colors, globalStyle } from '../styles';
import { MatchListPage } from './pages/matchList';
import { RankingList } from './pages/RankingList';
import { PointPage } from './pages/point';
import { Betting } from './components/Betting';
import { LiveChatting } from './components/LiveChatting';
import { Predict } from 'components/Predict';

function App() {
    return (
        <Container>
            <Global styles={[globalStyle(colors.appBackground)]} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MatchListPage />} />
                    <Route path="/pointLog" element={<PointPage />} />
                    <Route path="rankingList" element={<RankingList />} />
                    <Route path="betting" element={<Betting />} />
                    <Route path="LiveChatting" element={<LiveChatting />} />
                    <Route path="Predict" element={<Predict />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
