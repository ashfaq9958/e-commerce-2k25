import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
  userRole: string | null;
}

const ProtectedRoute = ({
  children,
  allowedRoles,
  userRole,
}: ProtectedRouteProps) => {
  //  const { isAuthenticated, role } = useSelector((state: RootState) => state.auth);
  //   if(!isAuthenticated) return <Navigate to="/login"/>
  //   if (allowedRoles || !allowedRoles.includes(userRole)) {
  //     return <Navigate to="/unthorized" replace />;
  //   }
  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/unthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
