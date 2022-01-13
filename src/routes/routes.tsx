import React, { FC } from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

const Routes: FC = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
