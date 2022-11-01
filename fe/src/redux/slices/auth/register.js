import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";
import { rejectWithRawError } from "../../../utils/handleErrorResponse";
import Toast from "../../../component/Toast";
const name = "register";

const initialState = {
  response: "init",
};
export const RegisterThunk = createAsyncThunk(
  "register/register",
  rejectWithRawError(async (data) => {
    let user = {
      user_name: data.name,
      user_email: data.email,
      user_phone: data.phone,
      user_address: "Viet Nam",
      user_role: "client",
      user_password: data.password,
    };
    const response = await axios.post("auth/register", { ...user });
    return response.data;
  })
);
const registerSlice = createSlice({
  name,
  initialState,
  reducers: {
    resetResponse(state, _actions) {
      state.response = "init";
    },
  },
  extraReducers: {
    [RegisterThunk.fulfilled]: (state) => {
      state.response = "";
      Toast("success", "Đăng ký thành công", "top-right");
    },
    [RegisterThunk.rejected]: (state, action) => {
      if (action.payload.error.user_phone)
        state.response = action.payload.error.user_phone;
      else if (action.payload.error.user_email)
        state.response = action.payload.error.user_email;
    },
  },
});

const selector = (state) => state[name];
const responses = createSelector(selector, ({ response }) => response);
export const registerSelectors = { responses };

export const registerActions = registerSlice.actions;
export default registerSlice.reducer;
