import React, { useEffect, useState } from "react";
import HeaderBox from "../../components/header";
import HomeBox from "../../components/home";
import NavBox from "../../components/nav";
import FavoriteBox from "../../components/favorite";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IDigimonFavorite } from "../../utils/interfaces/digimons/index";
import * as S from "./styles";
import { api } from "../../services/api";

const Favorite: React.FC = () => {
  const [showFavorite, setShowFavorite] = useState(false);

  const [digimonFavorite, setDigimonFavorite] = useState<
    IDigimonFavorite[] | []
  >([]);

  const digimonsName = useSelector((state: RootState) => state.wikipedia);
  /* const [digimonFilters, setDigimonFilters] =
    useState<IDigimonReducer>(digimonsName); */

  const user = useSelector((state: RootState) => state.user.loggedUser.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      if (user.token !== "") {
        try {
          const headers = {
            "Content-Type": "application/json",
            "x-access-token": user.token,
          };

          const response = await api
            .get(`/user/favorite`, {
              headers,
            })
            .then((res) => {
              setDigimonFavorite(res.data);

              if (res.data.lenght !== 0) {
                setShowFavorite(true);
              }
            })
            .catch((error) => {
              console.log("erro ao fazer a requisição");
            });

          // Faça algo com a resposta aqui, se necessário
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, [user.token]);

  return (
    <S.Container>
      <HeaderBox></HeaderBox>
      <S.ContainerBody>
        <NavBox></NavBox>
        <FavoriteBox
          showFavorite={showFavorite}
          setShowFavorite={setShowFavorite}
          digimonsData={digimonFavorite || []}
        ></FavoriteBox>
      </S.ContainerBody>
    </S.Container>
  );
};

export default Favorite;
