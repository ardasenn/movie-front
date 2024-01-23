import { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../Hooks/LocalStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useLocalStorageState(
    "moviestore-auth",
    false
  );

  const login = (data) => {
    setLoggedIn(data);
    localStorage.setItem("access-token-moviestore", data.accessToken);
    localStorage.setItem("refresh-token-moviestore", data.refreshToken);
  };
  const logout = () => {
    setLoggedIn(null);
    localStorage.clear();
  };
  const values = { loggedIn, login, setLoggedIn, logout };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
