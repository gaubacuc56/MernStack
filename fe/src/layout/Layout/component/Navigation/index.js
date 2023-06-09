import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useMediaQuery from "../../../../hooks/useMediaQuery";

import style from "./navigation.module.css";

export default function Navigation() {
  const { t } = useTranslation();
  const isNotMobile = useMediaQuery("(min-width:768px)");
  return (
    <>
      {isNotMobile ? (
        <div className={style.navigation}>
          <div className="container">
            <ul className={style.list}>
              <li className={style.item}>
                <Link to="/">{t("NAVIGATION.HOME")}</Link>
              </li>
              <li className={style.item}>
                <Link to={"/Gioithieu"}>{t("NAVIGATION.RUNNING")}</Link>
              </li>

              <li className={style.item}>
                <Link to={"/Gioithieu"}>{t("NAVIGATION.SOCCER")}</Link>
              </li>
              <li className={style.item}>
                <Link to={"/Gioithieu"}>{t("NAVIGATION.BASKETBALL")}</Link>
              </li>
              <li className={style.item}>
                <Link to={"/Gioithieu"}>{t("NAVIGATION.TENNIS")}</Link>
              </li>
              <li className={style.item}>
                <Link to={"/Gioithieu"}>{t("NAVIGATION.LIFESTYLE")}</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
