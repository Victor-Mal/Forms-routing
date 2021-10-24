import React from "react";
import { Form, Formik, ErrorMessage } from "formik";
import { SIGNUP_SCHEME } from "../../../validation/validationSchemas";
import MyInput from "../MyInput";
import styles from "./RegisterForm.module.sass";

const initialValues = {
  firstname: "",
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
                <MyInput
                  placeholder="First name"
                  type="text"
                  name="firstname"
                  {...formikProps}
                />
                <MyInput
                  placeholder="Last name"
                  type="text"
                  name="lastname"
                  {...formikProps}
                />
                <MyInput
                  placeholder="Display name"
                  type="text"
                  name="displayname"
                  {...formikProps}
                />
              </div>
              <div className={styles.fildsLength}>
                <MyInput
                  placeholder="Email Address"
                  type="text"
                  name="email"
                  {...formikProps}
                />
                <MyInput
                  placeholder="Password"
                  type="password"
                  name="password"
                  {...formikProps}
                />
                <MyInput
                  placeholder="Password Confirmation"
                  type="password"
                  name="confPassword"
                  {...formikProps}
                />
              </div>
            </div>

            <ErrorMessage name="confPassword" {...formikProps} />
            
          </Form>
        );
      }}
    </Formik>
  );
}
