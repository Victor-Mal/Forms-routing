import React from "react";
import classNames from "classnames";
import RegisterForm from "components/forms/RegisterForm";
import SignGoogle from "components/Buttons/SignWithGoogle";
import styles from "./RegisterMenu.module.sass";
import TurquoiseButton from "components/Buttons/TurquoiseButton";

function RegisterMenu(props) {
  const userSpecializations = classNames([styles.userSpec]);
  return (
    <div className={styles.registerForm}>
      <div className={styles.signupInfo}>
        <h1>CREATE AN ACCOUNT</h1>
        <h4>We always keep your name and email address private.</h4>
      </div>
      <RegisterForm />
      <div>
        <label className={userSpecializations}>
          <input type="radio" name="checked" value="Buyer" />
          Join As a Buyer
          <p className={styles.choiceInfo}>
            I am looking for a Name, Logo or Tagline for my business, brand or
            product.
          </p>
        </label>
        <label className={userSpecializations}>
          <input type="radio" name="checked" value="Seller" />
          Join As a Creative or Marketplace Seller
          <p className={styles.choiceInfo}>
            I plan to submit name ideas, Logo designs or sell names in Domain
            Marketplace.
          </p>
        </label>
      </div>

      <label>
        <input type="checkbox" name="checked" value="Mailing" />
        Allow Squadhelp to send marketing/promotional offers from time to time
      </label>

      <TurquoiseButton
        title={<h3>Create account</h3>}
        type={"submit"}
      />
      <div>
        <p className={styles.terms}>
        By clicking this button, you agree to our <span>
        <a className={styles.termsLink} href="https://www.squadhelp.com/Terms&Conditions">Terms of Service</a>
        </span></p>
      </div>
      <SignGoogle title={"Sign up with Google"} />
    </div>
  );
}

export default RegisterMenu;
