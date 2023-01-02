import * as yup from "yup";
export const loginSchema = yup
  .object()
  .shape({
    email:  yup.string()
    .email("Invalid email address")
    .required("email is Required"),
    password: yup.string()
    .required("password is Required"),
  })
  .required();
export const registerSchema = yup
  .object()
  .shape({
    email:  yup.string()
    .email("Invalid email address")
    .required("email is Required"),
    password: yup.string()
    .required("password is Required"),
  })
  .required();
