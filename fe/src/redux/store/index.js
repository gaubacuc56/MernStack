import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { persistReducer } from "redux-persist";

import { productApi } from "../api/product";
import { loginApi } from "../api/login";
import { registerApi } from "../api/register";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["register"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productApi.middleware,
      loginApi.middleware,
      registerApi.middleware,
    ]),
  devTools: true,
});
setupListeners(store.dispatch);
export default store;
