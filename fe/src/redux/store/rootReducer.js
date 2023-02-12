import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../slices/auth/login";
import cartReducer from "../slices/cart";
import { productApi } from "../api/product";
import { loginApi } from "../api/login";
import { registerApi } from "../api/register";

export default combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,

  login: loginReducer,
  cart: cartReducer,
});
