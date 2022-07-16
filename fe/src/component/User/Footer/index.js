import React from 'react'
import style from './footer.module.css'
import { useTranslation } from 'react-i18next';
export default function Footer() {
    const { t, i18n } = useTranslation()
    const handleLanguage = () => {
        if (i18n.language === 'vn')
            i18n.changeLanguage('en')
        else if (i18n.language === 'en')
            i18n.changeLanguage('vn')
    }
    return (
        <div className={style.footer}>
            <div className={`${style.footer_container} grid row justify-content-between`} >
                <div className={`${style.footer_container_item} ${style.contact} 	col-lg-3  col-sm-6 col-12`} >
                    <h3>{t('FOOTER.CONTACT.TITLE')}</h3>
                    <div className={style.separate}></div>
                    <p>{t('FOOTER.CONTACT.ADDRESS')}</p>
                    <p>Phone: 0938559501</p>
                    <p >Email: uit.edu.vn@gmail.com</p>
                </div>
                <div className={`${style.footer_container_item} ${style.policy} col-lg-3  col-sm-6 col-12`}  >
                    <h3>{t('FOOTER.POLICY.TITLE')}</h3>
                    <div className={style.separate}></div>
                    <a href="#">{t('FOOTER.POLICY.SWAP')}</a>
                    <a href="#">{t('FOOTER.POLICY.')}</a>
                    <a href="#">{t('FOOTER.POLICY.CARE')}</a>
                    <a href="#">{t('FOOTER.POLICY.DELIVERY')}</a>
                </div>
                <div className={`${style.footer_container_item}  ${style.link}  col-lg-3  col-sm-6 col-12`} >
                    <h3>{t('FOOTER.LINK.TITLE')}</h3>
                    <div className={style.separate}></div>
                    <p>{t('FOOTER.LINK.DESC')}</p>
                    <div className={style.social_flatform}>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-google-plus-g"></i>
                        <i className="fab fa-pinterest"></i>
                    </div>
                    {/*    <img src="/img/dkbocongthuong.png"></img> */}
                </div>
                <div className={`${style.footer_container_item}  ${style.transfers}  col-lg-3  col-sm-6 col-12`} >
                    <h3>{t('FOOTER.BANK.TITLE')}</h3>
                    <div className={style.separate}></div>
                    <div className={style.transfers_info}>
                        <p>BIDV:   1331 00000 74767</p>
                        <p>Momo:   0934 189 092</p>
                        <p>Zalopay:   0934 189 092</p>
                        <p>Payoo:   0934 189 092</p>
                    </div>

                </div>
            </div>
            <div className={style.longSeparate}></div>
            <div className={`${style.footer_bottom} grid d-flex justify-content-between`}>
                <p className={style.copyRight}>© 2021 All rights reserved. ROSSY STORE</p>
                <div onClick={() => handleLanguage()} className={style.languageContainer}>
                    <i style={{ cursor: 'pointer', fontSize: "25px", color: 'white' }} className="fa-solid fa-globe"></i>
                    <span>{t('FOOTER.LANGUAGE')}</span>
                </div>
            </div>
        </div>
    );
}
