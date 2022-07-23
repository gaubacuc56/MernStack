import { createSelector, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const name = 'user'
const initialState = {
    user: {},
    token: '',
    errorMessage: 'init',
}
export const login = createAsyncThunk('user/login', async data => {
    const response = await axios.post('', { ...data });
    return response.data;
});
const userSlice = createSlice({
    name,
    initialState,
    reducers: {
        logout: state => {
            state.user = {};
            state.errorMessage = 'init';
        },
        setDefaultError: state => {
            state.errorMessage = 'init';
        },
    },
    extraReducers: builder => {
        builder.addCase(login.rejected, (state, _action) => {
            state.errorMessage = 'error';
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.errorMessage = '';
        });
    },
})

const selector = state => state[name];
const account = createSelector(selector, ({ user }) => user);
const error = createSelector(selector, ({ errorMessage }) => errorMessage);
const token = createSelector(selector, ({ token }) => token);
export const loginSelectors = { account, error, token };

const { logout, setDefaultError } = userSlice.actions;
export const userActions = { logout, setDefaultError };
export default userSlice.reducer;
