import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import { GoogleLogin } from "react-google-login";
import { REACT_APP_GOOGLE_CLIENT_ID } from "../../utils/config";
import {
  login,
  loginSelectors,
  loginActions,
} from "../../redux/slices/auth/login";
import style from "./login.module.css";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const loginError = useSelector(loginSelectors.error);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(loginActions.setDefaultError());
  }, []);
  useEffect(() => {
    if (loginError === "") {
      dispatch(loginActions.setDefaultError());
      navigate("/profile");
      setLoading(false);
    } else setLoading(false);
  }, [loginError, loading]);
  const onSubmit = (data) => {
    setLoading(true);
    dispatch(login(data));
  };
  const handleGoogleLogin = (googleData) => {
    console.log(googleData.profileObj);
  };
  const errorGoogleLogin = (res) => {
    console.log("fail: ", res);
  };
  return (
    <div className={style.login}>
      <form className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={style.title}>{t("LOGIN.TITLE")}</h2>
        <div className={style.form_element}>
          <i className="fas fa-user"></i>
          <input
            style={errors.name ? { border: "2px solid red" } : null}
            disabled={loading}
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
            disabled={loading}
            type="password"
            id={style.loginPassword}
            placeholder={t("LOGIN.PASSWORD")}
            {...register("password", { required: true })}
          />
        </div>
        {errors.password && (
          <span className={style.error}>This field is required</span>
        )}
        {loginError?.length > 0 && loginError !== "init" && (
          <Alert sx={{ marginTop: "20px" }} severity="error">
            {loginError}
          </Alert>
        )}
        <div className={style.btn_area}>
          <button type="submit">
            {loading ? (
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
