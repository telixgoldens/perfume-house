import * as yup from "yup";

// for sign up
export const signUpSchema = yup
.object({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is reqired"),
  email: yup.string().required("email is required").email("Invalid email format"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "min lenght of password should be atleast 8"),
  confirmPassword: yup
    .string()
    .required("check password confirmation")
    .min(8, "min lenght of password should be atleast 8")
    .oneOf([yup.ref("password")], "password do not match"),
})
.required();
export const signInSchema = yup
.object({
 
  email: yup.string().required("email is required").email("Invalid email format"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "min lenght of password should be atleast 8"),
  
})
.required();