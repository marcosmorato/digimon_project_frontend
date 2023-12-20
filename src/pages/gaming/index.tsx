import React from "react";
import NavGame from "../../components/navGame";
import HeaderGame from "../../components/headerGame";
import HomeGaming from "../../components/homeGaming"
import { AppDispatch, RootState } from "../../store/store";
import { useSelector } from "react-redux";

import * as S from "./styles";
import * as GS from "../../utils/globalStyles/styles";

const Gaming: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.loggedUser.user);
  console.log(user)
  return (
    <GS.GamingContainer>
      <S.HeaderContainer>
        <HeaderGame nickname={user.nickname} />
      </S.HeaderContainer>
      <S.Body>
        <NavGame></NavGame>
        <HomeGaming></HomeGaming>
      </S.Body>
    </GS.GamingContainer>
  );
};

export default Gaming;
