import styled from "styled-components";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Pagination,
  Stack,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Close = styled(CloseIcon)`
  z-index: 1; /* Para garantir que os ícones estejam acima da imagem */
  color: black;
  opacity: 0.9;
`;

export const Container = styled(Box)`
  width: 1062px;
  height: 514px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff !important;
  opacity: 0.7;
  border-radius: 8px;
`;

export const ContainerLeft = styled(Box)`
  display: flex;
  width: 362px;
  height: 514px;
  flex-direction: column;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
    border-right: 1px solid black;
  & .MuiTypography-subtitle1 {
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    -webkit-text-stroke: 0px;
    color: black;
  }
  & .MuiTypography-h6 {
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    -webkit-text-stroke: 0px;
    color: black;
  }
`;

export const ContainerRight = styled(Box)`
  display: flex;
  width: 340px;
  height: 514px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled(Box)`
  position: relative;
  /*   width: 326px;
  height: 326px; */
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

export const Image = styled(Box)<{ digimonImage: string }>`
  width: 326px;
  height: 326px;
  background-image: url(${(props) => props.digimonImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  box-shadow: 1px 1px 4px 4px rgba(1, 3, 45, 1);
  border-radius: 10px;
`;

export const descriptionBox = styled.div`
  border-bottom: 1px solid black;
  width: 310px;
`

export const IconContainter = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const ShowInfo = styled(Button)`
  width: 20%;
  height: 12%;
  display: flow !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  text-transform: none !important;
  white-space: nowrap;
  margin: 0 20px !important;
  border: 2px solid black !important;
  box-shadow: 1px 1px 4px 4px #acf !important;

  font-family: fantasy !important;
  color: black !important;
  /* background-image: linear-gradient(180deg, #ffeea8, #f6a325); */
  background-color: white !important;
  font-size: 16px !important;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    background-color: black !important;
    color: white !important;
  }
`;


export const DescriptionContainer = styled(Box)`
  width: 310px;
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

  & .Mui-disabled {
    color: black !important;
    background-color: white !important;
  }
`;

export const ButtonLanguage = styled(Button)`
  width: 100%;
  height: 25%;
  font-family: fantasy !important;
  background-color: black !important;
  color: white !important;
`;

export const DescriptionText = styled(Typography)`
  max-height: 80%;
  overflow-y: auto;
`;