import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useAuthStore from 'src/stores/auth';

export interface ProtectedRouteProps {
  isVerifyUserPage?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isVerifyUserPage }) => {
  const { token, payload } = useAuthStore();

  if (isVerifyUserPage && (!token || !payload)) {
    return <Navigate to="/auth" />;
  } else if (!isVerifyUserPage && token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
