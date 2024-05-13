import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import { DefaultLayout, ProtectedRoute } from 'src/components';

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
import useAuthStore from './stores/auth';

function App() {
  const { setToken } = useAuthStore();

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route
            element={
              <DefaultLayout>
                <Outlet />
              </DefaultLayout>
            }
          >
            <Route path="/" element={<LiveChattingSection />} />
            <Route path="/point" element={<PointPage />} />
            <Route path="/ranking" element={<RankingList />} />
            <Route path="/predict-log" element={<PredictLogsSection />} />
          </Route>
          <Route path="/match" element={<MatchListPage />} />
          <Route path="/predict" element={<PredictSection />} />
          <Route path="/betting" element={<BettingSection />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
