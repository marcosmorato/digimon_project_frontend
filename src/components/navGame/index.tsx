import React from "react";
import * as S from "./styles";
import * as GS from "../../utils/globalStyles/styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const NavGame: React.FC = () => {
  const userRedux = useSelector(
    (state: RootState) => state.user.loggedUser.user
  );
  const navigate = useNavigate();

  return (
    <GS.ContainerNavGame>
      <S.ListMui aria-labelledby="nested-list-subheader">
        <S.ListItemButtonMui onClick={() => navigate("/gaming/home")}>
          <S.ListItemIconMui>
            <S.HomeIcon />
            <S.ListItemTextMui>Home</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <S.ListItemButtonMui onClick={() => navigate("/gaming/inventory")}>
          <S.ListItemIconMui>
            <S.BagIcon />
            <S.ListItemTextMui>Inventory</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <hr></hr>
        <S.ListItemButtonMui onClick={() => navigate("/gaming/digistorage")}>
          <S.ListItemIconMui>
            <S.DigiStorageIcon />
            <S.ListItemTextMui>Digistorage</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <S.ListItemButtonMui onClick={() => navigate("/gaming/digistorage")}>
          <S.ListItemIconMui>
            <S.IncubatorIcon />
            <S.ListItemTextMui>Incubator</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <S.ListItemButtonMui onClick={() => navigate("/gaming/digicode")}>
          <S.ListItemIconMui>
            <S.DigicodeIcon />
            <S.ListItemTextMui>Digicode</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <hr></hr>
        <S.ListItemButtonMui onClick={() => navigate("/gaming/exploration")}>
          <S.ListItemIconMui>
            <S.ExplorationIcon />
            <S.ListItemTextMui>Exploration</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <S.ListItemButtonMui onClick={() => navigate("/gaming/training")}>
          <S.ListItemIconMui>
            <S.TrainingIcon />
            <S.ListItemTextMui>Training</S.ListItemTextMui>
          </S.ListItemIconMui>
        </S.ListItemButtonMui>
        <hr></hr>
        <S.Footer>
            <S.FooterText>made by fan, for the fans <S.heartIcon />.</S.FooterText>
        </S.Footer>
      </S.ListMui>
    </GS.ContainerNavGame>
  );
};

export default NavGame;
