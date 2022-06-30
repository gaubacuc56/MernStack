import React from 'react'
import style from './navigation.module.css'
import { Link } from 'react-router-dom';
import useMediaQuery from '../../../hooks/useMediaQuery'
export default function Navigation() {
    const isNotMobile = useMediaQuery("(min-width:768px)");
    return (
        <>
            {
                isNotMobile
                    ? <div className={style.navigation}>
                        <ul className={style.list}>
                            <li className={style.item}>
                                <Link to="/">
                                    TRANG CHỦ
                                </Link>

                            </li>
                            <li className={style.item}>
                                <Link to={"/Gioithieu"}>
                                    RUNNING
                                </Link>
                            </li>

                            <li className={style.item}>
                                <Link to={"/Gioithieu"}>
                                    SOCCER
                                </Link>
                            </li>
                            <li className={style.item}>
                                <Link to={"/Gioithieu"}>
                                    BASKETBALL
                                </Link>
                            </li>
                            <li className={style.item}>
                                <Link to={"/Gioithieu"}>
                                    TENNIS
                                </Link>
                            </li>
                            <li className={style.item}>
                                <Link to={"/Gioithieu"}>
                                    LIFESTYLE
                                </Link>
                            </li>

                        </ul>
                    </div>
                    : ""
            }
        </>

    );
}
