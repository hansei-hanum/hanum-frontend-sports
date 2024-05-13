import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { DefaultLayout } from 'src/components';

import {
  AuthPage,
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
        <Route
          element={
            <DefaultLayout>
              <Outlet />
            </DefaultLayout>
          }
        >
          {/* <Route path="/" element={<LiveChattingSection />} /> */}
          <Route path="/point" element={<PointPage />} />
          <Route path="/ranking" element={<RankingList />} />
          <Route path="/predict-log" element={<PredictLogsSection />} />
        </Route>
        <Route path="/" element={<AuthPage />} />
        <Route path="/match" element={<MatchListPage />} />
        <Route path="/predict" element={<PredictSection />} />
        <Route path="/betting" element={<BettingSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
