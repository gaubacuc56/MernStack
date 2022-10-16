import React from "react";
import { loginSelectors } from "../../../redux/slices/auth/login";
import { useSelector } from "react-redux";

import style from "./cartpayment.module.css";
export default function CartPayment() {
  const account = useSelector(loginSelectors.account);
  console.log(account);
  return (
    <div className={style.Payment}>
      {Object.keys(account).length === 0 ? (
        <h3 id="login-error">Vui lòng đăng nhập</h3>
      ) : (
        <h2>THÔNG TIN KHÁCH HÀNG</h2>
      )}
    </div>
  );
}
