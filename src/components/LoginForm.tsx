import { Button, TextField } from "@mui/material";
import React, { FC } from "react";

const LoginForm: FC = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-4xl">CryptoStats</h1>
      <div className="flex flex-col gap-4">
        <TextField label="Email" type="email" className="w-80" required />
        <TextField label="Password" type="password" className="w-80" required />
      </div>
      <Button className="w-80" variant="contained">
        <span className="p-1">Login</span>
      </Button>
    </div>
  );
};

export default LoginForm;
