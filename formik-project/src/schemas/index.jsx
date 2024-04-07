import * as yup from "yup";

const ValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("email is required"),
  name: yup.string().required("Name is required"),
  lastName: yup.string().required("Lastname is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  // .matches(passwordRegex, {
  //   message:
  //     "Password must contain at least 6 characters, one uppercase, one lowercase, one number and one special case character",
  // }),
});

export default ValidationSchema;
