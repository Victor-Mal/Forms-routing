import React from "react";
import { Form, Formik } from "formik";
import { LOGIN_SCHEME } from "validation/validationSchemas";
import MyInput from "../MyInput";

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm(props) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={LOGIN_SCHEME}
    >
      {(formikProps) => {
        console.log('Formik props', Formik)
        return (
          <Form style={{ width: "522px", position: "relative" }}>
            <div style={{ position: "relative" }}>
              <MyInput
                type="text"
                name="email"
                id="left"
                placeholder="Email address"
                {...formikProps}
              />
            </div>
            <div style={{ position: "relative" }}>
              <MyInput
                type="password"
                name="password"
                id="left"
                placeholder="Password"
                {...formikProps}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
