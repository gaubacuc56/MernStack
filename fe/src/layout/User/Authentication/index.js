import React, { useState } from 'react'
import style from './authentication.module.css'
import Login from '../../../component/User/Login'
import Register from '../../../component/User/Register'
export default function Authentication(props) {
    const [isLogin, setIsLogin] = useState(true)
    const Switch = (value) => {
        setIsLogin(value)
    }
    const handleModal = () => {

        props.modal(!props.isOpen)

    }
    return (
        <div className={style.overlay_container}>
            <div className={style.main_container}>
                <div onClick={handleModal} className={style.exit}>X</div>
                {

                    isLogin
                        ? <Login switchLayout={Switch}></Login>
                        : <Register switchLayout={Switch}></Register>
                }

            </div>
        </div>
    )
}
