import React from "react";
import style from "./service.module.css";
export default function Service() {
  return (
    <div className={`${style.service} d-flex justify-content-center`}>
      <div className={`${style.main_container} grid row`}>
        <div
          className={`${style.main_container_item} ${style.delivery} col-xl-3 col-sm-6 col-12 d-flex flex-column align-items-center`}
        >
          <p>
            <i className="fas fa-truck"></i>
          </p>
          <h3>GIAO HÀNG MIỄN PHÍ</h3>
          <p>Tất cả sản phẩm đều được vận chuyển miễn phí</p>
        </div>
        <div
          className={`${style.main_container_item} ${style.refund}  col-xl-3 col-sm-6 col-12 d-flex flex-column align-items-center`}
        >
          <p>
            <i className="fas fa-undo-alt"></i>
          </p>
          <h3>ĐỔI TRẢ HÀNG</h3>
          <p>Sản phẩm được phép đổi trả trong vòng 2 ngày</p>
        </div>
        <div
          className={`${style.main_container_item} ${style.cod}  col-xl-3 col-sm-6 col-12 d-flex flex-column align-items-center`}
        >
          <p>
            <i className="fas fa-hand-holding-usd"></i>
          </p>

          <h3>THANH TOÁN NHẬN HÀNG</h3>
          <p>Thanh toán đơn hàng bằng hình thức trực tiếp</p>
        </div>
        <div
          className={`${style.main_container_item} ${style.order}  col-xl-3 col-sm-6 col-12 d-flex flex-column align-items-center`}
        >
          <p>
            <i className="fas fa-phone-alt"></i>
          </p>

          <h3>ĐẶT HÀNG ONLINE</h3>
          <p>0934 189 106</p>
        </div>
      </div>
    </div>
  );
}
