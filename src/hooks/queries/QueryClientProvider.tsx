import React, { useState } from 'react';

import { QueryClient, QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';

export interface QueryClientProviderProps {
  children?: React.ReactNode;
}

export const QueryClientProvider: React.FC<QueryClientProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { retry: 0 } } }));

  return <TanStackQueryClientProvider client={queryClient}>{children}</TanStackQueryClientProvider>;
};
