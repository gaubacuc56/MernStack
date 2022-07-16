import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import style from './register.module.css'
export default function Register(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation()
  const onSubmit = data => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={style.title}>{t('REGISTER.TITLE')}</h2>
      <div className={style.form_element}>
        <i class="fas fa-user"></i>
        <input type="text" name placeholder={t('REGISTER.FULLNAME')}
          {...register("name", { required: true })} />

      </div>
      {errors.name && <span className={style.error}>This field is required</span>}
      <div className={style.form_element}>
        <i class="fas fa-envelope"></i>
        <input type="text" placeholder={t('REGISTER.EMAIL')}
          {...register("email", { required: true })} />
      </div>
      {errors.email && <span className={style.error}>This field is required</span>}

      <div className={style.form_element}>
        <i class="fas fa-unlock-alt"></i>
        <input type="password" placeholder={t('REGISTER.PASSWORD')}
          {...register("password", { required: true })} />

      </div>
      {errors.password && <span className={style.error}>This field is required</span>}
      <div className={style.form_element}>
        <i class="fas fa-unlock-alt"></i>
        <input type="password" placeholder={t('REGISTER.REPASSWORD')}
          {...register("repassword", { required: true })} />
      </div>
      {errors.repassword && <span className={style.error}>This field is required</span>}
      <div className={style.btn_area}>
        <button type="submit" >{t('REGISTER.TITLE')}</button>
      </div>

      <div className={style.optional}>
        <span>{t('REGISTER.QUESTION')}</span>
        <span className={style.direct} onClick={() => props.switchLayout(true)}>{t('REGISTER.SWITCH')}</span>

      </div>
    </form >
  );
}
