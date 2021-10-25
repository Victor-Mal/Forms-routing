import React from "react";
import { Link } from "react-router-dom";
import SignLogin from "components/Buttons/SignLogin";

import RegisterMenu from "../../components/RegisterMenu";
import styles from "../../assets/styles/PageStyle.module.sass";
import style from "../SignIn.module.sass"

export default function SignUpPage() {
 

  return (
    <div className={styles.pageStyle}>
       <div className={style.header}>
        <Link to="/">
          <img src="/images/logo.png" alt="LOGO" style={{ display: "block" }} />
        </Link>
        <SignLogin way={"/"} linkBody={"Login"}/>
      </div>

      <RegisterMenu />
    </div>
  );
}
