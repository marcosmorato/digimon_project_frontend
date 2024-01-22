import React, { useEffect, useState } from "react";
import * as S from "./styles";

const News: React.FC = () => {

  return (
    <S.ContainerNew>
        <S.Title variant="h3">News</S.Title>
        <S.New>
          <S.DateNew variant="h4">December 20, 2023</S.DateNew>
          <hr></hr>
          <S.TitleNew variant="h5">Start of the Digimon game project</S.TitleNew>
          <S.DescriptionNew variant="subtitle1">At the end of 2023, I will start the Digimon gaming project made by a fan for the fans.<br></br>* Start homepage<br></br>* Start news in homepage</S.DescriptionNew>
        </S.New>
    </S.ContainerNew>
  );
};

export default News;
