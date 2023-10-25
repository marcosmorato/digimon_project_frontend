import React from "react";
import RegisterBox from "../../components/register";
import LoginBox from "../../components/login";
import * as S from "./styles";
import HeaderBox from "../../components/header";

const Register: React.FC = () => {
  return (
    <S.Container>
      <HeaderBox></HeaderBox>
      <S.SignContainer>
        <LoginBox></LoginBox>
        <RegisterBox></RegisterBox>
      </S.SignContainer>
    </S.Container>
  );
};

export default Register;
