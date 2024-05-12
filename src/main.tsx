import React from 'react';
import ReactDOM from 'react-dom';

import { RecoilRoot } from 'recoil';
import { Global } from '@emotion/react';

import App from './App';
import { colors, globalStyle } from './styles';

ReactDOM.render(
  <RecoilRoot>
    <Global styles={[globalStyle(colors.appBackground)]} />
    <App />
  </RecoilRoot>,

  document.getElementById('root'),
);
