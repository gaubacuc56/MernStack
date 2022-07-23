import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import style from './register.module.css'
export default function Register(props) {
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
      <h2 className={style.title}>{t('REGISTER.TITLE')}</h2>
      <div className={style.form_element}>
        <i class="fas fa-user"></i>
        <input style={errors.name ? { border: '2px solid red' } : null} type="text" name placeholder={t('REGISTER.FULLNAME')}
          {...register("name", { required: true })} />

      </div>
      {errors.name && <span className={style.error}>This field is required</span>}
      <div className={style.form_element}>
        <i class="fas fa-envelope"></i>
        <input style={errors.email ? { border: '2px solid red' } : null} type="text" placeholder={t('REGISTER.EMAIL')}
          {...register("email", { required: true })} />
      </div>
      {errors.email && <span className={style.error}>This field is required</span>}

      <div className={style.form_element}>
        <i class="fas fa-unlock-alt"></i>
        <input style={errors.password ? { border: '2px solid red' } : null} type="password" placeholder={t('REGISTER.PASSWORD')}
          {...register("password", { required: true })} />

      </div>
      {errors.password && <span className={style.error}>This field is required</span>}
      <div className={style.form_element}>
        <i class="fas fa-unlock-alt"></i>
        <input style={errors.repassword ? { border: '2px solid red' } : null} type="password" placeholder={t('REGISTER.REPASSWORD')}
          {...register("repassword", { required: true })} />
      </div>
      {errors.repassword && <span className={style.error}>This field is required</span>}

      <div className={style.btn_area}>
        <button type="submit">
          {loading
            ? <ClipLoader color='#ffffff' loading={loading} size={23} />
            : t('REGISTER.TITLE')
          }
        </button>
      </div>
      <div className={style.optional}>
        <span>{t('REGISTER.QUESTION')}</span>
        <span className={style.direct} onClick={() => props.switchLayout(true)}>{t('REGISTER.SWITCH')}</span>

      </div>
    </form >
  );
}
