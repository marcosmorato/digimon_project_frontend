import React from "react";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const NavBox: React.FC = () => {
  const userRedux = useSelector(
    (state: RootState) => state.user.loggedUser.user.name
  );

  return (
    <S.Container>
      <h1>NavBox...</h1>
      {userRedux === "" ? <div>teste</div> : <div>funfou</div>}
      <div>${userRedux}</div>
    </S.Container>
  );
};

export default NavBox;
