import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../utils/yup";
import { loginUserThunk } from "../../store/user/thunk";
import { AppDispatch, RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

const LoginBox: React.FC = () => {
  const [LoginSuccess, setLoginSuccess] = useState(false);
  const [LoginFailed, setLoginFailed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const userRedux = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleForm = (formData: FormData) => {
    dispatch(loginUserThunk(formData));
    localStorage.setItem("teste", "testando");
  };

  const aff = localStorage.getItem("teste");

  useEffect(() => {
    console.log("why?");
    console.log(aff);
    if (userRedux.isLogged) {
      console.log("entrou no if");
      navigate("/home");
      return;
    }
    console.log("nao entrou no if");
  }, [navigate, userRedux]);

  return (
    <S.Container>
      <S.FormBox>
        <S.DialogContentMui>
          <S.Form onSubmit={handleSubmit(handleForm)}>
            <S.inputBox>
              <S.InputText
                autoComplete="off"
                variant="outlined"
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
                variant="outlined"
                label="Senha"
                margin="dense"
                type="password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              ></S.InputText>
            </S.inputBox>
            <S.CreateUser type="submit" color="primary" variant="contained">
              Login
            </S.CreateUser>
          </S.Form>
        </S.DialogContentMui>
      </S.FormBox>
    </S.Container>
  );
};

export default LoginBox;
