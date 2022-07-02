import React from "react";
import style from "./service.module.css";
import { useTranslation } from "react-i18next";
export default function Service() {
  const { t } = useTranslation()
  return (
    <div className={`${style.service} d-flex justify-content-center`}>
      <div className={`${style.main_container} grid row`}>
        <div
          className={`${style.main_container_item} ${style.delivery} col-xl-3 col-sm-6 col-12 d-flex flex-column align-items-center`}
        >
          <p>
            <i className="fas fa-truck"></i>
          </p>
          <h3>{t('SERVICE.DELIVERY.TITLE')}</h3>
          <p>{t('SERVICE.DELIVERY.DESC')}</p>
        </div>
        <div
          className={`${style.main_container_item} ${style.refund}  col-xl-3 col-sm-6 col-12 d-flex flex-column align-items-center`}
        >
          <p>
            <i className="fas fa-undo-alt"></i>
          </p>
          <h3>{t('SERVICE.RETURN.TITLE')}</h3>
          <p>{t('SERVICE.RETURN.DESC')}</p>
        </div>
        <div
          className={`${style.main_container_item} ${style.cod}  col-xl-3 col-sm-6 col-12 d-flex flex-column align-items-center`}
        >
          <p>
            <i className="fas fa-hand-holding-usd"></i>
          </p>

          <h3>{t('SERVICE.COD.TITLE')}</h3>
          <p>{t('SERVICE.COD.DESC')}</p>
        </div>
        <div
          className={`${style.main_container_item} ${style.order}  col-xl-3 col-sm-6 col-12 d-flex flex-column align-items-center`}
        >
          <p>
            <i className="fas fa-phone-alt"></i>
          </p>

          <h3>{t('SERVICE.PREORDER.TITLE')}</h3>
          <p>0934 189 106</p>
        </div>
      </div>
    </div>
  );
}
