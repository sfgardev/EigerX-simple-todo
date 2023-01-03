import { createContext, useEffect, useState } from "react";
import { LoginFormState } from "../components/LoginForm";

type AuthContextType = {
  isAuthorised: boolean;
  username: string;
  login: (loginFormState: LoginFormState) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthorised: false,
  username: "",
  login: () => undefined,
  logout: () => undefined,
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const authData = localStorage.getItem("auth");

    if (authData) {
      setIsAuthorised(true);

      const usernameFromLocalStorage = (JSON.parse(authData) as LoginFormState)
        .username;
      setUsername(usernameFromLocalStorage);
    }
  }, []);

  const login = (loginFormState: LoginFormState) => {
    localStorage.setItem("auth", JSON.stringify(loginFormState));
    setUsername(loginFormState.username);
    setIsAuthorised(true);
  };

  const logout = () => {
    setIsAuthorised(false);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthorised, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
