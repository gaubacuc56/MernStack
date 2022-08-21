import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";

import ProductCard from "../../../component/User/ProductCard";
import { api_deploy } from "../../../config/config";
import useMediaQuery from "../../../hooks/useMediaQuery";
import style from "./productContainer.module.css";
// Import Swiper styles
import "swiper/css";
export default function ProductContainer(props) {
  const isMobile = useMediaQuery("(max-width:768px)");

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
        className={`${style.newItem_mainContainer}  row justify-content-between `}
      >
        {
          !isMobile
            ? (
              <>
                {product.map((item) => (
                  <div className={`${style.item_container} col-xl-3 col-sm-6 d-flex justify-content-center`} key={item._id}>
                    <ProductCard
                      id={item._id}
                      product_name={item.product_name}
                      product_price={item.product_price}
                      product_categories={item.product_categories}
                      product_avatar={item.product_avatar}
                    ></ProductCard>
                  </div>
                ))}
              </>

            )
            : <div className={`${style.item_container} col-12 d-flex justify-content-center`}>
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                freeMode={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode]}
              >
                {product.map((item) => (
                  <div className="" key={item._id}>
                    <SwiperSlide>
                      <ProductCard
                        id={item._id}
                        product_name={item.product_name}
                        product_price={item.product_price}
                        product_categories={item.product_categories}
                        product_avatar={item.product_avatar}
                      ></ProductCard>
                    </SwiperSlide>

                  </div>
                ))}

              </Swiper>
            </div>
        }
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
