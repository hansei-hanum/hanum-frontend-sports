import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { DefaultLayout } from 'src/components';

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MatchListPage />} />
        <Route
          element={
            <DefaultLayout>
              <Outlet />
            </DefaultLayout>
          }
        >
          <Route path="/pointLog" element={<PointPage />} />
          <Route path="/rankingList" element={<RankingList />} />
          <Route path="/betting" element={<BettingSection />} />
          <Route path="/LiveChatting" element={<LiveChattingSection />} />
          <Route path="/Predict" element={<PredictSection />} />
          <Route path="/PredictLogs" element={<PredictLogsSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
