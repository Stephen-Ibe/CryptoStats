import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { LoginRequest } from "../dto/loginRequest.dto";
import { User } from "../models/User";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/auth",
  }),
  endpoints: (build) => ({
    login: build.mutation<User, LoginRequest>({
      query: (loginRequest) => ({
        url: "login",
        method: "POST",
        body: loginRequest,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
