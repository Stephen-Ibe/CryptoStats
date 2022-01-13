import { Button, TextField, Link as MuiLink } from "@mui/material";
import React, { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserMutation } from "../apis/users.api";

const SignupForm: FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [createUser] = useCreateUserMutation();

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    const { email, password } = formData;
    if (!formData.email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!formData.password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    await createUser({ email, password });
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
      <Button className="w-80" variant="contained" onClick={handleSignup}>
        <span className="p-1">Create Account</span>
      </Button>
      <div className="flex flex-col gap-4">
        <p className="text-center">OR</p>
        <Link to="/login" className="text-center">
          Already have an account?
          <br />
          <MuiLink>Click to Login</MuiLink>
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
