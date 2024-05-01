import React from "react";
import { Container } from "./components/layouts/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import { colors, globalStyle } from "../styles";
import { MatchListPage } from "./pages/matchList";
import { PointPage } from "./pages/point";

function App() {
  return (
    <Container>
      <Global styles={[globalStyle(colors.appBackground)]} />
      <BrowserRouter>
        <Routes>
          <Route path="/matchList" element={<MatchListPage />} />
          <Route path="/pointLog" element={<PointPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
