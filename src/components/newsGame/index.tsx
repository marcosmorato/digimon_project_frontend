import React, { useEffect, useState } from "react";
import * as S from "./styles";

const News: React.FC = () => {

  return (
    <S.ContainerNew>
        <S.Title>News</S.Title>
        <S.New>
          <S.DateNew >December 20, 2023</S.DateNew>
          <hr></hr>
          <S.TitleNew>Start of the Digimon game project</S.TitleNew>
        </S.New>
    </S.ContainerNew>
  );
};

export default News;
