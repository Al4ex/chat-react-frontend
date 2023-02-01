import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AuthLayout from "../Layout/AuthLayout";
import ChatPages from "../pages/ChatPages";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const { validateToken, auth } = useAuth();

  useEffect(() => {
    validateToken();
  }, [validateToken]);

  if (auth.checking) {
    return <h1>Espere porfavor</h1>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<PublicRoute />}>
          {/* <Route path="/auth/login" element={<AuthRoute />} /> */}
          <Route element={<AuthLayout />}>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} exact />
          </Route>
        </Route>

        {/* <Route path="/" element={<ChatPages />} /> */}
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<ChatPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
