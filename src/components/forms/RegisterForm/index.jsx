import React from "react";
import { Form, Formik, ErrorMessage } from "formik";
import { SIGNUP_SCHEME } from "../../../validation/validationSchemas";
import MyInput from "../MyInput";
import styles from "./RegisterForm.module.sass";

const initialValues = {
  firstname: "",
  lastname: "",
  displayname: "",
  email: "",
  password: "",
  confPassword: "",
};

export default function RegisterForm(props) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SIGNUP_SCHEME}
    >
      {(formikProps) => {
        return (
          <Form>
            <div className={styles.regForm}>
              <div className={styles.fildsLength}>
                <div className={styles.inputContainer} >
                  <MyInput 
                    placeholder="First name"
                    type="text"
                    name="firstname"
                    id="left"
                    {...formikProps}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    placeholder="Last name"
                    type="text"
                    name="lastname"
                    id="right"
                    {...formikProps}
                  />
                </div>
              </div>
              <div className={styles.fildsLength}>
                <div className={styles.inputContainer}>
                  <MyInput
                    placeholder="Display name"
                    type="text"
                    name="displayname"
                    id="left"
                    {...formikProps}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    placeholder="Email Address"
                    type="text"
                    name="email"
                    id="right"
                    {...formikProps}
                  />
                </div>
              </div>
              <div className={styles.fildsLength}>
                <div className={styles.inputContainer}>
                  <MyInput
                    placeholder="Password"
                    type="password"
                    name="password"
                    id="left"
                    {...formikProps}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    placeholder="Password Confirmation"
                    type="password"
                    name="confPassword"
                    id="right"
                    {...formikProps}
                  />
                </div>
              </div>
            </div>

            <ErrorMessage name="confPassword" {...formikProps} />
          </Form>
        );
      }}
    </Formik>
  );
}
