import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as S from "./styles";
import * as GS from "../globalStyles";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { updateFavoriteThunk } from "../../store/user/thunk";
import {
  IDigimonData,
  IDigimonFilter,
  IDigimonFavorite,
} from "../../utils/interfaces/digimons";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DetailScreen from "../detailFavorite";

interface IFavorite {
  showFavorite: boolean;
  setShowFavorite: (newValue: boolean) => void;
  digimonsData: IDigimonFavorite[] | [];
}

const FavoriteBox: React.FC<IFavorite> = ({
  showFavorite,
  setShowFavorite,
  digimonsData,
}) => {
  const userRedux = useSelector(
    (state: RootState) => state.user.loggedUser.user
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 6;

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<IDigimonFavorite | null>(
    null
  );

  const handleMaximizeClick = (data: IDigimonFavorite) => {
    setSelectedDetail(data);
    setIsDetailOpen(true);
  };

  const handleDetailClose = () => {
    setIsDetailOpen(false);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = digimonsData?.slice(startIndex, endIndex);

  const dispatch = useDispatch<AppDispatch>();

  const handleOpen = async (name: string) => {
    /* try {
      await wikipediaModalThunk(name, user.token, setShowModal, setDigimonInfo);
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    } */
  };

  return (
    <GS.ContainerExtra>
      {isDetailOpen && selectedDetail ? (
        <DetailScreen
          selectedDetail={selectedDetail}
          isDetailOpen={isDetailOpen}
          onClose={handleDetailClose}
        />
      ) : (
        <>
          <GS.TitleBox variant="h3">Favorites</GS.TitleBox>
          <S.PaginationContainer>
            {!showFavorite && digimonsData.length > 0 ? (
              <GS.TitleBox>Carregando...</GS.TitleBox>
            ) : (
              <>
                <S.ContainFavorite>
                  {itemsToShow.map((el) => (
                    <S.CardMui key={el.name}>
                      <S.CardMediaMui
                        image={el.images.length > 0 ? el.images[0].href : ""}
                      />
                      <S.CardContentMui>
                        <GS.TitleBox gutterBottom variant="subtitle1">
                          {el.name}
                        </GS.TitleBox>
                        <S.MaximizeIcon
                          onClick={() => handleMaximizeClick(el)}
                        ></S.MaximizeIcon>
                      </S.CardContentMui>
                    </S.CardMui>
                  ))}
                </S.ContainFavorite>
                <S.StackUi spacing={2}>
                  <S.PaginationUi
                    count={Math.ceil(digimonsData.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                  />
                </S.StackUi>
              </>
            )}
          </S.PaginationContainer>
        </>
      )}
    </GS.ContainerExtra>
  );
};

export default FavoriteBox;

{
  /*  <S.NameContainer>
              {itemsToShow.map((el) => (
                <S.ShowInfo
                  onClick={() => {
                    if (el.name) {
                      handleOpen(el.name);
                    }
                  }}
                  color="primary"
                  variant="contained"
                  key={el.name}
                >
                  {el.name}
                </S.ShowInfo>
              ))}
            </S.NameContainer>
            <S.StackUi spacing={2}>
              <S.PaginationUi
                count={Math.ceil(digimonsData.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
              />
            </S.StackUi> */
}

{
  /* {digimonInfo &&
        digimonInfo !== null &&
        digimonInfo.images &&
        digimonInfo.name !== null &&
        digimonInfo.images.length > 0 &&
        typeof digimonInfo.name === "string" ? (
          <ModalBox
            handleOpen={handleOpen}
            open={showModal}
            handleClose={handleClose}
            image={digimonInfo.images[0].href}
            name={digimonInfo.name as string} // Definir o tipo como string
            xAntibody={digimonInfo.xAntibody}
            levels={digimonInfo.levels || []}
            releaseDate={digimonInfo.releaseDate}
            types={digimonInfo.types || []}
            attributes={digimonInfo.attributes || []}
            descriptions={digimonInfo.descriptions || []}
            priorEvolutions={digimonInfo.priorEvolutions || []}
            nextEvolutions={digimonInfo.nextEvolutions || []}
            userFavorite={user.favorite}
            userToken={user.token}
          />
        ) : (
          ""
        )} */
}
