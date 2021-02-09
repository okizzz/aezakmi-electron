import React from "react";
import { NavLink } from "react-router-dom";
import { Button, CreateNotification, Input } from "../../ui";

import { LoginContainer, LoginForm, RegisterButton } from "./styles";

import logo from "../../assets/logo.svg";

const Login = () => {
  const handleChangeInput = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <LoginContainer>
      <img src={logo} alt="Aezakmi+" />
      <LoginForm>
        <Input
          value="text"
          onChange={handleChangeInput}
          type="text"
          name="email"
          title="Email"
        />
        <Input
          value="text"
          onChange={handleChangeInput}
          type="password"
          name="current-password"
          title="Password"
        />

        <NavLink to="/solo/dashboard/profiles">
          <Button text="Login" />
        </NavLink>

        <RegisterButton onClick={() => CreateNotification()}>
          Register
        </RegisterButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
