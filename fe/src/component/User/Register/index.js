import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RegisterThunk,
  registerSelectors,
  registerActions,
} from "../../../redux/slices/auth/register";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Alert } from "@mui/material";

import Spinner from "react-bootstrap/Spinner";

import style from "./register.module.css";
export default function Register(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerError = useSelector(registerSelectors.responses);
  const [loading, setLoading] = useState(false);
  const [isPasswordMatched, setIsPasswordMatched] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(registerActions.resetResponse());
  }, []);
  useEffect(() => {
    if (registerError === "") {
      dispatch(registerActions.resetResponse());
      navigate("/login");
      setLoading(false);
    } else if (registerError?.length > 0 && registerError !== "init")
      setLoading(false);
  }, [registerError]);
  const onSubmit = (data) => {
    if (data.password !== data.repassword) setIsPasswordMatched(false);
    else {
      setIsPasswordMatched(true);
      setLoading(true);
      dispatch(RegisterThunk(data));
    }
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
          <span className={style.error}>Vui lòng nhập thông tin</span>
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
          <span className={style.error}>Vui lòng nhập thông tin</span>
        )}

        <div className={style.form_element}>
          <i className="fas fa-envelope"></i>
          <input
            style={errors.email ? { border: "2px solid red" } : null}
            type="text"
            placeholder={t("REGISTER.EMAIL")}
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
        </div>
        {(errors?.email?.type == "required" && (
          <span className={style.error}>Vui lòng nhập thông tin</span>
        )) ||
          (errors?.email?.type == "pattern" && (
            <span className={style.error}>Email không hợp lệ</span>
          ))}

        <div className={style.form_element}>
          <i className="fas fa-unlock-alt"></i>
          <input
            style={errors.password ? { border: "2px solid red" } : null}
            type="password"
            placeholder={t("REGISTER.PASSWORD")}
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 32,
            })}
          />
          <i className={`${style.viewPassword} fas fa-eye`}></i>
        </div>
        {(errors?.password?.type == "required" && (
          <span className={style.error}>Vui lòng nhập thông tin</span>
        )) ||
          ((errors?.password?.type === "minLength" ||
            errors?.password?.type === "maxLength") && (
            <span className={style.error}>Độ dài mật khẩu từ 8-32 ký tự</span>
          ))}
        <div className={style.form_element}>
          <i className="fas fa-unlock-alt"></i>
          <input
            style={
              errors.repassword || !isPasswordMatched
                ? { border: "2px solid red" }
                : null
            }
            type="password"
            placeholder={t("REGISTER.REPASSWORD")}
            {...register("repassword", { required: true })}
          />
        </div>
        {errors.repassword && (
          <span className={style.error}>Vui lòng nhập thông tin</span>
        )}

        {!isPasswordMatched && !errors.repassword && (
          <span className={style.error}>Mật khẩu không khớp</span>
        )}

        {registerError?.length > 0 && registerError !== "init" && (
          <Alert sx={{ marginTop: "20px" }} severity="error">
            {registerError}
          </Alert>
        )}

        <div className={style.btn_area}>
          <button type="submit">
            {loading ? (
              <Spinner size="sm" animation="border" role="status"></Spinner>
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
