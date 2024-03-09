import React from "react";
import * as S from "./styles";
import * as GS from "../../utils/globalStyles/styles";
import { useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname

  return (
    <GS.ContainerSide>
      <GS.TitleBox variant="h3">Pages</GS.TitleBox>
      <S.ListMui aria-labelledby="nested-list-subheader">
        <S.ListItemButtonMui  onClick={() => navigate("/home")} disabled={"/home" === pathname}>
          <S.ListItemIconMui>
            <S.ListItemTextMui>Home</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <S.ListItemButtonMui onClick={() => navigate("/account")}>
          <S.ListItemIconMui>
            <S.ListItemTextMui>Login</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <S.ListItemButtonMui onClick={() => navigate("/account")}>
          <S.ListItemIconMui>
            <S.ListItemTextMui>Cadastro</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <S.ListItemButtonMui onClick={() => navigate("/wikipedia")} disabled={"/wikipedia" === pathname}>
          <S.ListItemIconMui>
            <S.ListItemTextMui>Wikipedia</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <S.ListItemButtonMui onClick={() => navigate("/favorite")} disabled={"/favorite" === pathname}>
          <S.ListItemIconMui>
            <S.ListItemTextMui>Favorites</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        {/* <S.ListItemButtonMui onClick={() => navigate("/gaming/home")}>
          <S.ListItemIconMui>
            <S.ListItemTextMui>Gaming</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui> */}
      </S.ListMui>
    </GS.ContainerSide>
  );
};

export default Nav;
