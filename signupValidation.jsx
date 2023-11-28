import * as Yup from "yup";

export const signupValidation = Yup.object({
  name: Yup.string().min(3).required("Please Enter Your Name"),
  email: Yup.string().email("Please Enter Valid Email"),
  password: Yup.string().min(5).required("Please Enter Password"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not matched")
    .required("Please Enter confirm Password"),
});
