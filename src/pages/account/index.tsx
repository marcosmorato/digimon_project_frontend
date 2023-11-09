import React from "react";
import RegisterBox from "../../components/register";
import Login from "../../components/login";
import * as S from "./styles";
import HeaderBox from "../../components/header";

const AccountPage: React.FC = () => {
  return (
    <S.Container>
      <HeaderBox/>
      <S.SignContainer>
        <Login/>
        <S.Hr></S.Hr>
        <RegisterBox/>
      </S.SignContainer>
    </S.Container>
  );
};

export default AccountPage;
