import React, {useState} from "react";
import { IDigimonFavorite } from "../../utils/interfaces/digimons";
import * as S from "./styles";
import * as GS from "../../utils/globalStyles/styles";

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
  const isMobile = window.innerWidth <= 426;
  
  
  const previousEvolutionsName = selectedDetail.priorEvolutions?.map((el) => el.digimon)
  const nextEvolutionsName = selectedDetail.nextEvolutions?.map((el) => el.digimon)
  return (
    <S.Container>
      {isMobile ? (<>
        <S.ContainerLeft>
          <S.Close>
            <S.BackArrow onClick={onClose}>Fechar</S.BackArrow>
          </S.Close>
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
          <S.descriptionBox>
            <GS.DescriptionText gutterBottom variant="subtitle1">
              Level(s):
            </GS.DescriptionText>
            <GS.DescriptionText gutterBottom variant="h6">
              {selectedDetail.levels.join(", ")}
            </GS.DescriptionText>
          </S.descriptionBox>
          <S.descriptionBox>
            <GS.DescriptionText gutterBottom variant="subtitle1">
              Campo[s]:
            </GS.DescriptionText>
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
                Sem Dados.
              </GS.DescriptionText>
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
          <S.DescriptionContainer>
            <GS.DescriptionText gutterBottom variant="subtitle1">
            Descrição:
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
              : <div>Sem Dados</div>}
            </S.DescriptionBox>
          </S.DescriptionContainer>
          <S.evolutionBox>
            <GS.DescriptionText gutterBottom variant="subtitle1">
              Pre-Evolução:
            </GS.DescriptionText>
            <S.evolutionContainer>
              {previousEvolutionsName?.map((el) => <div>{el}</div>)}
            </S.evolutionContainer>
            <GS.DescriptionText gutterBottom variant="subtitle1">
              Pos-Evolução:
            </GS.DescriptionText>
            <S.evolutionContainer>
              {nextEvolutionsName?.map((el) => <div>{el}</div>)}
            </S.evolutionContainer>
          </S.evolutionBox>
        </S.ContainerInfoMb>
      </>) : (<>
        <S.ContainerLeft>
          <S.Close>
            <S.BackArrow onClick={onClose}>Fechar</S.BackArrow>
          </S.Close>
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
            <S.Name gutterBottom variant="h4">
              {selectedDetail.name}
            </S.Name>
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
          : <div>Inexistente</div>}
        </S.DescriptionBox>
      </S.ContainerRight>    
      <S.ContainerRight>
        <S.descriptionBox>
          <GS.DescriptionText gutterBottom variant="subtitle1">
            Level(s):
          </GS.DescriptionText>
          <GS.DescriptionText gutterBottom variant="h6">
            {selectedDetail.levels.join(", ")}
          </GS.DescriptionText>
        </S.descriptionBox>
        <S.descriptionBox>
          <GS.DescriptionText gutterBottom variant="subtitle1">
            Campo[s]:
          </GS.DescriptionText>
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
              ></S.Field>
              ))}
            </S.IconContainter>
          ) : (
            <GS.DescriptionText gutterBottom variant="h6">
            Sem dados.
            </GS.DescriptionText>
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
        <S.evolutionBox>
          <GS.DescriptionText gutterBottom variant="subtitle1">
            Pre-Evolução:
          </GS.DescriptionText>
          <S.evolutionContainer>
            {previousEvolutionsName?.map((el) => <div>{el}</div>)}
          </S.evolutionContainer>
          <GS.DescriptionText gutterBottom variant="subtitle1">
            Pos-Evolução:
          </GS.DescriptionText>
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
