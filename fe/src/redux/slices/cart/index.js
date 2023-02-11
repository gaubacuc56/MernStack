import { createSelector, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const name = "cart";
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name,
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      const itemInCart = state.cart.find(
        (item) =>
          item._id === action.payload.product._id &&
          item.size === action.payload.size
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({
          cartItem_id: uuidv4(),
          ...action.payload.product,
          quantity: 1,
          size: action.payload.size,
        });
      }
    },
    increase: (state, action) => {
      console.log(action.payload);
      const item = state.cart.find(
        (item) => item.cartItem_id === action.payload
      );
      item.quantity++;
    },
    decrease: (state, action) => {
      const item = state.cart.find(
        (item) => item.cartItem_id === action.payload
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removedCart = state.cart.filter(
        (item) => item.cartItem_id !== action.payload
      );
      state.cart = removedCart;
    },
  },
});

const selector = (state) => state[name];
const myCart = createSelector(selector, ({ cart }) => cart);
export const cartSelectors = { myCart };

const { addToCart, increase, decrease, removeItem } = cartSlice.actions;
export const cartActions = { addToCart, increase, decrease, removeItem };
export default cartSlice.reducer;
