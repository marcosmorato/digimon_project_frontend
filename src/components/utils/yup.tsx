import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .min(3, "Mínimo 3 caracteres")
    .max(30, "Seu Nome deve conter no máximo 30 caracteres")
    .required("Seu Nome deve ser Fornecido"),
  nickname: yup
    .string()
    .min(3, "Mínimo 3 letras")
    .max(10, "Seu Apelido deve conter no máximo 10 caracteres")
    .required("Campo obrigatório"),
  email: yup
    .string()
    .email("Email inválido")
    .required("Um Email válido deve ser fornecido"),
  password: yup
    .string()
    .min(6, "Mínimo 6 dígitos")
    .required("Senha de no Mínimo 6 dígitos deve ser criada"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não conferem"),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
    .required("Um Email válido deve ser fornecido"),
  password: yup
    .string()
    .min(6, "Mínimo 6 dígitos")
    .required("Senha de no Mínimo 6 dígitos deve ser criada"),
});
