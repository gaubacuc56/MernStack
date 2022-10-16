import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./header.module.css";
import logo from "../../../assets/img/logo.png";
import { useSelector } from "react-redux";
import { cartSelectors } from "../../../redux/slices/cart";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
export default function Header(props) {
  const { t } = useTranslation();
  const cart = useSelector(cartSelectors.myCart);
  const [find_value, setFind_value] = useState("");
  const [cartNumber, setCartNumber] = useState();

  const isNotMobile = useMediaQuery("(min-width:768px)");
  const handleModal = () => {
    props.modal(!props.isOpen);
  };

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    setCartNumber(total);
  }, [cart]);
  return (
    <div>
      <header>
        <div className={`${style.main_container} grid`}>
          <a href="#" className={style.homeReload}>
            <img src={logo} className={style.logo} alt="logo" />
          </a>
          {isNotMobile ? (
            <div className={style.searchArea}>
              <input
                onChange={(e) => setFind_value(e.target.value)}
                type="text"
                className={style.searchBar}
                placeholder={t("HEADER.FIND")}
              />
              <Link /* to={`/Sanpham_display/${find_value}`} */ to="/">
                <i className="fas fa-search"></i>
              </Link>
            </div>
          ) : (
            ""
          )}

          <div className={style.operation}>
            <div onClick={handleModal} className={style.account}>
              <i className="far fa-user" />
            </div>

            <Link to="/Cart">
              <div className={style.cart}>
                <i id={style.cart_icon} className="fas fa-shopping-cart" />
                <div className={style.cart_number}>{cartNumber}</div>
              </div>
            </Link>
          </div>

          {!isNotMobile ? (
            <i
              style={{ fontSize: "25px", marginLeft: "25px" }}
              className="fa-solid fa-bars"
            ></i>
          ) : (
            ""
          )}
        </div>
      </header>
    </div>
  );
}
