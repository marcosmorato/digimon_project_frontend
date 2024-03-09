import React, { useEffect, useState } from "react";
import HeaderBox from "../../components/header";
import NavBox from "../../components/nav";
import FavoriteBox from "../../components/favorite";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { IDigimonFavorite } from "../../utils/interfaces/digimons/index";
import * as GS from "../../utils/globalStyles/styles";
import { api } from "../../services/api";

const Favorite: React.FC = () => {
  const [showFavorite, setShowFavorite] = useState(false);
  const [digimonFavorite, setDigimonFavorite] = useState<
  IDigimonFavorite[] | []
  >([]);
  const user = useSelector((state: RootState) => state.user.loggedUser.user);

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
            
            console.log("response received", response)

        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, [user.token, digimonFavorite]);

  return (
    <GS.ContainerPage>
      <HeaderBox></HeaderBox>
      <GS.ContainerBody>
        <NavBox></NavBox>
        <FavoriteBox
          showFavorite={showFavorite}
          setShowFavorite={setShowFavorite}
          digimonsData={digimonFavorite || []}
          userToken={user.token}
        ></FavoriteBox>
      </GS.ContainerBody>
    </GS.ContainerPage>
  );
};

export default Favorite;
