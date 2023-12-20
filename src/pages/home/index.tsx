import React from "react";
import HeaderBox from "../../components/header";
import NavBox from "../../components/nav";
import HomeBox from "../../components/home";
import Register from "../../components/register";
import * as GS from "../../utils/globalStyles/styles";

const Home: React.FC = () => {
  return (
    <GS.ContainerPage>
      <HeaderBox></HeaderBox>
      <GS.ContainerBody>
        <NavBox></NavBox>
        <HomeBox></HomeBox>
      </GS.ContainerBody>
    </GS.ContainerPage>
  );
};

export default Home;
