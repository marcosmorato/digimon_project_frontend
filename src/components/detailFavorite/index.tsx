import React from "react";
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
  const classNames = ["DetailContainer", isDetailOpen ? openClass : ""].join(
    " "
  );

  console.log(selectedDetail.fields);
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
        <GS.DescriptionText gutterBottom variant="subtitle1">
          Nome:
        </GS.DescriptionText>
        <GS.DescriptionText gutterBottom variant="h6">
          {selectedDetail.name}
        </GS.DescriptionText>
        {selectedDetail.fields.length > 0 ? (
          <S.IconContainter>
            {selectedDetail.fields.map((ele) => (
              <S.Icon
                digimonImage={
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
      </S.ContainerLeft>
      <S.ContainerRight>
        <S.ShowInfo onClick={onClose}>Fechar</S.ShowInfo>
      </S.ContainerRight>
    </S.Container>
  );
};

export default DetailScreen;
