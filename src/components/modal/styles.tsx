import styled from "styled-components";
import {
  Box,
  Button,
  Paper,
  Modal,
  Typography,
} from "@mui/material";
import { theme } from '../../utils/globalStyles/theme'

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CancelIcon from '@mui/icons-material/Cancel';

export const ModalUi = styled(Modal)`
  background-color: ${theme.colors.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaperInfo = styled(Paper)`
  width: 1100px;
  height: 700px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-image: linear-gradient(180deg, ${theme.colors.primary}, ${theme.colors.secondary} );
  border: 2px solid ${theme.colors.black};
  background-size: cover;
  box-shadow: 1px 1px 4px 4px ${theme.colors.primary} !important;
  padding: 16px;
  & .MuiTypography-h2 {
      font-family: fantasy;
  }
  
  @media (max-width: 426px) {
    width: 352px;
    height: 810px;
    top: 20px;
    left: 36px;
    justify-content: flex-start;
    background-position: left;
    padding: 12px;
    background-image: linear-gradient(180deg, ${theme.colors.primary}, ${theme.colors.secondary} );
    & .MuiTypography-h2 {
      font-size: 2rem;
    }
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 1;
  
  & :hover {
    cursor: pointer;
  }
  @media (max-width: 426px) {
    top: 8px;
    right: 12px;
  }
`

export const CloseIcon = styled(CancelIcon)`
  z-index: 1;
  color: ${theme.colors.white};
  opacity: 0.9;
  width: 24px;
  height: 23px;
  z-index: 1;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.black};
  box-shadow: 1px 1px 1px 1px ${theme.colors.black};
  border-radius: 6px;
`;

export const Name = styled(Typography)`
  width: 1060px;
  color: ${theme.colors.text};
  -webkit-text-stroke: 1px ${theme.colors.secondary};
  text-align: center;
  
  @media (max-width: 426px) {
    width: 290px;
    max-height: 75px;
    margin-top: 30px !important;
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
    height: 760px;
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
  color: ${theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  & .MuiTypography-root {
    font-size: 20px;
    font-family: fantasy;
    text-transform: none;
  }
  &:hover {
    opacity: 0.9;
  }
`;



export const TextContainerLeft = styled(Box)`
  width: 300px;
  height: 120px;
  color: ${theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .MuiTypography-root {
    font-size: 18px;
    font-family: fantasy;
    text-transform: none;
  }
`;

export const ImageContainer = styled(Box)`
  width: 320px;
  height: 320px;
  color: ${theme.colors.text};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 1px 1px 4px 4px ${theme.colors.tertiary};
  border-radius: 10px;
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
  width: 320px;
  height: 320px;
  background-image: url(${(props) => props.digimonImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
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
  height: 380px;
  width: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const infoContainerMobile = styled(Box)`
  width: 310px;
  height: 75px;
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  & .MuiTypography-overline {
    font-size: 0.8rem;
    font-family: fantasy;
    line-height: 1.66;
    text-transform: none;
    margin-right: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const SelectContainerMobile = styled(Box)`
  width: 310px;
  height: 120px;
  color: ${theme.colors.white};
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
  color: ${theme.colors.error};
  background-color: ${theme.colors.primary};
  border-radius: 6px;
  border: 1px solid ${theme.colors.black};
  box-shadow: 1px 1px 1px 1px ${theme.colors.black};
`;

export const FavoriteBorderIconMui = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.black};
  box-shadow: 1px 1px 1px 1px ${theme.colors.black};
  border-radius: 6px;
`;

export const Info = styled(Typography)`
  height: 35px;
  display: flex;
  align-items: center;
  
  @media (max-width: 426px) {
    height: 35px;
    margin-right: 10px !important;
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
  height: 180px;
  margin-top: 20px;
  border-radius: 10px;
  color: ${theme.colors.text};
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-image: linear-gradient(180deg, ${theme.colors.secondary}, ${theme.colors.primary});
  box-shadow: 1px 1px 4px 4px ${theme.colors.tertiary};
  @media (max-width: 426px) {
    width: 296px;
    height: 310px;
    padding: 12px;
    margin-top: 10px;
    & .MuiTypography-root {
      margin: 10px 0px;
    }
  }
`;

export const DescriptionNav = styled(Box)`
  width: 386px;
  height: 20px;
  display: flex;
  margin-bottom: 10px;
  & .Mui-disabled {
  background-image: linear-gradient(180deg, ${theme.colors.primary}, ${theme.colors.black}) !important;
  color: ${theme.colors.white} !important;
  }
  @media (max-width: 426px) {
    width: 270px;
    height: 20px;
  }
`;

export const ButtonLanguage = styled(Button)`
  width: 193px;
  height: 18px;
  font-family: fantasy !important;
  color: ${theme.colors.primary} !important;
  background-image: linear-gradient(180deg, ${theme.colors.secondary}, ${theme.colors.secondary}) !important;
  @media (max-width: 426px) {
    width: 135px;
    height: 18px;
  }
`;

export const DescriptionText = styled(Typography)`
  overflow-y: auto;
  width: 386px;
  height: 126px;
  font-family: fantasy !important;
  letter-spacing: 0.06em !important;
  font-size: 12px !important;
  @media (max-width: 426px) {
    height: 240px;
    margin-top: 10px;
    width: 270px;
  }
`;

export const FieldsContainer = styled(Box)`
  max-width: 260px;
  height: 40px;
  color: ${theme.colors.text};
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
 
  & .MuiSvgIcon-root {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 426px) {
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

  margin: 0 2px;
  @media (max-width: 426px) {
    margin-right: 10px;
  }
`;