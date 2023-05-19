import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { Navigate } from "react-router";

export const RequireAuth = ({ children }) => {
  const { authState } = useContext(AuthContext);
  return authState?.isLoggedin ? children : <Navigate to="/login" />;
};
