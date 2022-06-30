import React from 'react'
import style from './footer.module.css'

export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${style.footer_container} grid row justify-content-between`} >
                <div className={`${style.footer_container_item} ${style.contact} 	col-xl-3  col-sm-6 col-12`} >
                    <h3>LIÊN HỆ</h3>
                    <div className={style.separate}></div>
                    <p>Khu phố 6, phường Linh Trung, TP. Thủ Đức, TP. Hồ Chí Minh</p>
                    <p>Phone: 0938559501</p>
                    <p >Email: uit.edu.vn@gmail.com</p>
                </div>
                <div className={`${style.footer_container_item} ${style.policy} col-xl-3  col-sm-6 col-12`}  >
                    <h3>CHÍNH SÁCH HỖ TRỢ</h3>
                    <div className={style.separate}></div>
                    <a href="#">Chính sách đổi sản phẩm</a>
                    <a href="#">Chính sách trả góp</a>
                    <a href="#">Chính sách bảo hành</a>
                    <a href="#">Chính sách giao hàng</a>
                </div>
                <div className={`${style.footer_container_item}  ${style.link}  col-xl-3  col-sm-6 col-12`} >
                    <h3>LIÊN KẾT</h3>
                    <div className={style.separate}></div>
                    <p>Hãy kết nối với chúng tôi</p>
                    <div className={style.social_flatform}>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-google-plus-g"></i>
                        <i className="fab fa-pinterest"></i>
                    </div>
                    {/*    <img src="/img/dkbocongthuong.png"></img> */}
                </div>
                <div className={`${style.footer_container_item}  ${style.transfers}  col-xl-3  col-sm-6 col-12`} >
                    <h3>THÔNG TIN CHUYỂN KHOẢN</h3>
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
            <p className={style.copyRight}>© 2021 All rights reserved. ROSSY STORE</p>
        </div>
    );
}
