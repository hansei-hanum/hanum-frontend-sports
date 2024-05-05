import React from 'react';
import { Container } from './components/layouts/AppLayout';
import { Global } from '@emotion/react';
import { colors, globalStyle } from './styles';
import { Betting } from './components/Betting';
import { RankingList } from './pages/RankingList';

function App() {
    return (
        <Container>
            <Global styles={[globalStyle(colors.Background)]}></Global>
            <Betting />
            <RankingList></RankingList>
        </Container>
    );
}

export default App;
