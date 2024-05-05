import React from 'react';
import { Container } from './components/layouts/AppLayout';
import { Global } from '@emotion/react';
import { colors, globalStyle } from './styles';
import { Predict } from './components/Predict';
import { RankingList } from './pages/RankingList';

function App() {
    return (
        <Container>
            <Global styles={[globalStyle(colors.Background)]}></Global>
            <Predict />
            <RankingList></RankingList>
        </Container>
    );
}

export default App;
