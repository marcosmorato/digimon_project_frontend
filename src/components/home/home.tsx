import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../utils/yup";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const HomeBox: React.FC = () => {
  const userRedux = useSelector(
    (state: RootState) => state.user.loggedUser.user.name
  );

  return (
    <S.Container>
      <h1>HomeBox...</h1>
      {userRedux === "" ? <div>teste</div> : <div>funfou</div>}
      <div>${userRedux}</div>
    </S.Container>
  );
};

export default HomeBox;
