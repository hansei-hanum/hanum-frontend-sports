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
    const token = localStorage.getItem('token');

    if (token) {
      console.log('저장된 토큰 로드 중...');

      /** 토큰 유효성 확인 - 간단한 형식 체크 */
      const tokenParts = token.split('.');
      if (tokenParts.length !== 3) {
        console.error('유효하지 않은 토큰 형식');
        localStorage.removeItem('token');
        return;
      }

      /** 유효한 토큰이면 스토어에 설정 (이로써 모든 API 요청에 추가됨) */
      setToken(token);
    }
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
