import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as S from "./styles";
import * as GS from "../globalStyles";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { updateFavoriteThunk } from "../../store/user/thunk";

const HomeBox: React.FC = () => {
  const userRedux = useSelector(
    (state: RootState) => state.user.loggedUser.user
  );

  return (
    <GS.ContainerExtra>
      <GS.TitleBox variant="h3">Informações</GS.TitleBox>
      <S.ShowInfo
        onClick={() => console.log("hommee")}
        color="primary"
        variant="contained"
        key={"teste"}
      >
        Testando
      </S.ShowInfo>
    </GS.ContainerExtra>
  );
};

export default HomeBox;
