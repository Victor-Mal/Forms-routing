import classNames from "classnames";
import LoginForm from "components/forms/LoginForm";
import styles from "./LoginMenu.module.sass";
import google from "../../assets/icons/google.svg";

function LoginMenu(props) {
  const login = classNames([styles.login], [styles.btn], [styles.linkStyle]);
  const signGoogle = classNames(
    [styles.signGoogle],
    [styles.btn],
    [styles.linkStyle]
  );
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
          <a className={styles.linkStyle} href="https://www.squadhelp.com/forgot_password.php">
            Forgot Password
          </a>
        </div>

        <a
          className={login}
          href="https://www.squadhelp.com/forgot_password.php"
        >
          <h3>LOGIN</h3>
        </a>
        <a
          className={signGoogle}
          href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fwww.squadhelp.com%2Flogin.php&client_id=78274772730-f62839c388e8b785mhfh211vr4ueva08.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&approval_prompt=auto&flowName=GeneralOAuthFlow"
        >
          <img src={google} alt="google" />
          Sign in with Google
        </a>
      </div>
    </div>
  );
}

export default LoginMenu;
