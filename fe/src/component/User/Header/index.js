import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import style from './header.module.css'
import logo from '../../../assets/img/logo.png'
import useMediaQuery from '../../../hooks/useMediaQuery'
export default function Header() {
    const [form, setForm] = useState(false)
    const [find_value, setFind_value] = useState('')
    const isDesktop = useMediaQuery("(min-width:1140px)");
    if (form === true) {
        return (
            <div>
                <header>
                    <div className={`${style.main_container} grid`}>
                        <a href="#" className={style.homeReload}>
                            {/*  <Link to="/">
                                <img src="/img/logo.png" alt="" />
                            </Link> */}
                            <img src={logo} className={style.logo} alt="logo" />

                        </a>
                        {
                            isDesktop ?
                                <div className={style.searchArea}>
                                    <input onChange={(e) => setFind_value(e.target.value)} type="text" className={style.searchBar} placeholder="Tìm kiếm sản phẩm" />
                                    {/*  <Link exact to={`/Sanpham_display/${find_value}`} >
                                <i className="fas fa-search"></i>
                            </Link> */}
                                    <i className="fas fa-search"></i>
                                </div>
                                : ""
                        }


                        <div className={style.operation}  >

                            <div onClick={() => setForm(!form)} href className={style.account}>
                                <i className="far fa-user" />
                            </div>

                            {/* <Link to="/Cart">
                                <div href className={style.cart}>
                                    <i id={style.cart_icon} className="fas fa-shopping-cart" />
                                           <div className={style.cart_number}>{cart.length}</div>
                                </div>
                            </Link> */}

                            <i id={style.cart_icon} className="fas fa-shopping-cart" />
                        </div>
                    </div>
                </header>
                {/*      <Account_Operation></Account_Operation> */}

            </div>
        )
    }
    else if (form === false) {
        return (
            <header>
                <div className={`${style.main_container} grid`}>
                    <a href="#" className={style.homeReload}>
                        {/*   <Link to="/">
                            <img src="/img/logo.png" alt="" />
                        </Link> */}
                        <img src={logo} className={style.logo} alt="" />
                    </a>
                    {
                        isDesktop ?
                            <div className={style.searchArea}>
                                <input onChange={(e) => setFind_value(e.target.value)} type="text" className={style.searchBar} placeholder="Tìm kiếm sản phẩm" />
                                {/*  <Link exact to={`/Sanpham_display/${find_value}`} >
                                <i className="fas fa-search"></i>
                            </Link> */}
                                <i className="fas fa-search"></i>
                            </div>
                            : ""
                    }

                    <div className={style.operation}>

                        <div onClick={() => setForm(!form)} href className={style.account}>
                            <i className="far fa-user" />
                        </div>

                        {/*    <Link to="/Cart">
                            <div href className="cart">
                                <i id={style.cart_icon} className="fas fa-shopping-cart" />
                                   <div className={style.cart_number}>{cart.length}</div>
                            </div>
                        </Link> */}
                        <i id={style.cart_icon} className="fas fa-shopping-cart" />

                    </div>
                </div>
            </header>
        );
    }

}
