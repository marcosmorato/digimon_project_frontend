import React from "react";
import * as S from "./styles";

export interface IHeaderGame {
  nickname: string;
}

const HeaderGame: React.FC<IHeaderGame> = ({nickname}) => {
  return (
      <S.HeaderContainer>
        <S.Nickname >{nickname}</S.Nickname>
        <S.AvatarIcon></S.AvatarIcon>
      </S.HeaderContainer>
  );
};

export default HeaderGame;
