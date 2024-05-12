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
          <Route path="/point-log" element={<PointPage />} />
          <Route path="/ranking-list" element={<RankingList />} />
          <Route path="/live-chatting" element={<LiveChattingSection />} />
          <Route path="/predict-logs" element={<PredictLogsSection />} />
        </Route>
        <Route path="/predict" element={<PredictSection />} />
        <Route path="/betting" element={<BettingSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
