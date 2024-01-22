import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .min(3, "Minimum 3 characters")
    .max(30, "Your name must contain a maximum of 30 characters")
    .required("Your Name must be Provided"),
  nickname: yup
    .string()
    .min(3, "Minimum 3 letters")
    .max(10, "Your Nickname must contain a maximum of 10 characters")
    .required("Required field"),
  email: yup
    .string()
    .email("Invalid email")
    .required("A valid email must be provided"),
  password: yup
    .string()
    .min(6, "Minimum 6 digits")
    .required("Password of at least 6 digits must be created"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match"),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Enter a valid email"),
  password: yup
    .string()
    .min(6, "Minimum 6 digits")
    .required("Enter a valid password"),
});

export const schemaDigimonFilter = yup.object().shape({
  name: yup.string().max(30, "Your name must contain a maximum of 30 characters"),
});
