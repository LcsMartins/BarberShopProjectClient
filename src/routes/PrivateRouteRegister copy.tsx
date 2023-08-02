import React from "react";
import { RouteProps as ReactRouteProps } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRouteRegister: React.FC<ReactRouteProps> = ({
  children,
  ...rest
}) => {
  const registerUser = Cookies.get("@app-barber:data");

  return registerUser ? <>{children}</> : <Navigate to="/register" replace />;
};

export default PrivateRouteRegister;
