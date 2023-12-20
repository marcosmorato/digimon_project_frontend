import React from "react";
import RegisterBox from "../../components/register";
import LoginBox from "../../components/login";
import * as S from "./styles";
import * as GS from "../../utils/globalStyles/styles";
import HeaderBox from "../../components/header";

const Account: React.FC = () => {
  return (
    <GS.ContainerPage>
      <HeaderBox/>
      <S.SignContainer>
        <LoginBox />
        <S.Hr></S.Hr>
        <RegisterBox />
      </S.SignContainer>
    </GS.ContainerPage>
  );
};

export default Account;
