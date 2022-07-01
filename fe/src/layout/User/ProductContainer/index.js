import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../../component/User/ProductCard";
import { Link } from "react-router-dom";
import { api_url } from "../../../config/config";
import style from "./productContainer.module.css";
export default function ProductContainer(props) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    function random_item(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    const getProduct = async () => {
      const result = await axios({
        method: "get",
        url: `${api_url}/product/getAll`,
      });
      let arr = [];
      for (let i = 0; i < 6; i++) {
        let item = random_item(result.data);
        if (!arr.includes(item)) arr.push(item);
        else;
      }
      console.log(arr);
      setProduct(arr);
    };
    getProduct();
  }, []);
  return (
    <div className={`${style.newItem} grid`}>
      <div className={`${style.title_area} `}>
        <div className={style.left_separate}></div>
        <div className={style.title_content}>
          <h3>{props.category}</h3>
          <p>Hàng luôn được cập nhật thường xuyên</p>
        </div>
        <div className={style.right_separate}></div>
      </div>
      <div
        className={`${style.newItem_mainContainer}  row justify-content-center`}
      >
        {product.map((item) => (
          <div className=" col-lg-4 col-sm-6 col-12">
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
          <button className={style.showAll_btn}>Xem tất cả</button>
        </Link>
      </div>
    </div>
  );
}
