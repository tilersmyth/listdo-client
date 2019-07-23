import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

export const CreateBoardSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "must be greater than 5 characters")
    .max(50, "cannot exceed 50 characters")
    .required("Required field")
});
