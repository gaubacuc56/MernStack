import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const name = "login";
const initialState = {
  user: {},
  token: "init",
  errorMessage: "init",
};
export const login = createAsyncThunk("login/login", async (data) => {
  let user = {
    user_info: data.name,
    user_password: data.password,
  };
  const response = await axios.post("http://localhost:5000/api/auth/login", {
    ...user,
  });
  return response.data;
});
const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
      state.errorMessage = "init";
    },
    setDefaultError: (state) => {
      state.errorMessage = "init";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.rejected, (state, _action) => {
      state.errorMessage = "Invalid email/phone or password";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
      state.errorMessage = "";
    });
  },
});

const selector = (state) => state[name];
const account = createSelector(selector, ({ user }) => user);
const error = createSelector(selector, ({ errorMessage }) => errorMessage);
const userToken = createSelector(selector, ({ token }) => token);
export const loginSelectors = { account, error, userToken };

const { logout, setDefaultError } = userSlice.actions;
export const userActions = { logout, setDefaultError };
export default userSlice.reducer;
