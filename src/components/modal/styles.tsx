import styled from "styled-components";
import {
  Box,
  Button,
  Paper,
  Modal,
  Typography,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const ModalUi = styled(Modal)`
  background-color: rgba(1, 3, 45, 0.9);
`;

export const PaperInfo = styled(Paper)`
  width: 1100px;
  height: 700px;
  top: 88px;
  left: 170px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-image: url("https://img.hype.games/cdn/67372575-d3d7-4576-8cb9-acfbe4663886Cover_Digimon.jpg");
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid #000;
  background-size: cover;
  box-shadow: 1px 1px 4px 4px #acf !important;
  padding: 16px;
  
  @media (max-width: 426px) {
    width: 352px;
    height: 780px;
    top: 20px;
    left: 36px;
    justify-content: flex-start;
    background-position: left;
    padding: 12px;
    & .MuiTypography-h2 {
      font-size: 2rem;
      font-family: fantasy;
    }
  }
`;

export const Name = styled(Typography)`
  width: 1060px;
  background-image: linear-gradient(180deg, #ffeea8, #f6a325);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-stroke: 1px #62c1cf; /* Largura e cor da borda */
  text-align: center;
  
  @media (max-width: 426px) {
    width: 310px;
    max-height: 75px;
  }
`;

export const InfoContainer = styled(Box)`
  width: 1064px;
  height: 592px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  @media (max-width: 426px) {
    width: 310px;
    height: 720px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const DescriptionsContainer = styled(Box)`
  width: 300px;
  height: 592px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 426px) {
    justify-content: space-around;
  }
`;


export const TextContainerRight = styled(Box)`
  width: 300px;
  height: 120px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  opacity: 0.7;
  & .MuiTypography-root {
    font-size: 1rem;
    font-style: fantasy;
    text-transform: none;
  }
  &:hover {
    opacity: 0.9;
  }
`;



export const TextContainerLeft = styled(Box)`
  width: 300px;
  height: 120px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.7;
  & .MuiTypography-root {
    font-size: 1rem;
    font-style: fantasy;
    text-transform: none;
  }
  &:hover {
    opacity: 0.9;
  }
`;

export const ImageContainer = styled(Box)`
  width: 410px;
  height: 390px;
  color: #000000ee;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  & .MuiSvgIcon-root {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 426px) {
    width: 310px;
    height: 310px;
    margin: 12px 0px;
    & .MuiSvgIcon-root {
    width: 20px;
    height: 20px;
  }
  }
`;

export const Image = styled(Box)<{ digimonImage: string }>`
  width: 410px;
  height: 390px;
  background-image: url(${(props) => props.digimonImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  box-shadow: 1px 1px 4px 4px rgba(1, 3, 45, 1);
  border-radius: 10px;
  
  @media (max-width: 426px) {
    width: 310px;
    height: 310px;
  }
`;

export const SelectContainer = styled.div`
  width: 260px;
  @media (max-width: 426px) {
      width: 150px;
  }
`

export const detailsMobile = styled.div`
  overflow-y: auto;
  height: 350px;
  width: 310px;
`

export const infoContainerMobile = styled(Box)`
  width: 310px;
  height: 75px;
  color: white;
  display: flex;
  align-items: center;
  opacity: 0.7;
  
  & .MuiTypography-overline {
    font-size: 0.8rem;
    font-style: fantasy;
    line-height: 1.66;
    text-transform: none;
    margin-right: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:hover {
    opacity: 0.9;
  }
`;

export const SelectContainerMobile = styled(Box)`
  width: 310px;
  height: 120px;
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  
  @media (max-width: 426px) {
    margin-top: 0px;
  }
`;

export const FavoriteIconMui = styled(FavoriteIcon)`
  position: absolute;
  width: 24px;
  height: 23px;
  top: 10px;
  right: 10px;
  z-index: 1;
  color: red;
  box-shadow: 1px 1px 1px 1px #000000ee;
`;

export const FavoriteBorderIconMui = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  color: #000000ee;
  box-shadow: 1px 1px 1px 1px #000000ee;

`;

export const Info = styled(Typography)`
  height: 35px;
  display: flex;
  align-items: center;
  margin-right: 10px !important;
  @media (max-width: 426px) {
    height: 35px;
  }
`;

export const Text = styled(Typography)`
  height: 40px;
  display: flex;
  align-items: center;
  @media (max-width: 426px) {
    height: 35px;
  }
`;

export const ContainerCenter = styled.div`
  width: 425px;
  height: 592px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

export const DescriptionContainer = styled(Box)`
  width: 410px;
  height: 170px;
  margin-top: 10px;
  box-shadow: 1px 1px 4px 4px #000000ee;
  border-radius: 10px;
  color: #000000ee;
  display: flex;
  flex-direction: column;
  opacity: 0.8;
  padding: 12px;
  background-color: #fff;
  &:hover {
    opacity: 0.9
  }
  @media (max-width: 426px) {
    width: 310px;
    height: 310px;
    box-shadow: 1px 1px 2px 2px #000000ee;
     padding: 12px;
    & .MuiTypography-root {
      margin: 10px 0px;
    }
  }
`;

export const DescriptionNav = styled(Box)`
  width: 386px;
  height: 20px;
  display: flex;
  & .Mui-disabled {
    color: #000000ee !important;
    background-color: white !important;
  }
  @media (max-width: 426px) {
    width: 286px;
    height: 20px;
  }
`;

export const ButtonLanguage = styled(Button)`
  width: 193px;
  height: 18px;
  font-family: fantasy !important;
  background-color: #000000ee !important;
  color: white !important;
  @media (max-width: 426px) {
    width: 155px;
    height: 18px;
  }
`;

export const DescriptionText = styled(Typography)`
  overflow-y: auto;
  width: 386px;
  height: 126px;
  @media (max-width: 426px) {
    height: 240px;
    margin-top: 10px;
    width: 286px;
  }
`;

export const FieldsContainer = styled(Box)`
  width: 260px;
  height: 40px;
  color: #000000ee;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  & .MuiSvgIcon-root {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 426px) {
    width: 260px;
    height: 40px;
    justify-content: flex-start;
    
  }
`;

export const FieldImage = styled.img`
  width: 30px;
  height: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  box-shadow: 1px 1px 4px 4px rgba(1, 3, 45, 1);
  
  @media (max-width: 426px) {
    margin-right: 10px;
  }
`;