import React from "react";
import {Form, Formik} from "formik";
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
        return (
          <Form>
            <MyInput type="text" name="email" placeholder="Email address" {...formikProps} />
            <MyInput type="password" name="password" placeholder="Password" {...formikProps} />
          </Form>
        );
      }}
    </Formik>
  );
}
