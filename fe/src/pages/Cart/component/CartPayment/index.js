import React, { useCallback, useMemo } from "react";
import { loginSelectors } from "../../../../redux/slices/auth/login";
import { cartSelectors } from "../../../../redux/slices/cart";

import { useSelector } from "react-redux";

import style from "./cartpayment.module.css";
export default function CartPayment() {
  const account = useSelector(loginSelectors.account);
  const cart = useSelector(cartSelectors.myCart);

  const totalPrice = useMemo(() => {
    let total = 0;
    cart.forEach((item) => (total += item.quantity * item.product_price));
    return total;
  }, [cart]);

  const handlePurchase = () => {
    const date = new Date();
    const myCart = {
      invoice_createdBy: account._id,
      invoice_products: cart.map((item) => ({
        product_list: item.cartItem_id,
        product_quantity: item.quantity,
      })),
      invoice_isDelivered: false,
      invoice_deliveryAddress: account.user_address,
      invoice_createDate: date,
      invoice_total: totalPrice,
    };
    console.log(myCart);
  };

  return (
    <div className={style.Payment}>
      {Object.keys(account).length === 0 ? (
        <h3 id="login-error">Vui lòng đăng nhập</h3>
      ) : (
        <>
          <h2>THÔNG TIN KHÁCH HÀNG</h2>
          <div className={style.payment_info}>
            <span>Tên khách hàng: </span>
            <span className={style.info_data}>{account.user_name} </span>
          </div>
          <div className={style.payment_info}>
            <span>Số điện thoại: </span>
            <span className={style.info_data}>{account.user_phone} </span>
          </div>
          <div className={style.payment_info}>
            <span>Địa chỉ: </span>
            <span className={style.info_data}>{account.user_address} </span>
          </div>
          <div className={style.payment_info}>
            <span>E-mail: </span>
            <span className={style.info_data}>{account.user_email} </span>
          </div>
          <div className={style.payment_info} id={style.total}>
            <span>Tổng tiền: </span>
            <span id={style.price}> {totalPrice}$</span>
          </div>
          <div className={style.btn_payment_area}>
            <button
              onClick={() => handlePurchase()}
              className={style.btn_payment}
            >
              Thanh toán
            </button>
          </div>
        </>
      )}
    </div>
  );
}
