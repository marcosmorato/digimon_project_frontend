import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as S from "./styles";
import * as GS from "../../utils/globalStyles/styles";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { updateFavoriteThunk } from "../../store/user/thunk";
import {
  IDigimonData,
  IDigimonFilter,
  IDigimonFavorite,
} from "../../utils/interfaces/digimons";

import DetailScreen from "../detailFavorite";

interface IFavorite {
  showFavorite: boolean;
  setShowFavorite: (newValue: boolean) => void;
  digimonsData: IDigimonFavorite[] | [];
}

const Favorite: React.FC<IFavorite> = ({
  showFavorite,
  setShowFavorite,
  digimonsData,
}) => {

  const [currentPage, setCurrentPage] = useState<number>(1);


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
  
  const itemsPerPage: number = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = digimonsData?.slice(startIndex, endIndex);
  
  const itemsPerPageMb: number = 3;
  const startIndexMb = (currentPage - 1) * itemsPerPageMb;
  const endIndexMB = startIndexMb + itemsPerPageMb;
  const itemsToShowMb = digimonsData?.slice(startIndexMb, endIndexMB);
  const isMobile = window.innerWidth <= 426;

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
      {isMobile ? 
      (<>
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
                  <S.ContainerFavorite>
                    {itemsToShowMb.map((el) => (
                          <S.CardMui key={el.name} onClick={() => handleMaximizeClick(el)}>
                            <S.CardMediaMui
                              image={el.images.length > 0 ? el.images[0].href : ""}
                            />
                            <S.CardContentMui>
                              <GS.DescriptionText variant="overline">
                                {el.name}
                              </GS.DescriptionText>
                            </S.CardContentMui>
                          </S.CardMui>
                        ))}
                  </S.ContainerFavorite>
                  <S.StackUi spacing={2}>
                      <S.PaginationUi
                        count={Math.ceil(digimonsData.length / itemsPerPageMb)}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                      />
                    </S.StackUi>
                  </>)}
              </S.PaginationContainer>
            </>
          )}
      </>) : (<>
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
                    <S.ContainerFavorite>
                      {itemsToShow.map((el) => (
                        <S.CardMui key={el.name} onClick={() => handleMaximizeClick(el)}>
                          <S.CardMediaMui
                            image={el.images.length > 0 ? el.images[0].href : ""}
                          />
                          <S.CardContentMui>
                            <GS.DescriptionText gutterBottom variant="overline">
                              {el.name}
                            </GS.DescriptionText>
                          </S.CardContentMui>
                        </S.CardMui>
                      ))}
                    </S.ContainerFavorite>
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
        </>)
        }
    </GS.ContainerExtra>
  );
};

export default Favorite;
