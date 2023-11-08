import React from "react";
import RegisterBox from "../../components/register";
import LoginBox from "../../components/login";
import * as S from "./styles";
import HeaderBox from "../../components/header";

const AccountPage: React.FC = () => {
  return (
    <S.Container>
      <HeaderBox/>
      <S.SignContainer>
        <LoginBox/>
        <RegisterBox/>
      </S.SignContainer>
    </S.Container>
  );
};

export default AccountPage;
