import React from "react";
import SignGoogle from "components/Buttons/SignWithGoogle";
import TurquoiseButton from "components/Buttons/TurquoiseButton";
import LoginForm from "components/forms/LoginForm";

import styles from "./LoginMenu.module.sass";

function LoginMenu(props) {
  
  return (
    <div>
      <div className={styles.loginForm}>
        <h1>LOGIN TO YOUR ACCOUNT</h1>
        <LoginForm />

        <div className={styles.rememFogot}>
          <label>
            <input type="checkbox" name="checked" value="RememberMe" />
            Remember Me
          </label>
          <a
            className={styles.linkStyle}
            href="https://www.squadhelp.com/forgot_password.php"
          >
            Forgot Password
          </a>
        </div>
        <TurquoiseButton title={<h3>LOGIN</h3>} type={'submit'}/>
        <SignGoogle title={"Sign in with Google"} />
      </div>
    </div>
  );
}

export default LoginMenu;
