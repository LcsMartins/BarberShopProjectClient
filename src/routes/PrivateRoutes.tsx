import React from "react";
import { RouteProps as ReactRouteProps } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../utils/useAuth";
import { api } from "../services/api";

const PrivateRoute: React.FC<ReactRouteProps> = ({ children, ...rest }) => {
  let user = Cookies.get("@app-barber:user");
  const token = Cookies.get("@app-barber:token");
  if (user) {
    user = JSON.parse(user);
  }
  const { signOut } = useAuth();
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({}),
  };
  if (token && signOut) {
    fetch(`${api}verify-token`, requestOptions).catch(() => {
      signOut();
    });
  }
  Cookies.remove("@app-barber:data");
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};
export default PrivateRoute;
