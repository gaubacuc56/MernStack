import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const name = "cart";
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name,
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    increase: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      item.quantity++;
    },
    decrease: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

const selector = (state) => state[name];
const myCart = createSelector(selector, ({ cart }) => cart);
export const cartSelectors = { myCart };

const { addToCart, increase, decrease, removeItem } = cartSlice.actions;
export const cartActions = { addToCart, increase, decrease, removeItem };
export default cartSlice.reducer;
