import React from "react";
import HeaderBox from "../../components/header";
import HomeBox from "../../components/home/home";
import NavBox from "../../components/nav";
import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <S.Container>
      <HeaderBox></HeaderBox>
      <S.ContainerBody>
        <NavBox></NavBox>
        <HomeBox></HomeBox>
        <NavBox></NavBox>
      </S.ContainerBody>
    </S.Container>
  );
};

export default Home;
