import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import Toast from "../Toast";

import { loginActions } from "../../redux/slices/auth/login";
import { useGetTokenMutation, useGetUserQuery } from "../../redux/api/login";
import style from "./login.module.css";

export default function Login() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [
    getToken,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginerror,
      isLoading: isGetTokenLoading,
    },
  ] = useGetTokenMutation();

  const {
    data: userData,
    isSuccess: isGetUserSuccess,
    refetch: getUser,
  } = useGetUserQuery(loginData?.userToken);

  const onSubmit = async (data) => {
    let user = {
      user_info: data.name,
      user_password: data.password,
    };
    await getToken(user);
  };

  useEffect(() => {
    if (isLoginSuccess) {
      Toast("success", "Đăng nhập thành công", "top-right");
      dispatch(loginActions.setToken(loginData.userToken));
      getUser();
    } else if (isLoginError) setError(loginerror.data.message);
  }, [isLoginSuccess, isLoginError]);

  useEffect(() => {
    if (isGetUserSuccess) {
      dispatch(loginActions.setUser(userData));
      navigate("/");
    }
  }, [isGetUserSuccess]);

  return (
    <div className={style.login}>
      <form className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={style.title}>{t("LOGIN.TITLE")}</h2>
        <div className={style.form_element}>
          <i className="fas fa-user"></i>
          <input
            style={errors.name ? { border: "2px solid red" } : null}
            disabled={isGetTokenLoading}
            type="text"
            id={style.loginName}
            placeholder={t("LOGIN.EMAIL")}
            {...register("name", { required: true })}
          />
        </div>
        {errors.name && (
          <span className={style.error}>This field is required</span>
        )}
        <div className={style.form_element}>
          <i className="fas fa-unlock-alt"></i>
          <input
            style={errors.password ? { border: "2px solid red" } : null}
            disabled={isGetTokenLoading}
            type="password"
            id={style.loginPassword}
            placeholder={t("LOGIN.PASSWORD")}
            {...register("password", { required: true })}
          />
        </div>
        {errors.password && (
          <span className={style.error}>This field is required</span>
        )}
        {error?.length > 0 && (
          <Alert sx={{ marginTop: "20px" }} severity="error">
            {error}
          </Alert>
        )}
        <div className={style.btn_area}>
          <button type="submit">
            {isGetTokenLoading ? (
              <Spinner size="sm" animation="border" role="status"></Spinner>
            ) : (
              t("LOGIN.TITLE")
            )}
          </button>
        </div>

        <div className={style.optional}>
          <span>{t("LOGIN.QUESTION")}</span>
          <Link className={style.direct} to="/register">
            {t("LOGIN.SWITCH")}
          </Link>
        </div>
        {/*   <div
        className="d-flex justify-content-center"
        style={{ marginTop: "20px" }}
      >
        <GoogleLogin
          clientId={REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={handleGoogleLogin}
          onFailure={errorGoogleLogin}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        ></GoogleLogin>
      </div> */}
      </form>
    </div>
  );
}
