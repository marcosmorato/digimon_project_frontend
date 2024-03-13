import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as S from "./styles";
import * as GS from "../../utils/globalStyles/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../utils/yup/index";
import { loginUserThunk } from "../../store/user/thunk";
import { resetUsers } from "../../store/user/actions";
import { AppDispatch, RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [LoginFailed, setLoginFailed] = useState<any>({message: "", failLogin: false});
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });
  
  const userRedux = useSelector((state: RootState) => state.user);
  const [isLogged, setIsLogged] = useState<boolean>(userRedux.isLogged)

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleForm = async (formData: FormData) => {
    try {
      const response = await dispatch(loginUserThunk(formData));
      navigate("/home");
      console.log('Success Login', response)
      return
    } catch (error) {
      setLoginFailed({message: "E-mail or password invalid", failLogin: true})
      setShowModal(true)
      console.error('Erro ao fazer login:', error);
    }
};
  
  const handleClose = () => {
    setShowModal(false);
  };
  
  const resetLogin = () => {
    setIsLogged(false)
    dispatch(resetUsers())
  }

  return (
    <S.Container>
        <GS.AccountTitle variant="h2">Login</GS.AccountTitle>
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
                  error={!!errors.email || LoginFailed.failLogin}
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
                  error={!!errors.password || LoginFailed.failLogin}
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
        <S.ModalUi open={showModal} onClose={handleClose}>
          <S.PaperInfo>
            <S.FeedbackIconMui></S.FeedbackIconMui>
            <S.Label>Invalid email or password, check the values ​​entered.</S.Label>
          </S.PaperInfo>
        </S.ModalUi>
        <S.ModalUi open={isLogged} onClose={handleClose}>
          <S.PaperInfo>
            <S.FeedbackIconMui></S.FeedbackIconMui>
            <S.Label>You are already logged in, would you like to log in again?</S.Label>
            <S.Login onClick={() => resetLogin()}>Deslogar</S.Login>
            <S.Login onClick={() => navigate('/home')}>Return</S.Login>
          </S.PaperInfo>
        </S.ModalUi>
    </S.Container>
  );
};

export default Login;
