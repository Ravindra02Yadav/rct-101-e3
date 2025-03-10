import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = ({ children}) =>{
    const login = () =>{
      setIsAuth(true);
    };
    const logout = () =>{
      setIsAuth(false);
    }
  }
  return (
  <AuthContext.Provider value={{isAuth, login, logout}}>
    {children}
    </AuthContext.Provider>
    );
};
