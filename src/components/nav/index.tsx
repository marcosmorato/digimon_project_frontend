import React from "react";
import * as S from "./styles";
import * as GS from "../globalStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const NavBox: React.FC = () => {
  const userRedux = useSelector(
    (state: RootState) => state.user.loggedUser.user
  );
  const navigate = useNavigate();

  return (
    <GS.ContainerSide>
      <GS.TitleBox variant="h3">Paginas</GS.TitleBox>
      <S.ListMui aria-labelledby="nested-list-subheader">
        <S.ListItemButtonMui onClick={() => navigate("/home")}>
          <S.ListItemIconMui>
            <S.ListItemTextMui>Home</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <S.ListItemButtonMui onClick={() => navigate("/register")}>
          <S.ListItemIconMui>
            <S.ListItemTextMui>Register</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <S.ListItemButtonMui onClick={() => navigate("/wikipedia")}>
          <S.ListItemIconMui>
            <S.ListItemTextMui>Wikipedia</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <S.ListItemButtonMui onClick={() => navigate("/favorite")}>
          <S.ListItemIconMui>
            <S.ListItemTextMui>Favorites</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
      </S.ListMui>
    </GS.ContainerSide>
  );
};

export default NavBox;
