import { createContext, useReducer } from "react";
import { authReducer } from "../../reducer/AuthReducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authState, dispatchAuth] = useReducer(authReducer, {
    isLoggedin: false,
    userDetails: {},
  });
  const value = { authState, dispatchAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
