import ReactDOM from 'react-dom/client';

import { Global } from '@emotion/react';

import App from './App';
import { colors, globalStyle } from './styles';
import { QueryClientProvider } from './hooks';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider>
    <Global styles={[globalStyle(colors.appBackground)]} />
    <App />
  </QueryClientProvider>,
);
