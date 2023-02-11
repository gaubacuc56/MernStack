import React from "react";
import { useSelector } from "react-redux";
import { loginSelectors } from "../../redux/slices/auth/login";
import style from "./userinformation.module.css";

export default function UserInformation() {
  const currentUser = useSelector(loginSelectors.account());

  return <div>{currentUser.user_name}</div>;
}
