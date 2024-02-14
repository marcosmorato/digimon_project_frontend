import React, { useState } from "react";
import CustomSelect from "../select";
import * as S from "./styles";
import { updateFavoriteThunk } from "../../store/user/thunk";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";

export interface IFields {
  field: string;
  image: string;
}

interface IModal {
  digimonId: string;
  open: boolean;
  name: string;
  handleClose: () => void;
  handleOpen: (name: string) => void;
  image: string;
  xAntibody: boolean;
  fields: IFields[] | [];
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

const Modal: React.FC<IModal> = ({
  digimonId,
  open,
  handleClose,
  handleOpen,
  image,
  name,
  xAntibody,
  fields,
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
  const [languageDescription, setLanguageDescription] = useState('jap')

  const optionsPriorEvolutions = priorEvolutions?.map((el) => {
    return { label: el.digimon, value: el.digimon };
  });

  const optionsNextEvolutions = nextEvolutions?.map((el) => {
    return { label: el.digimon, value: el.digimon };
  });

  const handleSelectChange = (newValue: string) => {
    setSelectedOption("");
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
      await dispatch(updateFavoriteThunk(digimonId, userToken));
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  };
  
  const urlImage = image
  .replace(/_/g, " ")
  .replace(/ /g, "_")
  .replace(/\(/g, "%28")
  .replace(/\)/g, "%29")
  
  const urlFields = fields.map((el) => el.image.replace(/_/g, " ")
  .replace(/ /g, "%20")
  .replace(/\(/g, "%28")
  .replace(/\)/g, "%29"))

  return (
    <S.ModalUi open={open} onClose={handleClose}>
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
              <S.detailsMobile>
                <S.infoContainerMobile>
                  <S.Text variant="overline">Type:</S.Text>
                  <S.Text variant="overline">{types.join(", ")}</S.Text>
                </S.infoContainerMobile>
                <S.infoContainerMobile>
                  <S.Text variant="overline">Level:</S.Text>
                  <S.Text variant="overline">{levels.join(", ")}</S.Text>
                </S.infoContainerMobile>
                <S.infoContainerMobile>
                  <S.Text variant="overline">Attribute:</S.Text>
                  <S.Text variant="overline">
                    {attributes.join(", ")
                      ? attributes.join(", ")
                      : "Undefined"}
                  </S.Text>
                </S.infoContainerMobile>
                <S.infoContainerMobile>
                  <S.Text variant="overline">X-Antibody:</S.Text>
                  <S.Text variant="overline">
                    {xAntibody ? "Infected" : "Not Affected"}
                  </S.Text>
                </S.infoContainerMobile>
                
                <S.infoContainerMobile>
                  <S.Text variant="overline">Release Date:</S.Text>
                  <S.Text variant="overline">{releaseDate}</S.Text>
                </S.infoContainerMobile>

                <S.infoContainerMobile>
                  <S.Text variant="overline">Field:</S.Text>
                    {fields.length > 0 ? 
                      <S.FieldsContainer>
                        {urlFields.map((el, idx) => 
                          <S.FieldImage src={el} alt={fields[idx].field} title={fields[idx].field}></S.FieldImage>
                        )}
                      </S.FieldsContainer> : <S.Text variant="overline">Undefined</S.Text>
                    }
                </S.infoContainerMobile>
                <S.DescriptionContainer>
                    {descriptions ?
                      <>
                      <S.DescriptionNav>
                        <S.ButtonLanguage disabled={languageDescription === 'en_us' ? true : false} onClick={() => setLanguageDescription('en_us')}>EN</S.ButtonLanguage>
                        <S.ButtonLanguage disabled={languageDescription === 'jap' ? true : false} onClick={() => setLanguageDescription('jap')}>JP</S.ButtonLanguage>
                      </S.DescriptionNav>
                      {descriptions.map((el) => 
                        el.language === languageDescription ? <S.DescriptionText>{el.description}</S.DescriptionText> : null
                      )}
                      </>
                    : 
                      <S.Text variant="overline">Undefined</S.Text>
                    }
                </S.DescriptionContainer>
                <S.SelectContainerMobile>
                  <S.TextContainerLeft>
                    <S.Text variant="overline">After-Evolution:</S.Text>
                    {optionsPriorEvolutions ? (
                      <S.SelectContainer>
                        <CustomSelect
                          label="Select Evolution"
                          options={optionsPriorEvolutions}
                          onChange={handleSelectChange}
                          selectedValue={selectedOption}
                          modalVersion={""}
                        />
                      </S.SelectContainer>
                    ) : (
                      <S.Text variant="overline">Undefined</S.Text>
                    )}
                  </S.TextContainerLeft>
                  <S.TextContainerRight>
                    <S.Text variant="overline">Next-Evolution:</S.Text>
                    {optionsNextEvolutions ? (
                      <S.SelectContainer>
                        <CustomSelect
                          label="Select Evolution"
                          options={optionsNextEvolutions}
                          onChange={handleSelectChange}
                          selectedValue={selectedOption}
                          modalVersion={""}
                        />
                      </S.SelectContainer>
                    ) : (
                      <S.Text variant="overline">Undefined</S.Text>
                    )}
                  </S.TextContainerRight>
                </S.SelectContainerMobile>
              </S.detailsMobile>
            </>
          ) : (
            <>
              <S.DescriptionsContainer>
                <S.TextContainerLeft>
                  <S.Info variant="overline">Level:</S.Info>
                  <S.Text variant="overline">{levels.join(", ")}</S.Text>
                </S.TextContainerLeft>
                <S.TextContainerLeft>
                  <S.Info variant="overline">Attribute:</S.Info>
                  <S.Text variant="overline">
                    {attributes.join(", ")
                      ? attributes.join(", ")
                      : "Undefined"}
                  </S.Text>
                </S.TextContainerLeft>
                <S.TextContainerLeft>
                  <S.Info variant="overline">Release Date:</S.Info>
                  <S.Text variant="overline">{releaseDate}</S.Text>
                </S.TextContainerLeft>
                <S.TextContainerLeft>
                  <S.Info variant="overline">After-Evolution:</S.Info>
                  {optionsPriorEvolutions ? (
                    <S.SelectContainer>
                      <CustomSelect
                        label="Select Evolution"
                        options={optionsPriorEvolutions}
                        onChange={handleSelectChange}
                        selectedValue={selectedOption}
                        modalVersion={""}
                      />
                    </S.SelectContainer>
                  ) : (
                    <S.Text variant="overline">Undefined</S.Text>
                  )}
                </S.TextContainerLeft>
              </S.DescriptionsContainer>
              <S.ContainerCenter>
                <S.ImageContainer>
                  <S.Image
                    digimonImage={urlImage}
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
                <S.DescriptionContainer>
                    {descriptions ?
                      <>
                      <S.DescriptionNav>
                        <S.ButtonLanguage disabled={languageDescription === 'en_us' ? true : false} onClick={() => setLanguageDescription('en_us')}>EN</S.ButtonLanguage>
                        <S.ButtonLanguage disabled={languageDescription === 'jap' ? true : false} onClick={() => setLanguageDescription('jap')}>JP</S.ButtonLanguage>
                      </S.DescriptionNav>
                      {descriptions.map((el) => 
                        el.language === languageDescription ? <S.DescriptionText>{el.description}</S.DescriptionText> : null
                      )}
                      </>
                    : 
                      <S.Text variant="overline">Undefined</S.Text>
                    }
                </S.DescriptionContainer>
              </S.ContainerCenter>
              <S.DescriptionsContainer>
                <S.TextContainerRight>
                  <S.Info variant="overline">Type:</S.Info>
                  <S.Text variant="overline">{types.join(", ")}</S.Text>
                </S.TextContainerRight>
                <S.TextContainerRight>
                  <S.Info variant="overline">X-Antibody:</S.Info>
                  <S.Text variant="overline">
                    {xAntibody ? "Infected" : "Not Affected"}
                  </S.Text>
                </S.TextContainerRight>
                <S.TextContainerRight>
                  <S.Info variant="overline">Field:</S.Info>
                  {fields.length > 0 ? 
                    <S.FieldsContainer>
                      {urlFields.map((el, idx) => 
                        <S.FieldImage src={el} alt={fields[idx].field} title={fields[idx].field}></S.FieldImage>
                      )}
                    </S.FieldsContainer> : <S.Text variant="overline">Undefined</S.Text>}
                </S.TextContainerRight>
                <S.TextContainerRight>
                  <S.Info variant="overline">Next-Digievolution:</S.Info>
                  {optionsNextEvolutions ? (
                    <S.SelectContainer>
                      <CustomSelect
                        label="Selecione para avançar!"
                        options={optionsNextEvolutions}
                        onChange={handleSelectChange}
                        selectedValue={selectedOption}
                        modalVersion={""}
                      />
                    </S.SelectContainer>
                  ) : (
                    <S.Text variant="overline">Undefined</S.Text>
                  )}
                </S.TextContainerRight>
              </S.DescriptionsContainer>
            </>
          )}
        </S.InfoContainer>
      </S.PaperInfo>
    </S.ModalUi>
  );
};

export default Modal;
