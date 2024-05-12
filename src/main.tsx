import ReactDOM from 'react-dom/client';

import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import { colors, globalStyle } from './styles';

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 0 } } });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Global styles={[globalStyle(colors.appBackground)]} />
    <App />
  </QueryClientProvider>,
);
