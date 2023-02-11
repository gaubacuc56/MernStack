import React, { useState } from "react";
import {
  Modal,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams, Link } from "react-router-dom";
import { cartActions, cartSelectors } from "../../redux/slices/cart";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductByIdQuery } from "../../redux/api/product";

import Toast from "../../component/Toast";
import style from "./productdetails.module.css";
export default function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(null);
  let currentCart = useSelector(cartSelectors.myCart);

  const { data } = useGetProductByIdQuery(productId);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToCart = () => {
    if (size === null) Toast("error", "Vui lòng chọn size giày", "top-right");
    else {
      let item = { product: data, size: size };
      let checkError = 0;
      currentCart.forEach((item) => {
        if (item._id === data?._id && item.size === size) checkError++;
      });
      if (checkError > 0)
        Toast("error", "Sản phẩm này đã tồn tại trong giỏ hàng", "top-right");
      else {
        dispatch(cartActions.addToCart(item));
        Toast("success", "Thêm sản phẩm vào giỏ hàng thành công", "top-right");
      }
    }
  };

  return (
    <>
      {
        <div className={`${style.chiTiet_mainContainer} grid`} key={data?._id}>
          <div className={style.imgArea}>
            <div className={`${style.img_main}`}>
              <img src={data?.product_avatar}></img>
            </div>
            <div
              className={`${style.img_choose} d-flex justify-content-between flex-wrap`}
            >
              {data?.detailsImages.map((imgItem, key) => (
                <img
                  id={key}
                  className={`${style.img_choose_item}`}
                  src={imgItem}
                ></img>
              ))}
            </div>
          </div>

          <div className={style.operation}>
            <h3 className={style.name}>{data?.product_name}</h3>
            <h2 className={style.price}>{data?.product_price}$</h2>

            <div className={style.sizeArea}>
              <span>Kích thước</span>
              {data?.product_sizes.map((sizeItem, key) => (
                <div
                  id={key}
                  className={
                    size === sizeItem
                      ? style.size_options_selected
                      : style.size_options
                  }
                  onClick={() => setSize(sizeItem)}
                >
                  {sizeItem}
                </div>
              ))}
            </div>
            <div onClick={() => handleAddToCart()} className={style.addtoCart}>
              <div className={style.addtoCart_action}>THÊM VÀO GIỎ</div>
              <div className={style.cart}>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
              <div className={style.backdrop}></div>
            </div>

            <div onClick={handleOpen} className={style.returnPolicy}>
              Không đúng kích cỡ hoặc màu sắc? Vui lòng truy cập trang Trả hàng
              - Hoàn tiền của chúng tôi để biết chi tiết
            </div>

            <div style={{ marginTop: "70px" }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className={style.accordion_title}>Mô tả</div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={style.accordion_desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <div className={style.accordion_title}>Chi tiết sản phẩm</div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={style.accordion_desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      }

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div className={style.returnPolicy_modal}>
          <h2>HOÀN TRẢ DỄ DÀNG</h2>
          <p>
            Nếu bạn hoàn toàn không hài lòng với sản phẩm đã mua, bạn có thể
            được hoàn lại tiền. Xin lưu ý rằng việc trả hàng và hoàn tiền sẽ
            không được áp dụng cho một số sản phẩm nhất định. Các sản phẩm không
            được áp dụng chính sách trả hàng và hoàn tiền sẽ được đánh dấu
            "Không trả hàng, không hoàn tiền" trên trang sản phẩm.
          </p>
        </div>
      </Modal>
    </>
  );
}
