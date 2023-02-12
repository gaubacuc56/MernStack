import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_deploy } from "../../utils/config";
export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${api_deploy}/auth` }),
  endpoints: (builder) => ({
    Register: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
