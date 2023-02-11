import React from "react";
import { useSelector } from "react-redux";
import { cartSelectors } from "../../redux/slices/cart";
import CartItem from "./component/CartItem";
import CartPayment from "./component/CartPayment";
import style from "./cart.module.css";
export default function Cart() {
  const cart = useSelector(cartSelectors.myCart);
  return (
    <div className={`${style.cartContainer} grid`}>
      {cart.length === 0 ? (
        <h2 className={style.emptyCart}>Giỏ hàng của bạn đang trống</h2>
      ) : (
        <>
          <CartItem></CartItem>
          <CartPayment></CartPayment>
        </>
      )}
    </div>
  );
}
