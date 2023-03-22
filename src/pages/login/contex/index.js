import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedUserContext } from "../../../contexts";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const navigate = useNavigate();
  const { setRefreshUser } = useContext(LoggedUserContext);

  const [loginLoading, setLoginLoading] = useState(false);

  const handleLogin = async (objeto) => {};

  return (
    <LoginContext.Provider
      value={{ loginLoading, setLoginLoading, handleLogin }}
    >
      {children}
    </LoginContext.Provider>
  );
}
