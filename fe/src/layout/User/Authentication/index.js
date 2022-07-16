import React, { useState } from 'react'
import style from './authentication.module.css'
import Login from '../../../component/User/Login'
import Register from '../../../component/User/Register'
export default function Authentication() {
    const [isLogin, setIsLogin] = useState(true)
    const Switch = (value) => {
        setIsLogin(value)
    }
    return (
        <div className={style.overlay_container}>
            <div className={style.main_container}>
                {
                    isLogin
                        ? <Login switchLayout={Switch}></Login>
                        : <Register switchLayout={Switch}></Register>
                }

            </div>
        </div>
    )
}
