import React from 'react';
import { Container } from './components/layouts/AppLayout';
import { Global } from '@emotion/react';
import { colors, globalStyle } from './styles';
import { RankingList } from './pages/LiveChatting';

function App() {
    return (
        <Container>
            <Global styles={[globalStyle(colors.appBackground)]}></Global>
            <RankingList></RankingList>
        </Container>
    );
}

export default App;
