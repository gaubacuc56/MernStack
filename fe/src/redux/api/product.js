import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_deploy } from "../../utils/config";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${api_deploy}/product` }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `getProductById/${id}`,
    }),
    getProductByCategories: builder.query({
      query: (category) => `getProducts?product_categories=${category}`,
    }),
  }),
});

export const { useGetProductByIdQuery, useGetProductByCategoriesQuery } =
  productApi;
