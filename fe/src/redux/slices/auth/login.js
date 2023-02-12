import { createSelector, createSlice } from "@reduxjs/toolkit";

const name = "login";
const initialState = {
  user: {},
  token: "",
};

const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
      state.token = "";
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

const selector = (state) => state[name];
const account = createSelector(selector, ({ user }) => user);
const userToken = createSelector(selector, ({ token }) => token);
export const loginSelectors = { account, userToken };

const { logout, setUser, setToken } = userSlice.actions;
export const loginActions = { logout, setUser, setToken };
export default userSlice.reducer;
