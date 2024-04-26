import React from 'react';
import { Container } from './components/layouts/AppLayout';
import { Global } from '@emotion/react';
import { colors, globalStyle } from './styles';
import { Predict } from './components/main';

function App() {
    return (
        <Container>
            <Global styles={[globalStyle(colors.appBackground)]}></Global>
            <Predict />
        </Container>
    );
}

export default App;
