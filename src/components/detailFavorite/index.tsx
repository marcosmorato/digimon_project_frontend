import React, {useState} from "react";
import { IDigimonFavorite } from "../../utils/interfaces/digimons";
import * as S from "./styles";
import * as GS from "../globalStyles";

interface DetailScreenProps {
  onClose: () => void;
  isDetailOpen: boolean;
  selectedDetail: IDigimonFavorite;
}

const DetailScreen: React.FC<DetailScreenProps> = ({
  isDetailOpen,
  onClose,
  selectedDetail,
}) => {
  const openClass = "open"; // Nome da classe para a animação
  const [languageDescription, setLanguageDescription] = useState('jap')
  const classNames = ["DetailContainer", isDetailOpen ? openClass : ""].join(
    " "
  );

  return (
    <S.Container>
      <S.ContainerLeft>
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
            ></S.Image>
          ) : (
            <></>
          )}

          {/* {verifyFavorite() ? (
                  <S.FavoriteIconMui
                    onClick={() => changeFavorite()}
                  ></S.FavoriteIconMui>
                ) : (
                  <S.FavoriteBorderIconMui
                    onClick={() => changeFavorite()}
                  ></S.FavoriteBorderIconMui>
                )} */}
        </S.ImageContainer>
        <S.descriptionBox>
          <GS.DescriptionText gutterBottom variant="subtitle1">
            Nome:
          </GS.DescriptionText>
          <GS.DescriptionText gutterBottom variant="h6">
            {selectedDetail.name}
          </GS.DescriptionText>
        </S.descriptionBox>
        <S.descriptionBox>
          <GS.DescriptionText gutterBottom variant="subtitle1">
            Level(s):
          </GS.DescriptionText>
          <GS.DescriptionText gutterBottom variant="h6">
            {selectedDetail.levels.join(", ")}
          </GS.DescriptionText>
        </S.descriptionBox>
        
      </S.ContainerLeft>
      <S.ContainerRight>
        <S.descriptionBox>
        <GS.DescriptionText gutterBottom variant="subtitle1">
          Atributo(s):
        </GS.DescriptionText>
        <GS.DescriptionText gutterBottom variant="h6">
          {selectedDetail.attributes.join(", ")}
        </GS.DescriptionText>
        </S.descriptionBox>
        
        <S.descriptionBox>
          <GS.DescriptionText gutterBottom variant="subtitle1">
              Data de Lançamento:
          </GS.DescriptionText>
          <GS.DescriptionText gutterBottom variant="h6">
              {selectedDetail.releaseDate}
          </GS.DescriptionText>
        </S.descriptionBox>
        <S.descriptionBox>
          <GS.DescriptionText gutterBottom variant="subtitle1">
            Anticorpo - X / X-Antibody:
          </GS.DescriptionText>
          <GS.DescriptionText gutterBottom variant="h6">
            {selectedDetail.xAntibody ? 'Sim' : 'Não'}
          </GS.DescriptionText>
        </S.descriptionBox>
        <GS.DescriptionText gutterBottom variant="subtitle1">
          Descrição:
        </GS.DescriptionText>
        <S.DescriptionContainer>
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
          : <div>Inexistente</div>}
          {/* <S.DescriptionText>{selectedDetail.descriptions[0].description}</S.DescriptionText> */}
        </S.DescriptionContainer>
      </S.ContainerRight>
      <S.ContainerRight>
      <S.Close onClick={onClose}>Fechar</S.Close>
      <S.descriptionBox>
        <GS.DescriptionText gutterBottom variant="subtitle1">
          Campo[s]:
        </GS.DescriptionText>
        {selectedDetail.fields.length > 0 ? (
          <S.IconContainter>
            {selectedDetail.fields.map((ele) => (
              <S.Icon
              src={
                ele.image
                  .replace(/_/g, " ")
                  .replace(/ /g, "%20")
                  .replace(/\(/g, "%28")
                  .replace(/\)/g, "%29") as string
              }
            ></S.Icon>
            ))}
          </S.IconContainter>
        ) : (
          <></>
        )}
        </S.descriptionBox>
        <S.descriptionBox>
        <GS.DescriptionText gutterBottom variant="subtitle1">
          Tipo(S):
        </GS.DescriptionText>
        <GS.DescriptionText gutterBottom variant="h6">
          {selectedDetail.types.join(', ')}
        </GS.DescriptionText>
        </S.descriptionBox>
      </S.ContainerRight>
      
        
    </S.Container>
  );
};

export default DetailScreen;
