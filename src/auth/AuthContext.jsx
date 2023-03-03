import { createContext, useCallback, useState } from "react";
import { fetchConToken, fetchsinToken } from "../helpers/fetch";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

const AuthProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [auth, setAuth] = useState(initialState);
  const [message, setMessage] = useState("");

  const login = async (email, password) => {
    const resp = await fetchsinToken("login", { email, password }, "POST");
    if (resp.ok == true) {
      localStorage.setItem("token", resp.jwt);
      const { user } = resp;

      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.username,
        email: user.email,
      });
    }

    return resp.ok;
  };

  const register = async (username, email, password) => {
    const resp = await fetchsinToken(
      "sigIn",
      { username, email, password },
      "POST"
    );
    if (resp.ok) {
      localStorage.setItem("token", resp.jwt);
      const { response } = resp;

      console.log(resp);
      setAuth({
        uid: response.uid,
        checking: false,
        logged: true,
        name: response.username,
        email: response.email,
      });
    } else {
      setMessage(resp.message);
    }
    return resp.ok;
  };

  const validateToken = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });
      return false;
    }

    const resp = await fetchConToken("renewToken");

    if (resp.ok) {
      localStorage.setItem("token", resp.jwt);
      const { response } = resp;

      setAuth({
        uid: response.uid,
        checking: false,
        logged: true,
        name: response.username,
        email: response.email,
      });
      return true;
    } else {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });
      return false;
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    setAuth({
      checking: false,
      logged: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        register,
        validateToken,
        logOut,
        setError,
        error,
        message,
        setMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
