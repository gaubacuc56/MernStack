import React from "react";

import slide1 from "../../../assets/img/slide1.jpg";
import slide2 from "../../../assets/img/slide2.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import style from "./slideshow.module.css";

export default function Slideshow() {
  return (
    <div className={`${style.slideShow1} grid d-flex`}>
      <Swiper slidesPerView={1} spaceBetween={30} loop={true}>
        <SwiperSlide>
          <img src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
