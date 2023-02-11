import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";
import Toast from "../../../component/Toast";

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

  const tokenResponse = await axios.post("auth/login", {
    ...user,
  });

  const userData = await axios.get("auth/getUser", {
    headers: {
      Authorization: `Bearer ${tokenResponse.data.userToken}`,
    },
  });
  return userData.data;
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
      state.user = action.payload;
      state.errorMessage = "";
      Toast("success", "Đăng nhập thành công", "top-right");
    });
  },
});

const selector = (state) => state[name];
const account = createSelector(selector, ({ user }) => user);
const error = createSelector(selector, ({ errorMessage }) => errorMessage);
const userToken = createSelector(selector, ({ token }) => token);
export const loginSelectors = { account, error, userToken };

const { logout, setDefaultError } = userSlice.actions;
export const loginActions = { logout, setDefaultError };
export default userSlice.reducer;
