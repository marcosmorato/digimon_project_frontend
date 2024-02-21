import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as S from "./styles";
import * as GS from "../../utils/globalStyles/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../utils/yup/index";
import { loginUserThunk } from "../../store/user/thunk";
import { AppDispatch, RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
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
  };

  useEffect(() => {
    if (userRedux.isLogged) {
      navigate("/home");
      return;
    }
  }, [navigate, userRedux]);

  return (
    <S.Container>
        <GS.TitleBox variant="h2">Login</GS.TitleBox>
        <S.Form onSubmit={handleSubmit(handleForm)}>
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
          <S.ButtonBox>
            <S.Login type="submit" color="primary" variant="contained">
              Login
            </S.Login>
          </S.ButtonBox>
        </S.Form>
    </S.Container>
  );
};

export default Login;
