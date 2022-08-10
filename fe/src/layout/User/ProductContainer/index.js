import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

import ProductCard from "../../../component/User/ProductCard";
import { api_deploy } from "../../../config/config";
import style from "./productContainer.module.css";
export default function ProductContainer(props) {
  const [product, setProduct] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const getProduct = async () => {
      let category = props.category.toLowerCase();
      const result = await axios({
        method: "get",
        url: `${api_deploy}/product/getProductByValue/${category}`,
      });
      let arr = result.data.slice(0, 4);
      setProduct(arr);
    };
    getProduct();
  }, []);

  return (
    <div className={`${style.newItem} grid`}>
      <div className={`${style.title_area} `}>
        <div className={style.left_separate}></div>
        <div className={style.title_content}>
          <h3>{t(`PRO_CONTAINER.TITLE.${props.category}`)}</h3>
          <p>{t("PRO_CONTAINER.SUBTITLE")}</p>
        </div>
        <div className={style.right_separate}></div>
      </div>
      <div
        className={`${style.newItem_mainContainer}  d-flex justify-content-between  flex-wrap`}
      >
        {product.map((item) => (
          <div key={item._id}>
            <ProductCard
              key={item._id}
              product_name={item.product_name}
              product_price={item.product_price}
              product_categories={item.product_categories}
              product_avatar={item.product_avatar}
            ></ProductCard>
          </div>
        ))}
      </div>
      <div className={style.btnArea}>
        <Link to={`/Sanpham_display/all`}>
          <button className={style.showAll_btn}>
            {t("PRO_CONTAINER.BUTTON")}
          </button>
        </Link>
      </div>
    </div>
  );
}
