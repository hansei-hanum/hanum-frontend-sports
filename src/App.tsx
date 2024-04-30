import React from "react";
import { Container } from "./components/layouts/AppLayout";
import { Global } from "@emotion/react";
import { colors, globalStyle } from "../styles";
import { MatchListPage } from "./pages/matchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Global styles={[globalStyle(colors.appBackground)]} />
      <BrowserRouter>
        <Routes>
          <Route path="/matchList" element={<MatchListPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
