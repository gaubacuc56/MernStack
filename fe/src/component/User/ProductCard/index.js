import React from "react";
import { Link } from "react-router-dom";
import style from "./productCard.module.css";
import useMediaQuery from "../../../hooks/useMediaQuery";
export default function ProductCard(props) {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div key={props._id} className={isMobile ? style.item_mobile : style.item} >
      <Link to={`/Sanpham_chiTiet/${props.id}`}>
        <img className={style.item_img} src={props.product_avatar}></img>
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
      </div>
    </div>
  );
}
