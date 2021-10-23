import * as yup from "yup";

export const passwordRegex =
  /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

export const nameRegex = /^[\w]{3,30}$/;

export const LOGIN_SCHEME = yup
  .object()
  .required()
  .shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(
        passwordRegex,
        "Password must contain at least 6 characters, 1 uppercase letter, 1 lowercase letter and 1 number without spaces."
      )
      .required(),
  });


