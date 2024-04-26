import React from 'react';
import { Container } from './components/layouts/AppLayout';
import { Global } from '@emotion/react';
import { colors, globalStyle } from './styles';
import { Betting } from './components/main';

function App() {
    return (
        <Container>
            <Global styles={[globalStyle(colors.appBackground)]}></Global>
            <Betting />
        </Container>
    );
}

export default App;
