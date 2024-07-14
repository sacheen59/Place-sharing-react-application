import * as Yup from "yup";

export const newPlaceSchema = Yup.object({
  title: Yup.string().min(2).required("Please enter title."),
  description: Yup.string().min(10).required("Please enter description."),
  address: Yup.string().required("Please enter address."),
});

export const updatePlaceSchema = Yup.object({
  title: Yup.string().min(2).required("Please enter title."),
  description: Yup.string().min(10).required("Please enter description."),
});

export const signupSchema = Yup.object({
  name: Yup.string().required("Enter your name."),
  email: Yup.string().email().required("Enter your email."),
  password: Yup.string()
    .required("Enter your password.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%&*-])[A-Za-z\d!@#$%&*-]{8,}$/,
      "Password must contain one uppercase, one lowercase and special characters like !@#$%&*- and contain at least 8 character"
    ),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Must match with password")
    .required("Confirm password is required"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Enter your email."),
  password: Yup.string().required("Enter your password."),
});
