import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';

import { Container } from 'src/components';
import { colors, globalStyle } from 'src/styles';

import {
  BettingSection,
  LiveChattingSection,
  MatchListPage,
  PointPage,
  PredictLogsSection,
  PredictSection,
  RankingList,
} from './pages';

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
          <Route path="/PredictLogs" element={<PredictLogsSection />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
