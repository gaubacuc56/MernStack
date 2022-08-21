import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { api_deploy } from "../../../config/config";

import style from "./productdetails.module.css";
export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      const result = await axios({
        method: "get",
        url: `${api_deploy}/product/getAProduct/${productId}`,
      });
      console.log(result.data);
      setProduct(result.data);
    };
    getProduct();
  }, []);

  if (Object.keys(product).length !== 0) {
    return (
      <>
        {
          <div
            className={`${style.chiTiet_mainContainer} grid`}
            key={product._id}
          >
            <div className={style.imgArea}>
              <div className={`${style.img_main}`}>
                <img src={product.product_avatar}></img>
              </div>
              <div
                className={`${style.img_choose} d-flex justify-content-between flex-wrap`}
              >
                {product.detailsImages.map((imgItem, key) => (
                  <img
                    id={key}
                    className={`${style.img_choose_item}`}
                    src={imgItem}
                  ></img>
                ))}
              </div>
            </div>

            <div className={style.operation}>
              <h3 className={style.name}>{product.product_name}</h3>
              <h2 className={style.price}>{product.product_price}$</h2>

              <div className={style.sizeArea}>
                <span>Kích thước</span>
                {product.product_sizes.map((sizeItem, key) => (
                  <div id={key} className={style.size_options}>
                    {sizeItem}
                  </div>
                ))}
              </div>
              <div className={style.addtoCart}>
                <div className={style.addtoCart_action}>THÊM VÀO GIỎ</div>
                <div className={style.cart}>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </div>
                <div className={style.backdrop}></div>
              </div>
            </div>
          </div>
        }
      </>
    );
  }
}
