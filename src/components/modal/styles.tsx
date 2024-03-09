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
  background-image: linear-gradient(180deg, #acf, #fff );
  border: 2px solid #000;
  background-size: cover;
  box-shadow: 1px 1px 4px 4px #acf !important;
  padding: 16px;
  & .MuiTypography-h2 {
      font-family: fantasy;
  }
  
  @media (max-width: 426px) {
    width: 352px;
    height: 780px;
    top: 20px;
    left: 36px;
    justify-content: flex-start;
    background-position: left;
    padding: 12px;
    background-image: linear-gradient(180deg, #acf, #fff );
    & .MuiTypography-h2 {
      font-size: 2rem;
    }
  }
`;

export const Name = styled(Typography)`
  width: 1060px;
  color: #000000ee;
  -webkit-text-stroke: 1px #fff;
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
  color: #000000ee;
  /* -webkit-text-stroke: 1px #fff; */
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
  color: #000000ee;
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
  color: #000000ee;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 1px 1px 4px 4px rgba(1, 3, 45, 1);
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
  height: 350px;
  width: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const infoContainerMobile = styled(Box)`
  width: 310px;
  height: 75px;
  color: #000000ee;
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
  color: #ff4646;
  background-color: #acf;
  border-radius: 6px;
  border: 1px solid #000000ee;
  box-shadow: 1px 1px 1px 1px #000000ee;
`;

export const FavoriteBorderIconMui = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  color: #fff;
  background-color: #acf;
  border: 1px solid #000000ee;
  box-shadow: 1px 1px 1px 1px #000000ee;
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
  color: #000000ee;
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-image: linear-gradient(180deg, #fff, #acf);
  box-shadow: 1px 1px 4px 4px rgba(1, 3, 45, 1);
  @media (max-width: 426px) {
    width: 300px;
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
  background-image: linear-gradient(180deg, #acf, #000) !important;
  color: #fff !important;
  }
  @media (max-width: 426px) {
    width: 276px;
    height: 20px;
  }
`;

export const ButtonLanguage = styled(Button)`
  width: 193px;
  height: 18px;
  font-family: fantasy !important;
  color: #acf !important;
  background-image: linear-gradient(180deg, #fff, #fff) !important;
  @media (max-width: 426px) {
    width: 138px;
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
    width: 276px;
  }
`;

export const FieldsContainer = styled(Box)`
  max-width: 260px;
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