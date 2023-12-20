import React, { useEffect, useState } from "react";
import * as S from "./styles";

const Profile: React.FC<{nickname: string}> = ({nickname}) => {

  return (
    <S.ProfileContainer>
        <S.Nickname>{nickname}</S.Nickname>
    </S.ProfileContainer>
  );
};

export default Profile;
