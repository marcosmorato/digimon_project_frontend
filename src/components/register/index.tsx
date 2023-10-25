import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as S from "./styles";
import * as GS from "../globalStyles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../utils/yup/index";
import { AppDispatch, RootState } from "../../store/store";
import { registerUserThunk } from "../../store/user/thunk";
import { useSelector } from "react-redux";

interface FormData {
  email: string;
  password: string;
  name: string;
  nickname: string;
  password_confirmation: string;
}

const RegisterBox: React.FC = () => {
  const usersState = useSelector((state: RootState) => state);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerFailed, setRegisterFailed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleForm = (formData: any) => {
    dispatch(registerUserThunk(formData));
  };

  return (
    <S.Container>
      <S.FormBox>
        <GS.TitleBox variant="h3">Register</GS.TitleBox>
        <S.Form onSubmit={handleSubmit(handleForm)}>
          <S.InputContainer>
            <S.inputBox>
              <S.InputText
                autoComplete="off"
                variant="filled"
                label="Nome Completo"
                margin="dense"
                type="string"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              ></S.InputText>
            </S.inputBox>

            <S.inputBox>
              <S.InputText
                autoComplete="off"
                variant="filled"
                label="Apelido"
                margin="dense"
                type="string"
                {...register("nickname")}
                error={!!errors.nickname}
                helperText={errors.nickname?.message}
              ></S.InputText>
            </S.inputBox>
          </S.InputContainer>
          <S.InputContainer>
            <S.inputBox>
              <S.InputText
                autoComplete="off"
                variant="filled"
                label="Email"
                margin="dense"
                type="string"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              ></S.InputText>
            </S.inputBox>
            <S.inputBox>
              <S.InputText
                autoComplete="off"
                variant="filled"
                label="Senha"
                margin="dense"
                type="password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              ></S.InputText>
            </S.inputBox>
          </S.InputContainer>
          <S.InputContainer>
            <S.inputBox>
              <S.InputText
                autoComplete="off"
                variant="filled"
                label="Repita a Senha"
                margin="dense"
                type="password"
                {...register("password_confirmation")}
                error={!!errors.password_confirmation}
                helperText={errors.password_confirmation?.message}
              ></S.InputText>
            </S.inputBox>
            <S.ButtonContainer>
              <S.CreateUser type="submit" color="primary" variant="contained">
                Registrar
              </S.CreateUser>
            </S.ButtonContainer>
          </S.InputContainer>
        </S.Form>
      </S.FormBox>
    </S.Container>
  );
};

export default RegisterBox;
