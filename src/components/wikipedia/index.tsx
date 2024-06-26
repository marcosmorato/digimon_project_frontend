import React, { useState } from "react";
import * as S from "./styles";
import * as GS from "../../utils/globalStyles/styles";
import {
  wikipediaModalThunk,
} from "../../store/wikipedia/thunk";
import ModalBox from "../modal/index";
import { IDigimonData, IDigimonFilter } from "../../utils/interfaces/digimons";

interface IWikipedia {
  showWikipedia: boolean;
  digimonsName: IDigimonData[] | [];
  userToken: string;
  userFavorite: string[] | [];
}

const Wikipedia: React.FC<IWikipedia> = ({
  showWikipedia,
  digimonsName,
  userToken,
  userFavorite,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [digimonInfo, setDigimonInfo] = useState<IDigimonFilter | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 20;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = digimonsName?.slice(startIndex, endIndex);

  const handleOpen = async (name: string) => {
    try {
      await wikipediaModalThunk(name, userToken, setShowModal, setDigimonInfo);
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <GS.ContainerCenter>
      <GS.TitleBox variant="h3">Wikipedia</GS.TitleBox>
      <S.PaginationContainer>
        <S.NameContainer>
          {itemsToShow.length !== 0 && digimonsName[0].name !== ""? itemsToShow.map((el) => (
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
          )) : <S.Loading></S.Loading>}
        </S.NameContainer>
        {itemsToShow.length !== 0 && 
          <S.StackUi spacing={2}>
            <S.PaginationUi
              count={Math.ceil(digimonsName.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              boundaryCount={1}
              siblingCount={0}
            />
          </S.StackUi>
        }
        {digimonInfo &&
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
            name={digimonInfo.name as string}
            xAntibody={digimonInfo.xAntibody}
            fields={digimonInfo.fields || []}
            levels={digimonInfo.levels || []}
            releaseDate={digimonInfo.releaseDate}
            types={digimonInfo.types || []}
            attributes={digimonInfo.attributes || []}
            descriptions={digimonInfo.descriptions || []}
            priorEvolutions={digimonInfo.priorEvolutions || []}
            nextEvolutions={digimonInfo.nextEvolutions || []}
            userFavorite={userFavorite}
            userToken={userToken}
            digimonId={digimonInfo._id}
          />
        ) : (
          ""
        )}
      </S.PaginationContainer>
    </GS.ContainerCenter>
  );
};

export default Wikipedia;
