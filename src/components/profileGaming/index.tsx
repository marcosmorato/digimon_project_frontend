import React, { useEffect, useState } from "react";
import * as S from "./styles";

const Profile: React.FC<{nickname: string}> = ({nickname}) => {

  return (
    <S.ProfileContainer>
        <S.Nickname variant="h5">{nickname}</S.Nickname>
        <S.ExpContainer>
          <S.LevelContainer>
            <S.LevelTitle variant="h6">Level</S.LevelTitle>
            <S.LevelInfo variant="subtitle1">1</S.LevelInfo>
            <S.LevelTitle variant="h6">Exp required for next level</S.LevelTitle>
            <S.LevelInfo variant="subtitle2">99999999999999</S.LevelInfo>
          </S.LevelContainer>
        </S.ExpContainer>
    </S.ProfileContainer>
  );
};

export default Profile;
