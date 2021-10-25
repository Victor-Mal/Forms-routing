import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/PageStyle.module.sass";
import LoginMenu from "components/LoginMenu";
import SignLogin from "components/Buttons/SignLogin";
import style from "../SignIn.module.sass"



export default function SignInPage() {

 
  return (
    <div className={styles.pageStyle}>
      <div className={style.header}>
        <Link to="/">
          <img src="/images/logo.png" alt="LOGO" style={{ display: "block" }} />
        </Link>
        <SignLogin way={"/signup"} linkBody={"Signup"}/>
      </div>

      <LoginMenu />
    </div>
  );
}
