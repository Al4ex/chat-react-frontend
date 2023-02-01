import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const { auth } = useAuth();

  return !auth.logged ? <Navigate to={"/auth/login"} /> : <Outlet />;
};

export default PrivateRoute;
