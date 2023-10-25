import styled from "styled-components";
import {
  Box,
  Button,
  Paper,
  Modal,
  Typography,
  Dialog,
  DialogContent,
  TextField,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const FavoriteIconMui = styled(FavoriteIcon)`
  position: absolute;
  top: 7%; /* Ajuste a posição vertical como desejado */
  right: 2%; /* Ajuste a posição horizontal como desejado */
  z-index: 1; /* Para garantir que os ícones estejam acima da imagem */
  color: red;
  box-shadow: 1px 1px 1px 1px black;
`;

export const FavoriteBorderIconMui = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 7%; /* Ajuste a posição vertical como desejado */
  right: 2%; /* Ajuste a posição horizontal como desejado */
  z-index: 1; /* Para garantir que os ícones estejam acima da imagem */
  color: black;
  box-shadow: 1px 1px 1px 1px black;
`;

export const InfoContainer = styled(Box)`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 426px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }
`;

export const DescriptionsContainer = styled(Box)`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const firstInfos = styled(Box)`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  &:hover {
    opacity: 0.9;
  }
`;

export const secondInfos = styled(Box)`
  width: 50%;
  height: 100%;
  /*   background-color: #fff; */
  color: black;
  display: flex;
  flex-direction: column;
  opacity: 0.7;
  &:hover {
    opacity: 0.9;
  }
`;

export const TextContainerLeft = styled(Box)`
  width: 100%;
  height: 20%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  opacity: 0.7;
  @media (max-width: 426px) {
    flex-direction: column;
    height: 80px;
    width: 50%;
    align-items: flex-start;
  }
  &:hover {
    opacity: 0.9;
  }
`;

export const TextContainerRight = styled(Box)`
  width: 100%;
  height: 20%;
  /*   background-color: #fff; */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  opacity: 0.7;
  @media (max-width: 426px) {
    flex-direction: column;
    height: 80px;
    width: 50%;
    align-items: flex-end;
  }
  &:hover {
    opacity: 0.9;
  }
`;

export const TextContainerMobile = styled(Box)`
  width: 100%;
  height: 75px;
  /*   background-color: #fff; */
  color: white;
  display: flex;
  justify-content: center;
  /* opacity: 0.7;
  &:hover {
    opacity: 0.9;
  } */
`;

export const SelectContainerMobile = styled(Box)`
  width: 100%;
  height: 75px;
  /*   background-color: #fff; */
  color: white;
  display: flex;
  justify-content: center;
  /* opacity: 0.7;
  &:hover {
    opacity: 0.9;
  } */
  margin-top: 50px;
`;

export const Info = styled(Typography)`
  font-size: 1.4rem !important;
  font-style: fantasy !important;
  text-transform: none !important;
  @media (max-width: 426px) {
    font-size: 0.8rem !important;
    height: 30px;
  }
`;

export const Text = styled(Typography)`
  font-size: 1rem !important;
  font-style: fantasy !important;
  text-transform: none !important;
  @media (max-width: 426px) {
    font-size: 0.6rem !important;
    height: 50px;
  }
`;

export const DescriptionContainer = styled(Box)`
  width: 100%;
  height: 40%;
  /*   background-color: #fff; */
  box-shadow: 1px 1px 4px 4px black;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  opacity: 0.7;
  padding: 5px;
  @media (max-width: 426px) {
    height: 50%;
  }
  &:hover {
    opacity: 0.9;
  }
`;

export const DescriptionNav = styled(Box)`
  width: 100%;
  height: 15%;
  display: flex;
`;

export const DescriptionButtons = styled(Box)`
  width: 100%;
  height: 25%;
`;

export const DescriptionText = styled(Typography)`
  max-height: 80%;
  overflow-y: auto;
`;

export const ModalInfo = styled(Modal)`
  background-color: rgba(1, 3, 45, 0.9);
  @media (max-width: 426px) {
    /* margin-bottom: 30px;
    height: 360px;
    width: 100%; */
    & .MuiTypography-h2 {
      font-size: 2rem;
    }
  }
`;

export const PaperInfo = styled(Paper)`
  position: absolute;
  width: 70%;
  height: 70%;
  border: 2px solid #000;
  box-shadow: 1px 1px 4px 4px #acf !important;
  padding: 16px;
  top: 25%;
  left: 15%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* transform: translate(-50%, -50%); */
  background-image: url("https://img.hype.games/cdn/67372575-d3d7-4576-8cb9-acfbe4663886Cover_Digimon.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  @media (max-width: 426px) {
    top: 5%;
    left: 10%;
    height: 90%;
    width: 80%;
    justify-content: flex-start;
    background-position: left;
  }
`;

export const ImageContainer = styled(Box)`
  position: relative;
  width: 40%;
  height: 100%;
  /* box-shadow: 1px 1px 4px 4px black;
  border-radius: 10px; */
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 426px) {
    width: 100%;
    height: 50%;
  }
`;

export const Name = styled(Typography)`
  width: 100%;
  /* overflow-y: auto; */
  font-family: fantasy !important;
  background-image: linear-gradient(180deg, #ffeea8, #f6a325);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-stroke: 1px #62c1cf; /* Largura e cor da borda */
  text-align: center;
`;

export const Image = styled(Box)<{ digimonImage: string }>`
  width: 100%;
  height: 90%;
  background-image: url(${(props) => props.digimonImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  box-shadow: 1px 1px 4px 4px rgba(1, 3, 45, 1);
  border-radius: 10px;
`;

export const TextData = styled(Typography)``;

export const NavLanguage = styled(Button)`
  width: 20%;
  height: 20%;
  /* @media (max-width: 900px) {
    width: 150px;
    height: 30px;

    margin: 0 0.5rem;
    padding: 0 1rem;

    border-radius: 0.3rem;

    color: #ccc;
    background-color: #454d60;
    box-shadow: 4px 4px 4px 2px black;
    border-bottom: 2px solid #af5735;

    text-align: center;

    &:hover {
      cursor: pointer;

      background-color: #303542;
      border-bottom: 1px solid #af5735;

      box-shadow: 0.1em 0.1em 0.2em black;
    }
  }

  @media (min-width: 900px) {
    height: 80%;

    background-color: #ff7843;
    box-shadow: 4px 4px 4px 2px black;

    &:hover {
      background-color: #af5735;
    }

    @media (min-width: 900px) {
      height: 80%;
    }
  } */
`;

export const ShowInfo = styled(Button)`
  width: 20%;
  height: 10%;
  margin-top: 15px !important;
  /* @media (max-width: 900px) {
    width: 150px;
    height: 30px;

    margin: 0 0.5rem;
    padding: 0 1rem;

    border-radius: 0.3rem;

    color: #ccc;
    background-color: #454d60;
    box-shadow: 4px 4px 4px 2px black;
    border-bottom: 2px solid #af5735;

    text-align: center;

    &:hover {
      cursor: pointer;

      background-color: #303542;
      border-bottom: 1px solid #af5735;

      box-shadow: 0.1em 0.1em 0.2em black;
    }
  }

  @media (min-width: 900px) {
    height: 80%;

    background-color: #ff7843;
    box-shadow: 4px 4px 4px 2px black;

    &:hover {
      background-color: #af5735;
    }

    @media (min-width: 900px) {
      height: 80%;
    }
  } */
`;
