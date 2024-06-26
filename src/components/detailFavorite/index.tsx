import React, {useState} from "react";
import { IDigimonFavorite } from "../../utils/interfaces/digimons";
import { updateFavoriteThunk } from "../../store/user/thunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import * as S from "./styles";
import * as GS from "../../utils/globalStyles/styles";

interface DetailScreenProps {
  onClose: () => void;
  selectedDetail: IDigimonFavorite;
  userToken: string;
}

const DetailScreen: React.FC<DetailScreenProps> = ({
  onClose,
  selectedDetail,
  userToken,
}) => {
  const [languageDescription, setLanguageDescription] = useState('jap')
  const [favorite, setFavorite] = useState<boolean>(true)
  const isMobile = window.innerWidth <= 426;
  
  const dispatch = useDispatch<AppDispatch>();
  
  const changeFavorite = async () => {
    try {
      await dispatch(updateFavoriteThunk(selectedDetail._id, userToken));
      setFavorite(false)
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  };

  const previousEvolutionsName = selectedDetail.priorEvolutions?.map((el) => el.digimon)
  const nextEvolutionsName = selectedDetail.nextEvolutions?.map((el) => el.digimon)
  
  return (
    <S.Container>
      {isMobile ? (
      <>
        <S.ContainerLeft>
            <S.CloseIcon onClick={onClose}>Fechar</S.CloseIcon>
          {favorite ? ( 
            <S.FavoriteIconMui
              onClick={() => changeFavorite()}
            ></S.FavoriteIconMui>
          ) : (
            <S.FavoriteBorderIconMui
              onClick={() => changeFavorite()}
            ></S.FavoriteBorderIconMui>
          )}
          <S.ImageContainer>
            {selectedDetail.images.length !== 0 ? (
              <S.Image
                digimonImage={
                  selectedDetail.images[0].href
                    .replace(/_/g, " ")
                    .replace(/ /g, "_")
                    .replace(/\(/g, "%28")
                    .replace(/\)/g, "%29") as string
                }
                key={selectedDetail.name}
              ></S.Image>
            ) : (
              <></>
            )}
          </S.ImageContainer>
          <S.descriptionBox>
            <S.Name gutterBottom variant="h4">
              {selectedDetail.name}
            </S.Name>
          </S.descriptionBox>
        </S.ContainerLeft>
        <S.ContainerInfoMb>
          <S.descriptionBox>
            <GS.DescriptionText gutterBottom variant="subtitle1">
              Attribute:
            </GS.DescriptionText>
            <GS.DescriptionText gutterBottom variant="h6">
              {selectedDetail.attributes.join(", ")}
            </GS.DescriptionText>
          </S.descriptionBox>
          <S.descriptionBox>
            <GS.DescriptionText gutterBottom variant="subtitle1">
              Release Date:
            </GS.DescriptionText>
            <GS.DescriptionText gutterBottom variant="h6">
                {selectedDetail.releaseDate}
            </GS.DescriptionText>
          </S.descriptionBox>
          <S.descriptionBox>
            <GS.DescriptionText gutterBottom variant="subtitle1">
              X-Antibody:
            </GS.DescriptionText>
            <GS.DescriptionText gutterBottom variant="h6">
              {selectedDetail.xAntibody ? "Infected" : "Not Affected"}
            </GS.DescriptionText>
          </S.descriptionBox>
          <S.descriptionBox>
            <GS.DescriptionText gutterBottom variant="subtitle1">
              Level:
            </GS.DescriptionText>
            <GS.DescriptionText gutterBottom variant="h6">
              {selectedDetail.levels.join(", ")}
            </GS.DescriptionText>
          </S.descriptionBox>
          <S.descriptionBox>
            <S.Description gutterBottom variant="subtitle1">
              Field:
            </S.Description>
            {selectedDetail.fields.length > 0 ? (
              <S.IconContainter>
                {selectedDetail.fields.map((ele) => (
                  <S.Field
                  src={
                    ele.image
                      .replace(/_/g, " ")
                      .replace(/ /g, "%20")
                      .replace(/\(/g, "%28")
                      .replace(/\)/g, "%29") as string
                  }/>
                ))}
              </S.IconContainter>
            ) : (
              <GS.DescriptionText gutterBottom variant="h6">
                Undefined
              </GS.DescriptionText>
            )}
          </S.descriptionBox>
          <S.descriptionBox>
            <GS.DescriptionText gutterBottom variant="subtitle1">
              Type:
            </GS.DescriptionText>
            <GS.DescriptionText gutterBottom variant="h6">
              {selectedDetail.types.join(', ')}
            </GS.DescriptionText>
          </S.descriptionBox>
          <S.DescriptionContainer>
            <GS.DescriptionText gutterBottom variant="subtitle1">
              Description:
            </GS.DescriptionText>
            <S.DescriptionBox>
              {selectedDetail.descriptions ?
              <>
              <S.DescriptionNav>
                <S.ButtonLanguage disabled={languageDescription === 'jap' ? true : false} onClick={() => setLanguageDescription('jap')}>JP</S.ButtonLanguage>
                <S.ButtonLanguage disabled={languageDescription === 'en_us' ? true : false} onClick={() => setLanguageDescription('en_us')}>EN</S.ButtonLanguage>
              </S.DescriptionNav>
              {selectedDetail.descriptions.map((el) => 
                el.language === languageDescription ? <S.DescriptionText>{el.description}</S.DescriptionText> : null
              )}
              </>
              : <div>No informations</div>}
            </S.DescriptionBox>
          </S.DescriptionContainer>
          <S.evolutionBox>
            <GS.DescriptionText gutterBottom variant="subtitle1">
              After-Evolution:
            </GS.DescriptionText>
            <S.evolutionContainer>
              {previousEvolutionsName?.map((el) => <div>{el}</div>)}
            </S.evolutionContainer>
            <GS.DescriptionText gutterBottom variant="subtitle1">
              Next-Evolution:
            </GS.DescriptionText>
            <S.evolutionContainer>
              {nextEvolutionsName?.map((el) => <div>{el}</div>)}
            </S.evolutionContainer>
          </S.evolutionBox>
        </S.ContainerInfoMb>
      </>) : (<>
        <S.ContainerLeft>

            <S.CloseIcon onClick={onClose}>Fechar</S.CloseIcon>

          {favorite ? (
            <S.FavoriteIconMui
              onClick={() => changeFavorite()}
            ></S.FavoriteIconMui>
          ) : (
            <S.FavoriteBorderIconMui
              onClick={() => changeFavorite()}
            ></S.FavoriteBorderIconMui>
          )}
          <S.ImageContainer>
            <S.descriptionBox>
            <S.Name gutterBottom variant="h4">
              {selectedDetail.name}
            </S.Name>
          </S.descriptionBox>
            {selectedDetail.images.length !== 0 ? (
              <S.Image
                digimonImage={
                  selectedDetail.images[0].href
                    .replace(/_/g, " ")
                    .replace(/ /g, "_")
                    .replace(/\(/g, "%28")
                    .replace(/\)/g, "%29") as string
                }
              ></S.Image>
            ) : (
              <></>
            )}
          </S.ImageContainer> 
        </S.ContainerLeft>
        <S.ContainerRight>
          <S.descriptionBox>
            <S.Description gutterBottom variant="subtitle1">
              Attribute:
            </S.Description>
          <S.Description gutterBottom variant="h6">
            {selectedDetail.attributes.join(", ")}
          </S.Description>
          </S.descriptionBox>
          <S.descriptionBox>
            <S.Description gutterBottom variant="subtitle1">
              Release Date:
            </S.Description>
            <S.Description gutterBottom variant="h6">
              {selectedDetail.releaseDate}
            </S.Description>
          </S.descriptionBox>
          <S.descriptionBox>
          <S.Description gutterBottom variant="subtitle1">
            X-Antibody:
          </S.Description>
          <S.Description gutterBottom variant="h6">
            {selectedDetail.xAntibody ? "Infected" : "Not Affected"}
          </S.Description>
          </S.descriptionBox>
          <S.Description gutterBottom variant="subtitle1">
            Description:
          </S.Description>
          <S.DescriptionBox>
            {selectedDetail.descriptions ?
            <>
              <S.DescriptionNav>
                <S.ButtonLanguage disabled={languageDescription === 'jap' ? true : false} onClick={() => setLanguageDescription('jap')}>JP</S.ButtonLanguage>
                <S.ButtonLanguage disabled={languageDescription === 'en_us' ? true : false} onClick={() => setLanguageDescription('en_us')}>EN</S.ButtonLanguage>
              </S.DescriptionNav>
              {selectedDetail.descriptions.map((el) => 
              el.language === languageDescription ? <S.DescriptionText>{el.description}</S.DescriptionText> : null
              )}
            </>
          : 
            <div>Undefined</div>}
          </S.DescriptionBox>
        </S.ContainerRight>    
        <S.ContainerRight>
          <S.descriptionBox>
            <S.Description gutterBottom variant="subtitle1">
              Level:
            </S.Description>
            <S.Description gutterBottom variant="h6">
              {selectedDetail.levels.join(", ")}
            </S.Description>
          </S.descriptionBox>
          <S.descriptionBox>
            <S.Description gutterBottom variant="subtitle1">
              Field:
            </S.Description>
            {selectedDetail.fields.length > 0 ? (
              <S.IconContainter>
                {selectedDetail.fields.map((ele) => (
                  <S.Field
                  src={
                    ele.image
                      .replace(/_/g, " ")
                      .replace(/ /g, "%20")
                      .replace(/\(/g, "%28")
                      .replace(/\)/g, "%29") as string
                  }
                  />
                ))}
              </S.IconContainter>
            ) : (
              <S.Description gutterBottom variant="h6">
                No informations
              </S.Description>
            )}
          </S.descriptionBox>
          <S.descriptionBox>
            <S.Description gutterBottom variant="subtitle1">
              Type:
            </S.Description>
            <S.Description gutterBottom variant="h6">
              {selectedDetail.types.join(', ')}
            </S.Description>
          </S.descriptionBox>
          <S.evolutionBox>
            <S.Description gutterBottom variant="subtitle1">
              After-Evolution:
            </S.Description>
            <S.evolutionContainer>
              {previousEvolutionsName?.map((el) => <div>{el}</div>)}
            </S.evolutionContainer>
            <S.Description gutterBottom variant="subtitle1">
              Next-Evolution:
            </S.Description>
            <S.evolutionContainer>
              {nextEvolutionsName?.map((el) => <div>{el}</div>)}
            </S.evolutionContainer>
          </S.evolutionBox>
        </S.ContainerRight>
      </>)}
    </S.Container>
  );
};

export default DetailScreen;
