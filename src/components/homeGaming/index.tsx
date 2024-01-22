import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import * as GS from "../../utils/globalStyles/styles";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import Profile from '../profileGaming'
import News from '../newsGame'
import Setting from "../settingGaming"
import TeamFormation from "../teamFormation"
const HomeGaming: React.FC = () => {
  const [showControl, setShowControl] = useState<string>("profile");
  const userRedux = useSelector(
    (state: RootState) => state.user.loggedUser.user
  );

  
  return (
    <S.HomeContainer>
        <S.HomeNav>
            <S.ContainerIcon onClick={() => setShowControl("profile")}><S.ProfileIcon /></S.ContainerIcon>
            <S.ContainerIcon onClick={() => setShowControl("teamFormation")}><S.TeamFormationIcon /></S.ContainerIcon>
            <S.ContainerIcon onClick={() => setShowControl("news")}><S.NewsIcon /></S.ContainerIcon>
            <S.ContainerIcon onClick={() => setShowControl("settings")}><S.SettingIcon /></S.ContainerIcon>
        </S.HomeNav>
        {showControl === "profile" && <Profile nickname={userRedux.nickname} />}
        {showControl === "news" && <News />}
        {showControl === "settings" && <Setting />}
        {showControl === "teamFormation" && <TeamFormation />}

    </S.HomeContainer>
  );
};

export default HomeGaming;
