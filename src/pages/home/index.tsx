import React from "react";
import HeaderBox from "../../components/header";
import NavBox from "../../components/nav";
import HomeBox from "../../components/home";
import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <S.Container>
      <HeaderBox></HeaderBox>
      <S.ContainerBody>
        <NavBox></NavBox>
        <HomeBox></HomeBox>
      </S.ContainerBody>
    </S.Container>
  );
};

export default Home;
