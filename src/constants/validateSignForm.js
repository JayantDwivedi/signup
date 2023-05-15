import * as Yup from "yup";

export const validateSignUp = Yup.object({
  firstName: Yup.string()
    .min(3, "First Name should be greater than 3 Characters")
    .max(50, "First Name should be less than 50 Characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(3, "Last Name should be greater than 3 Characters")
    .max(50, "Last Name should be greater than 50 Characters")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
