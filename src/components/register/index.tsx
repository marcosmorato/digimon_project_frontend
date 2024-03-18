import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as S from "./styles";
import * as GS from "../../utils/globalStyles/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../utils/yup/index";
import { AppDispatch, RootState } from "../../store/store";
import { registerUserThunk } from "../../store/user/thunk";

interface FormData {
  email: string;
  password: string;
  name: string;
  nickname: string;
  password_confirmation: string;
}

const Register: React.FC = () => {
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
        <GS.AccountTitle variant="h2">Register</GS.AccountTitle>
        <S.Form onSubmit={handleSubmit(handleForm)}>
          <S.InputContainer>
            <S.Input>
              <S.Label>Full name:</S.Label>
              <S.InputBox>
                <S.InputText
                  autoComplete="off"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  type="string"
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                ></S.InputText>
              </S.InputBox>
            </S.Input>
            <S.Input>
              <S.Label>Nickname:</S.Label>
              <S.InputBox>
                <S.InputText
                  autoComplete="off"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  type="string"
                  {...register("nickname")}
                  error={!!errors.nickname}
                  helperText={errors.nickname?.message}
                ></S.InputText>
              </S.InputBox>
            </S.Input>
          </S.InputContainer>
          <S.InputContainer>
            <S.Input>
              <S.Label>Email:</S.Label>
              <S.InputBox>
                <S.InputText
                  autoComplete="off"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  type="string"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                ></S.InputText>
              </S.InputBox>
            </S.Input>
            <S.Input>
              <S.Label>Password:</S.Label>
              <S.InputBox>
                <S.InputText
                  autoComplete="off"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  type="password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                ></S.InputText>
              </S.InputBox>
            </S.Input>
          </S.InputContainer>
          <S.InputContainer>
            <S.Input>
              <S.Label>Confirm Password:</S.Label>
              <S.InputBox>
                <S.InputText
                  autoComplete="off"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  type="password"
                  {...register("password_confirmation")}
                  error={!!errors.password_confirmation}
                  helperText={errors.password_confirmation?.message}
                ></S.InputText>
              </S.InputBox>
            </S.Input>
            <S.ButtonBox>
              <S.CreateUser type="submit" color="primary" variant="contained">
                Register
              </S.CreateUser>
            </S.ButtonBox>
          </S.InputContainer>
        </S.Form>
    </S.Container>
  );
};

export default Register;
