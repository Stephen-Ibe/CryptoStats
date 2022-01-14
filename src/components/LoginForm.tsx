import { Button, TextField, Link as MuiLink } from "@mui/material";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../apis/auth.api";

const LoginForm: FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [login] = useLoginMutation();

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const { email, password } = formData;

    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    await login({ email, password });
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-4xl">CryptoStats</h1>
      <div className="flex flex-col gap-4">
        <TextField
          label="Email"
          type="email"
          className="w-80"
          name="email"
          onChange={(e) => handleInputChange(e)}
          helperText={emailError && "Please enter a valid email"}
          error={emailError}
          required
        />
        <TextField
          label="Password"
          type="password"
          className="w-80"
          name="password"
          onChange={(e) => handleInputChange(e)}
          helperText={passwordError && "Please enter a valid password"}
          error={passwordError}
          required
        />
      </div>
      <Button className="w-80" variant="contained" onClick={handleLogin}>
        <span className="p-1">Login</span>
      </Button>
      <div className="flex flex-col gap-4">
        <p className="text-center">OR</p>
        <Link to="/signup" className="">
          <MuiLink>Create an Account</MuiLink>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
