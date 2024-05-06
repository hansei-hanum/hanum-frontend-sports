import React from "react";
import { Container } from "./components/layouts/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import { colors, globalStyle } from "../styles";
import { MatchListPage } from "./pages/matchList";
import { RankingList } from "./pages/RankingList";
import { PointPage } from "./pages/point";
import { Betting } from "./components/Betting";

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
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
