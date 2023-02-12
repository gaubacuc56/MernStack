import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_deploy } from "../../utils/config";
export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${api_deploy}/auth` }),
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
    getUser: builder.query({
      query: (token) => ({
        url: "/getUser",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetTokenMutation, useGetUserQuery } = loginApi;
