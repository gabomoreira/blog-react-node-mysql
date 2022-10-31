import { createContext, useEffect, useState } from "react";
import { login, logout } from "../api/index";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const loginContext = async (inputs) => {
    const { data } = await login(inputs);
    setCurrentUser(data);
  };

  const logoutContext = async () => {
    await logout();
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, loginContext, logoutContext }}>
      {children}
    </AuthContext.Provider>
  );
};
