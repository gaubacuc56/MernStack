import React from "react";
import { Link } from "react-router-dom";
import style from "./productCard.module.css";

export default function ProductCard(props) {
  return (
    <div key={props._id} className={`${style.item}`}>
      <Link to={`/Sanpham_chiTiet/${props.id}`}>
        <img src={props.product_avatar}></img>
      </Link>
      <div
        className={`${style.item_information} d-flex justify-content-between align-items-center`}
      >
        <div>
          <Link className={style.item_name} to={`/Sanpham_chiTiet/${props.id}`}>
            {props.product_name}
          </Link>
          <div className={style.item_price}>${props.product_price}</div>
        </div>
        <i className={`${style.addToCart} fa-solid fa-heart`}></i>
      </div>
    </div>
  );
}
