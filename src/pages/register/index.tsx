import React from "react";
import RegisterBox from "../../components/register";
import LoginBox from "../../components/login";
import * as S from "./styles";

const Register: React.FC = () => {
  return (
    <S.Container>
      <S.LogoImg></S.LogoImg>
      <S.SignContainer>
        <LoginBox></LoginBox>
        <RegisterBox></RegisterBox>
      </S.SignContainer>
    </S.Container>
  );
};

export default Register;
