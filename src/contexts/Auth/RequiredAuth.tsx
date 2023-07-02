import { ReactNode } from "react"
import { Navigate } from "react-router-dom";

import { useAuth } from ".";

interface RequiredAuthProps {
  children: ReactNode;
}

export const RequiredAuth = ({ children }: RequiredAuthProps) => {
  const { user, loadingUser } = useAuth();

  if (!loadingUser && !user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}