import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@mui/material";
import style from "./header.module.css";
import logo from "../../../assets/img/logo.png";
import { useSelector } from "react-redux";
import { cartSelectors } from "../../../redux/slices/cart";
import { loginSelectors } from "../../../redux/slices/auth/login";

import useMediaQuery from "../../../hooks/useMediaQuery";
import ProfileModal from "./ProfileModal/ProfileModal";
import { useTranslation } from "react-i18next";

export default function Header() {
  const isNotMobile = useMediaQuery("(min-width:768px)");
  const { t } = useTranslation();

  const cart = useSelector(cartSelectors.myCart);
  const currentUser = useSelector(loginSelectors.account);

  const [find_value, setFind_value] = useState("");
  const [cartNumber, setCartNumber] = useState();
  const [openProfile, setOpenProfile] = useState(false);
  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseProfile = () => setOpenProfile(false);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    setCartNumber(total);
  }, [cart]);
  return (
    <>
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
            {Object.keys(currentUser).length === 0 ? (
              <Link to="/login" className={style.account}>
                <i className="far fa-user" />
              </Link>
            ) : (
              <div
                // onClick={handleOpenProfile}
                className={`${style.account} ${style.loggedIn}`}
              >
                <i class="fa-solid fa-user"></i>
                <i
                  class="fa-solid fa-sort-down"
                  style={{ fontSize: "18px", marginLeft: "5px" }}
                ></i>
              </div>
            )}

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
      <Dialog open={openProfile} onClose={handleCloseProfile}>
        <ProfileModal></ProfileModal>
      </Dialog>
    </>
  );
}
