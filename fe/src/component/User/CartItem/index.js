import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartSelectors, cartActions } from "../../../redux/slices/cart";
import style from "./cartitem.module.css";
export default function CartItem() {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelectors.myCart);
  const getPrice = (price, quantity) => {
    return price * quantity;
  };
  return (
    <div className={style.cartItems}>
      {cart.map((item, index) => (
        <div className={style.cartItem_mainContainer} key={index}>
          <div className={style.img_main}>
            <img src={item.product_avatar}></img>
          </div>
          <div className={style.information}>
            <h3 className={style.name}>{item.product_name}</h3>
            <div className={style.separate}></div>
            <h2 className={style.price}>
              {getPrice(item.product_price, item.quantity)}$
            </h2>

            <h3 className={style.size}>Kích cỡ: {item.size}</h3>
            <div className={style.amount}>
              <div
                className={style.count}
                onClick={() => dispatch(cartActions.decrease(item.cartItem_id))}
              >
                -
              </div>
              <span> {item.quantity} </span>
              <div
                className={style.count}
                onClick={() => dispatch(cartActions.increase(item.cartItem_id))}
              >
                +
              </div>
            </div>
            <button
              className={style.delete}
              onClick={() => dispatch(cartActions.removeItem(item.cartItem_id))}
            >
              Xoá sản phẩm
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
