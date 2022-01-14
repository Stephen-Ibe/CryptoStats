import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../app/slices/authSlice";

const ProtectedRoutes: FC<any> = ({ children }) => {
  const user = useAppSelector((state) => selectCurrentUser(state));

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
