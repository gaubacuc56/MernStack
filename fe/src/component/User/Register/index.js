import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import style from "./register.module.css";
export default function Register(props) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);
  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
  };

  return (
    <div className={style.register}>
      <form className={style.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={style.title}>{t("REGISTER.TITLE")}</h2>
        <div className={style.form_element}>
          <i className="fas fa-user"></i>
          <input
            style={errors.name ? { border: "2px solid red" } : null}
            type="text"
            name
            placeholder={t("REGISTER.FULLNAME")}
            {...register("name", { required: true })}
          />
        </div>

        {errors.name && (
          <span className={style.error}>This field is required</span>
        )}

        <div className={style.form_element}>
          <i className="fas fa-phone"></i>
          <input
            style={errors.phone ? { border: "2px solid red" } : null}
            type="text"
            placeholder={t("REGISTER.PHONE")}
            {...register("phone", { required: true })}
          />
        </div>

        {errors.phone && (
          <span className={style.error}>This field is required</span>
        )}

        <div className={style.form_element}>
          <i className="fas fa-envelope"></i>
          <input
            style={errors.email ? { border: "2px solid red" } : null}
            type="text"
            placeholder={t("REGISTER.EMAIL")}
            {...register("email", { required: true })}
          />
        </div>
        {errors.email && (
          <span className={style.error}>This field is required</span>
        )}

        <div className={style.form_element}>
          <i className="fas fa-unlock-alt"></i>
          <input
            style={errors.password ? { border: "2px solid red" } : null}
            type="password"
            placeholder={t("REGISTER.PASSWORD")}
            {...register("password", { required: true })}
          />
        </div>
        {errors.password && (
          <span className={style.error}>This field is required</span>
        )}
        <div className={style.form_element}>
          <i className="fas fa-unlock-alt"></i>
          <input
            style={errors.repassword ? { border: "2px solid red" } : null}
            type="password"
            placeholder={t("REGISTER.REPASSWORD")}
            {...register("repassword", { required: true })}
          />
        </div>
        {errors.repassword && (
          <span className={style.error}>This field is required</span>
        )}

        <div className={style.btn_area}>
          <button type="submit">
            {loading ? (
              <ClipLoader color="#ffffff" loading={loading} size={23} />
            ) : (
              t("REGISTER.TITLE")
            )}
          </button>
        </div>
        <div className={style.optional}>
          <span>{t("REGISTER.QUESTION")}</span>
          <Link className={style.direct} to="/login">
            {t("REGISTER.SWITCH")}
          </Link>
        </div>
      </form>
    </div>
  );
}
