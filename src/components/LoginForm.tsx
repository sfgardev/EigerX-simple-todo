import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export type LoginFormState = {
  username: string;
  password: string;
};

const PASSWORD_MIN_LENGTH = 4;

const LoginForm = () => {
  const { login } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState<LoginFormState>({
    username: "",
    password: "",
  });

  const isLoginButtonDisabled =
    loginForm.username.length > 0 &&
    loginForm.password.length >= PASSWORD_MIN_LENGTH;

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(loginForm);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        name="username"
        type="text"
        value={loginForm.username}
        onChange={handleInputChange}
        placeholder="Enter username"
      />
      <input
        name="password"
        type="password"
        value={loginForm.password}
        onChange={handleInputChange}
        placeholder="Enter Password"
      />
      <button disabled={!isLoginButtonDisabled}>Login</button>
    </form>
  );
};

export default LoginForm;
