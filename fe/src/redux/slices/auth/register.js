import { createSelector, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/* import toast from '../../utils/toastMessage'; */

const name = 'register';

const initialState = {
    response: 'init',
};
export const register = createAsyncThunk('', async (data, { _dispatch }) => {
    await axios.post('Account/register', { ...data });
});
const registerSlice = createSlice({
    name,
    initialState,
    reducers: {
        resetResponse(state, _actions) {
            state.response = 'init';
        },
    },
    extraReducers: {
        [register.fulfilled]: state => {
            state.response = '';
            /* toast('success', 'Your account has been created', 'top-right'); */
        },
        [register.rejected]: (state, action) => {
            console.log(action);
            state.response = action.error.message;
            /*       toast('error', state.response, 'top-right'); */
        },
    },
});

const selector = state => state[name];
const responses = createSelector(selector, ({ response }) => response);
export const registerSelectors = { responses };

export const registerActions = registerSlice.actions;
export default registerSlice.reducer;
