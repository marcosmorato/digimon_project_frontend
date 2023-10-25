import React, { useState } from "react";
import CustomSelect from "../select";
import * as S from "./styles";
import { updateFavoriteThunk } from "../../store/user/thunk";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";

interface IModalBox {
  digimonId: string;
  open: boolean;
  name: string;
  handleClose: () => void;
  handleOpen: (name: string) => void;
  image: string;
  xAntibody: boolean;
  levels: string[] | [];
  releaseDate: string;
  types: string[] | [];
  attributes: string[] | [];
  descriptions?:
    | {
        origin: string;
        language: string;
        description: string;
      }[]
    | [];
  priorEvolutions?:
    | {
        digimon: string;
        condition: string;
        image: string;
      }[]
    | [];
  nextEvolutions?:
    | {
        digimon: string;
        condition: string;
        image: string;
      }[]
    | [];
  userFavorite: string[] | [];
  userToken: string;
}

const ModalBox: React.FC<IModalBox> = ({
  digimonId,
  open,
  handleClose,
  handleOpen,
  image,
  name,
  xAntibody,
  levels,
  releaseDate,
  types,
  attributes,
  descriptions,
  priorEvolutions,
  nextEvolutions,
  userFavorite,
  userToken,
}) => {
  const [languageShow, setLanguageShow] = useState(true);
  descriptions?.sort((a, b) => (a.language === "en_us" ? -1 : 1));
  const [selectedOption, setSelectedOption] = useState<string>("");
  const isMobile = window.innerWidth <= 426;

  const optionsPriorEvolutions = priorEvolutions?.map((el) => {
    return { label: el.digimon, value: el.digimon };
  });

  const optionsNextEvolutions = nextEvolutions?.map((el) => {
    return { label: el.digimon, value: el.digimon };
  });

  const handleSelectChange = (newValue: string) => {
    setSelectedOption(newValue);
    handleOpen(newValue);
  };

  const verifyFavorite = () => {
    if (digimonId !== null && typeof digimonId === "string") {
      if (userFavorite.includes(digimonId as never)) {
        return true;
      }
    }
    return false;
  };

  const dispatch = useDispatch<AppDispatch>();

  const changeFavorite = async () => {
    try {
      // Chame a função de atualização de favoritos usando 'await'
      await dispatch(updateFavoriteThunk(digimonId, userToken)); // Use 'dispatch' para chamar a ação assíncrona

      // Trate o sucesso aqui, se necessário
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  };

  return (
    <S.ModalInfo open={open} onClose={handleClose}>
      <S.PaperInfo>
        <S.Name variant="h2">{name}</S.Name>

        <S.InfoContainer>
          {isMobile ? (
            <>
              <S.ImageContainer>
                <S.Image
                  digimonImage={image
                    .replace(/_/g, " ")
                    .replace(/ /g, "_")
                    .replace(/\(/g, "%28")
                    .replace(/\)/g, "%29")}
                ></S.Image>
                {verifyFavorite() ? (
                  <S.FavoriteIconMui
                    onClick={() => changeFavorite()}
                  ></S.FavoriteIconMui>
                ) : (
                  <S.FavoriteBorderIconMui
                    onClick={() => changeFavorite()}
                  ></S.FavoriteBorderIconMui>
                )}
              </S.ImageContainer>
              <S.TextContainerMobile>
                <S.TextContainerLeft>
                  <S.Info variant="overline">Levels:</S.Info>
                  <S.Text variant="overline">{levels.join(", ")}</S.Text>
                </S.TextContainerLeft>
                <S.TextContainerRight>
                  <S.Info variant="overline">X-Antibody:</S.Info>
                  <S.Text variant="overline">
                    {xAntibody ? "Infectado" : "Não contém"}
                  </S.Text>
                </S.TextContainerRight>
              </S.TextContainerMobile>
              <S.TextContainerMobile>
                <S.TextContainerLeft>
                  <S.Info variant="overline">Tipo:</S.Info>
                  <S.Text variant="overline">{types.join(", ")}</S.Text>
                </S.TextContainerLeft>
                <S.TextContainerRight>
                  <S.Info variant="overline">Anunciado:</S.Info>
                  <S.Text variant="overline">{releaseDate}</S.Text>
                </S.TextContainerRight>
              </S.TextContainerMobile>
              <S.TextContainerMobile>
                <S.TextContainerLeft>
                  <S.Info variant="overline">Atributos:</S.Info>
                  <S.Text variant="overline">
                    {attributes.join(", ")
                      ? attributes.join(", ")
                      : "Indefinido"}
                  </S.Text>
                </S.TextContainerLeft>
                <S.TextContainerRight>
                  <S.Info variant="overline">Tipo:</S.Info>
                  <S.Text variant="overline">{types.join(", ")}</S.Text>
                </S.TextContainerRight>
              </S.TextContainerMobile>
              <S.SelectContainerMobile>
                <S.TextContainerLeft>
                  <S.Info variant="overline">Pré-Digievolução:</S.Info>
                  {optionsPriorEvolutions ? (
                    <CustomSelect
                      label="Selecione para voltar!"
                      options={optionsPriorEvolutions}
                      onChange={handleSelectChange}
                      selectedValue={selectedOption}
                      modalVersion={""}
                    />
                  ) : (
                    <div>teste</div>
                  )}
                </S.TextContainerLeft>
                <S.TextContainerRight>
                  <S.Info variant="overline">Pós-Digievolução:</S.Info>
                  {optionsNextEvolutions ? (
                    <CustomSelect
                      label="Selecione para avançar!"
                      options={optionsNextEvolutions}
                      onChange={handleSelectChange}
                      selectedValue={selectedOption}
                      modalVersion={""}
                    />
                  ) : (
                    <div>teste</div>
                  )}
                </S.TextContainerRight>
              </S.SelectContainerMobile>
            </>
          ) : (
            <>
              <S.DescriptionsContainer>
                <S.TextContainerLeft>
                  <S.Info variant="overline">Levels:</S.Info>
                  <S.Text variant="overline">{levels.join(", ")}</S.Text>
                </S.TextContainerLeft>
                <S.TextContainerLeft>
                  <S.Info variant="overline">Tipo:</S.Info>
                  <S.Text variant="overline">{types.join(", ")}</S.Text>
                </S.TextContainerLeft>
                <S.TextContainerLeft>
                  <S.Info variant="overline">Atributos:</S.Info>
                  <S.Text variant="overline">
                    {attributes.join(", ")
                      ? attributes.join(", ")
                      : "Indefinido"}
                  </S.Text>
                </S.TextContainerLeft>
                <S.TextContainerLeft>
                  <S.Info variant="overline">Pré-Digievolução:</S.Info>
                  {optionsPriorEvolutions ? (
                    <CustomSelect
                      label="Selecione para voltar!"
                      options={optionsPriorEvolutions}
                      onChange={handleSelectChange}
                      selectedValue={selectedOption}
                      modalVersion={""}
                    />
                  ) : (
                    <div>teste</div>
                  )}
                </S.TextContainerLeft>
              </S.DescriptionsContainer>
              <S.ImageContainer>
                <S.Image
                  digimonImage={image
                    .replace(/_/g, " ")
                    .replace(/ /g, "_")
                    .replace(/\(/g, "%28")
                    .replace(/\)/g, "%29")}
                ></S.Image>
                {verifyFavorite() ? (
                  <S.FavoriteIconMui
                    onClick={() => changeFavorite()}
                  ></S.FavoriteIconMui>
                ) : (
                  <S.FavoriteBorderIconMui
                    onClick={() => changeFavorite()}
                  ></S.FavoriteBorderIconMui>
                )}
              </S.ImageContainer>
              <S.DescriptionsContainer>
                <S.TextContainerRight>
                  <S.Info variant="overline">X-Antibody:</S.Info>
                  <S.Text variant="overline">
                    {xAntibody ? "Infectado" : "Não contém"}
                  </S.Text>
                </S.TextContainerRight>
                <S.TextContainerRight>
                  <S.Info variant="overline">Tipo:</S.Info>
                  <S.Text variant="overline">{types.join(", ")}</S.Text>
                </S.TextContainerRight>
                <S.TextContainerRight>
                  <S.Info variant="overline">Ano de Lançamento:</S.Info>
                  <S.Text variant="overline">{releaseDate}</S.Text>
                </S.TextContainerRight>
                <S.TextContainerRight>
                  <S.Info variant="overline">Pós-Digievolução:</S.Info>
                  {optionsNextEvolutions ? (
                    <CustomSelect
                      label="Selecione para avançar!"
                      options={optionsNextEvolutions}
                      onChange={handleSelectChange}
                      selectedValue={selectedOption}
                      modalVersion={""}
                    />
                  ) : (
                    <div>teste</div>
                  )}
                </S.TextContainerRight>
              </S.DescriptionsContainer>
            </>
          )}
        </S.InfoContainer>
      </S.PaperInfo>
    </S.ModalInfo>
  );
};

export default ModalBox;

{
  /* <S.ShowInfo onClick={handleClose} color="primary" variant="contained">
            FECHAR MODAL
          </S.ShowInfo> */
}
