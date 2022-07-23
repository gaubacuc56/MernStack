import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import style from './login.module.css'

export default function Login(props) {
	const [loading, setLoading] = useState(false)
	const { register, handleSubmit, formState: { errors } } = useForm();
	const { t } = useTranslation()
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 2000);
	}, [loading])
	const onSubmit = data => {
		setLoading(true)
		console.log(data);
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2 className={style.title}>{t('LOGIN.TITLE')}</h2>
			<div className={style.login_name}>
				<i class="fas fa-user"></i>
				<input style={errors.name ? { border: '2px solid red' } : null} disabled={loading} type="text" id={style.loginName} placeholder={t('LOGIN.EMAIL')}
					{...register("name", { required: true })} />

			</div>
			{errors.name && <span className={style.error}>This field is required</span>}
			<div className={style.login_password}>
				<i class="fas fa-unlock-alt"></i>
				<input style={errors.password ? { border: '2px solid red' } : null} disabled={loading} type="password" id={style.loginPassword} placeholder={t('LOGIN.PASSWORD')}
					{...register("password", { required: true })} />

			</div>
			{errors.password && <span className={style.error}>This field is required</span>}
			<div className={style.btn_area}>
				<button type="submit">
					{loading
						? <ClipLoader color='#ffffff' loading={loading} size={23} />
						: t('LOGIN.TITLE')}
				</button>
			</div>

			<div className={style.optional}>
				<span>{t('LOGIN.QUESTION')}</span>
				<span className={style.direct} onClick={() => props.switchLayout(false)}>{t('LOGIN.SWITCH')}</span>
			</div>
		</form >

	);
}
