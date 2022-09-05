import { combineReducers } from "@reduxjs/toolkit";

import loginReducer from "../slices/auth/login";
import registerReducer from "../slices/auth/register";
import cartReducer from "../slices/cart";

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
  cart: cartReducer,
});
