import { FC, ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getGithubAccessToken } from '../utils';

interface PrivateRouteProps {
  children: ReactElement;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation();
  const isAuthorized = getGithubAccessToken();

  if (!isAuthorized) {
    return <Navigate to="/app/login" state={{ from: location }} />;
  }

  return children;
};
