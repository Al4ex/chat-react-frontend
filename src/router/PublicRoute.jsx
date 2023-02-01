import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = () => {
  const { auth } = useAuth();
  console.log(auth.logged);
  return auth.logged ? <Navigate to={"/"} /> : <Outlet />;
};

export default PublicRoute;
