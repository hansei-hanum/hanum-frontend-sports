import React from 'react';
import ReactDOM from 'react-dom';

import { Global } from '@emotion/react';

import App from './App';
import { colors, globalStyle } from './styles';

ReactDOM.render(
  <>
    <Global styles={[globalStyle(colors.appBackground)]} />
    <App />
  </>,

  document.getElementById('root'),
);
