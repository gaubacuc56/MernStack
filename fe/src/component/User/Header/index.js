import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./header.module.css";
import logo from "../../../assets/img/logo.png";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
export default function Header() {
  const { t } = useTranslation()
  const [form, setForm] = useState(false);
  const [find_value, setFind_value] = useState("");
  const isDesktop = useMediaQuery("(min-width:1140px)");
  const isNotMobile = useMediaQuery("(min-width:768px)");
  if (form === true) {
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
                  placeholder={t('HEADER.FIND')}
                />
                <Link /* to={`/Sanpham_display/${find_value}`} */ to="/">
                  <i className="fas fa-search"></i>
                </Link>
              </div>
            ) : (
              ""
            )}

            <div className={style.operation}>
              <div onClick={() => setForm(!form)} className={style.account}>
                <i className="far fa-user" />
              </div>

              <Link to="/Cart">
                <div className={style.cart}>
                  <i id={style.cart_icon} className="fas fa-shopping-cart" />
                  <div className={style.cart_number}>{/* {cart.length} */}</div>
                </div>
              </Link>
            </div>

            {!isNotMobile ? (
              <i
                style={{ fontSize: "25px", marginLeft: "25px" }}
                className="fa-solid fa-bars"
              ></i>
            ) : (
              <i style={{ cursor: 'pointer', fontSize: "25px", marginLeft: "25px" }} class="fa-solid fa-globe"></i>

            )}
          </div>
        </header>
        {/*      <Account_Operation></Account_Operation> */}
      </div>
    );
  } else if (form === false) {
    return (
      <header>
        <div className={`${style.main_container} grid`}>
          <a href="#" className={style.homeReload}>
            <img src={logo} className={style.logo} alt="" />
          </a>
          {isNotMobile ? (
            <div className={style.searchArea}>
              <input
                onChange={(e) => setFind_value(e.target.value)}
                type="text"
                className={style.searchBar}
                placeholder={t('HEADER.FIND')}
              />
              <Link /* to={`/Sanpham_display/${find_value}`} */ to="/">
                <i className="fas fa-search"></i>
              </Link>
            </div>
          ) : (
            ""
          )}

          <div className={style.operation}>
            <div onClick={() => setForm(!form)} className={style.account}>
              <i className="far fa-user" />
            </div>

            <Link to="/Cart">
              <div className={style.cart}>
                <i id={style.cart_icon} className="fas fa-shopping-cart" />
                <div className={style.cart_number}>{/* {cart.length} */}1</div>
              </div>
            </Link>

          </div>

          {!isNotMobile ? (
            <i
              style={{ fontSize: "25px", marginLeft: "25px" }}
              className="fa-solid fa-bars"
            ></i>
          ) : (
            <i style={{ cursor: 'pointer', fontSize: "25px", marginLeft: "25px" }} class="fa-solid fa-globe"></i>
          )}

        </div>
      </header>
    );
  }
}
