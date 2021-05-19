// Here goes the schema for the form
import * as yup from "yup";

const formSchema = yup.object().shape({
  ///only include a comma at the end of the validation for an individual key--so comma before you start a new key
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(3, "username must be 3 characters long"),
  email: yup
    .string()
    .email("Must enter in a valid email")
    .required("Email is required"),
  role: yup
    .string()
    .oneOf(["student", "alumni", "instructor", "tl"], "Role is required"),
  civil: yup.string().oneOf(["married", "single"], "Civil status is required"),
  coding: yup.boolean(),
  reading: yup.boolean(),
  hiking: yup.boolean,
});
