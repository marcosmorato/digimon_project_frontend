import styled from "styled-components";
import {
  Box,
  Button,
  Typography
} from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { typography } from "@mui/system";

export const Close = styled.div`
  position: absolute; /* Define o posicionamento absoluto */
  top: 14px; /* Posição em relação ao topo do container pai */
  left: 4px; /* Posição em relação à direita do container pai */
  z-index: 1; /* Garante que o botão de fechar esteja acima do conteúdo */
  
  & :hover {
    cursor: pointer;
  }
  @media (max-width: 426px) {
    margin: 4px 0px 10px 0px;
    width: 280px;
  }
`

export const Description = styled(Typography)`
  height: 32px;
  width: 310px;

  font-family: fantasy !important;
  display: flex;

  word-wrap: break-word;

  @media (max-width: 426px) {
    height: 40px;
  }
`;

export const BackArrow = styled(CloseIcon)`
  z-index: 1;
  color: #000000ee;
  opacity: 0.9;
  width: 24px;
  height: 23px;
  z-index: 1;
`;

export const Container = styled(Box)`
  width: 1062px;
  height: 514px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(180deg, #acf, #fff);
  box-shadow: 1px 1px 4px 4px #acf;
  border: 1px solid black;
  border-radius: 8px;
  @media (max-width: 426px) {
    height: 764px;
    
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    justify-content: center;
    background-image: linear-gradient(180deg, #fff, #acf);
  }
`;

export const ContainerInfoMb = styled.div`
  height: 310px;
  width: 325px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerLeft = styled(Box)`
  position: relative;
  display: flex;
  width: 362px;
  height: 514px;
  flex-direction: column;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #000000ee;
  & .MuiTypography-subtitle1 {
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    -webkit-text-stroke: 0px;
    color: #000000ee;
  }
  & .MuiTypography-h6 {
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    -webkit-text-stroke: 0px;
    color: #000000ee;
  }
  @media (max-width: 426px) {
    height: 432px;
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    margin-bottom: 6px;
  }
`;

export const ContainerRight = styled(Box)`
  display: flex;
  width: 340px;
  height: 514px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 426px) {
    height: 250px;
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
  }
`;

export const ImageContainer = styled(Box)`
  position: relative;
  color: #000000ee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 16px;
  @media (max-width: 426px) {
    width: 280px;
    height: 280px;
    margin-bottom: 16px;
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
  @media (max-width: 426px) {
    width: 280px;
    height: 280px;
  }
`;

export const Name = styled(Typography)`
  width: 300px;
  color: #000000ee;
  
  text-align: center;
  
  @media (max-width: 426px) {
    width: 280px;
    height: 87px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const descriptionBox = styled.div`
  border-bottom: 1px solid #000000ee;
  width: 310px;
  & .MuiTypography-subtitle1 {
    text-align: left;
  }
  & .MuiTypography-h6 {
    text-align: left;
  }
  @media (max-width: 426px) {
    width: 280px;
  }
`
export const evolutionBox = styled.div`
  width: 310px;
  & .MuiTypography-subtitle1 {
    text-align: left;
  }
  & .MuiTypography-h6 {
    text-align: left;
  }
    @media (max-width: 426px) {
    width: 280px;
  }
`
export const evolutionContainer = styled.div`
  width: 300px;
  font-family: fantasy;
  height: 80px;
  overflow-y: auto;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 4px;
  padding: 4px;
  @media (max-width: 426px) {
    width: 280px;
  }
`

export const evolutionName = styled(typography)`
  width: 200px;
`

export const IconContainter = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Field = styled.img`
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
  border: 2px solid #000000ee !important;
  box-shadow: 1px 1px 4px 4px #acf !important;

  font-family: fantasy !important;
  color: #000000ee !important;
  background-color: white !important;
  font-size: 16px !important;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    background-color: #000000ee !important;
    color: white !important;
  }
`;

export const DescriptionContainer = styled.div`
    @media (max-width: 426px) {
    width: 310px;
    height: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
  }
`


export const DescriptionBox = styled(Box)`
  width: 310px;
  height: 40%;
  box-shadow: 1px 1px 4px 4px #000000ee;
  border-radius: 10px;
  color: #000000ee;
  display: flex;
  flex-direction: column;
  padding: 5px;
  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 426px) {
    height: 200px;
    width: 280px;
  }
`;

export const DescriptionNav = styled(Box)`
  width: 100%;
  height: 28px;
  display: flex;

  & .Mui-disabled {
    color: #fff !important;
    background-color: #000000ee !important;
  }
`;

export const ButtonLanguage = styled(Button)`
  width: 100%;
  height: 26px;
  background-color: white !important;
  font-family: fantasy !important;
  background-color: #fff !important;
  color: #000000ee !important;
`;

export const DescriptionText = styled(Typography)`
  max-height: 80%;
  overflow-y: auto;
`;