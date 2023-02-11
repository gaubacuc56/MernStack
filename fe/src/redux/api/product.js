import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_deploy } from "../../utils/config";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${api_deploy}/product` }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `getAllProducts`,
    }),
    getProductById: builder.query({
      query: (id) => `getAProduct/${id}`,
    }),
    getProductByValue: builder.query({
      query: (value) => `getProductByValue/${value}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductByValueQuery,
} = productApi;
