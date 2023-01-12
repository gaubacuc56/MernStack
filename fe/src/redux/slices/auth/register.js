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
    await axios.post("auth/register", { ...data });
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
  extraReducers: (builder) => {
    builder.addCase(RegisterThunk.fulfilled, (state) => {
      state.response = "";
      Toast("success", "Đăng ký thành công", "top-right");
    });
    builder.addCase(RegisterThunk.rejected, (state, action) => {
      if (action.payload.error.user_phone)
        state.response = action.payload.error.user_phone;
      else if (action.payload.error.user_email)
        state.response = action.payload.error.user_email;
    });
  },
});

const selector = (state) => state[name];
const responses = createSelector(selector, ({ response }) => response);
export const registerSelectors = { responses };

const { resetResponse } = registerSlice.actions;
export const registerActions = { resetResponse };
export default registerSlice.reducer;
