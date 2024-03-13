import styled from "styled-components";
import {
  Box,
  Button,
  Typography
} from "@mui/material";
import { theme } from '../../utils/globalStyles/theme'

import CancelIcon from '@mui/icons-material/Cancel';
import { typography } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Close = styled.div`
  position: absolute;
  top: 14px;
  left: 4px;
  z-index: 1;
  
  & :hover {
    cursor: pointer;
  }
  
  @media (max-width: 426px) {
    top: 10px;
    left: 10px;
  }
`

export const CloseIcon = styled(CancelIcon)`
  position: absolute;
  color: ${theme.colors.white};
  opacity: 0.9;
  width: 24px;
  height: 24px;
  top: 10px;
  left: 6px;
  z-index: 1;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.black};
  box-shadow: 1px 1px 1px 1px ${theme.colors.black};
  border-radius: 6px;
    
  @media (max-width: 426px) {
    top: 6px;
    left: 12px;
  }
`;

export const FavoriteIconMui = styled(FavoriteIcon)`
  position: absolute;
  width: 24px;
  height: 23px;
  top: 10px;
  right: 10px;
  z-index: 1;
  color: ${theme.colors.error};
  background-color: ${theme.colors.primary};
  border-radius: 6px;
  border: 1px solid ${theme.colors.black};
  box-shadow: 1px 1px 1px 1px ${theme.colors.black};
  @media (max-width: 426px) {
    top: 6px;
    right: 12px;
  }
`;

export const FavoriteBorderIconMui = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  color: ${theme.colors.secondary};
  background-color: ${theme.colors.primary};
  border-radius: 6px;
  border: 1px solid ${theme.colors.black};
  box-shadow: 1px 1px 1px 1px ${theme.colors.black};
  @media (max-width: 426px) {
    top: 6px;
    right: 12px;
  }
`;

export const Description = styled(Typography)`
  height: 32px;
  width: 310px;
  font-family: fantasy !important;
  display: flex;
  justify-content: flex-start;
  word-wrap: break-word;
  @media (max-width: 426px) {
    height: 40px;
    width: 280px;
  }
`;


export const Container = styled(Box)`
  width: 1062px;
  height: 514px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(180deg, ${theme.colors.primary}, ${theme.colors.secondary});
  box-shadow: 1px 1px 4px 4px ${theme.colors.primary};
  border: 1px solid ${theme.colors.black};
  border-radius: 8px;
  @media (max-width: 426px) {
    height: 764px;
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(180deg, ${theme.colors.secondary}, ${theme.colors.primary});
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
  border-right: 1px solid ${theme.colors.black};
  & .MuiTypography-subtitle1 {
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    -webkit-text-stroke: 0px;
    color: ${theme.colors.text};
  }
  & .MuiTypography-h6 {
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    -webkit-text-stroke: 0px;
    color: ${theme.colors.text};
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
  color: ${theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 16px;
  @media (max-width: 426px) {
    width: 280px;
    height: 280px;
    margin: 48px 0px 16px 0px;
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
  box-shadow: 1px 1px 4px 4px ${theme.colors.tertiary};
  border-radius: 10px;
  @media (max-width: 426px) {
    width: 280px;
    height: 280px;
  }
`;

export const Name = styled(Typography)`
  width: 300px;
  color: ${theme.colors.text};
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
  border-bottom: 1px solid ${theme.colors.black};
  width: 310px;
  & .MuiTypography-subtitle1 {
    text-align: left;
  }
  & .MuiTypography-h6 {
    text-align: left;
  }
  @media (max-width: 426px) {
    width: 280px;
    & .MuiTypography-subtitle1 {
      text-align: start;
  }
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
  border: 1px solid ${theme.colors.black};
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
  border: 2px solid ${theme.colors.black} !important;
  box-shadow: 1px 1px 4px 4px ${theme.colors.primary} !important;
  font-family: fantasy !important;
  color: ${theme.colors.text} !important;
  background-color: ${theme.colors.secondary} !important;
  font-size: 16px !important;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    background-color: ${theme.colors.black} !important;
    color: ${theme.colors.white} !important;
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
  box-shadow: 1px 1px 4px 4px ${theme.colors.black};
  border-radius: 10px;
  color: ${theme.colors.text};
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
    color: ${theme.colors.white} !important;
    background-color: ${theme.colors.black} !important;
  }
`;

export const ButtonLanguage = styled(Button)`
  width: 100%;
  height: 26px;
  background-color: ${theme.colors.white} !important;
  font-family: fantasy !important;
  color: ${theme.colors.text} !important;
`;

export const DescriptionText = styled(Typography)`
  max-height: 80%;
  overflow-y: auto;
`;