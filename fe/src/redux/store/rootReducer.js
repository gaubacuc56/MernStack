import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../slices/auth/login";
import registerReducer from "../slices/auth/register";
import cartReducer from "../slices/cart";
import { productApi } from "../api/product";

export default combineReducers({
  [productApi.reducerPath]: productApi.reducer,

  login: loginReducer,
  register: registerReducer,
  cart: cartReducer,
});
