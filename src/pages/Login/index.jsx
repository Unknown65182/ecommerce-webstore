import React from "react";

import { SignIn } from "../../components";

import "./styles.scss";

const Login = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <SignIn />
    </div>
  );
};

export default Login;
