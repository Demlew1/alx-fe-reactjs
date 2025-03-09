import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("email is required"),
  passWord: Yup.string()
    .required("Password is required")
    .min(6, "password must be atleast 6 characters"),
});
export const initialValues = {
  name: "",
  email: "",
  password: "",
};
