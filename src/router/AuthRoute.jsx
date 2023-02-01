import React from "react";
import { Route } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const AuthRoute = () => {
  return (
    <Route path="/auth" element={<AuthLayout />}>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
    </Route>
  );
};

export default AuthRoute;
