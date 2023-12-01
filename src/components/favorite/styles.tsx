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
} from "@mui/material";

import AspectRatioIcon from "@mui/icons-material/AspectRatio";

export const Container = styled(Box)`
  width: 60%;
  height: 80%;
  box-shadow: 1px 1px 4px 4px #acf !important;
  border: 2px solid #000;
  border-radius: 10px;
  color: #000000ee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
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
  /* background-image: linear-gradient(180deg, #ffeea8, #f6a325); */
  background-color: white !important;
  font-size: 16px !important;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    background-color: #000000ee !important;
    color: white !important;
  }
`;

export const PaginationContainer = styled(Box)`
  width: 1066px;
  height: 458px;
  display: flex;
  opacity: 0.7;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 426px) {
    width: 360px;
    height: 726px;
  }
`;

export const NameContainer = styled(Box)`
  width: 100%;
  color: #000000ee;
  display: flex;
  align-items: center;
  opacity: 0.7;
  flex-wrap: wrap;
  margin-top: 8px;
  flex-grow: 1; /* Adicione esta linha */
  height: 370px;
  justify-content: center;
  
  @media (max-width: 426px) {
    height: 620px;
    margin-top: 20px;
  }
`;

export const PaginationUi = styled(Pagination)`
  & .MuiPaginationItem-root {
    color: #000000ee;
    background-color: white;
    font-weight: 700;
    opacity: 0.9;

    &.Mui-selected {
      background-color: #acf !important;
    }

    &:hover {
      background-color: #000000ee;
      color: white;
    }
  }
`;

export const StackUi = styled(Stack)``;

export const ContainFavorite = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8px;
  flex-grow: 1; /* Adicione esta linha */
  height: 420px;
  justify-content: space-between;
  
  @media (max-width: 426px) {
    height: 620px;
    margin-top: 20px;
  }
`;

export const CardContentMui = styled(CardContent)`
  display: flex;
`;

export const CardMui = styled(Card)`
  width: 200px;
  height: 200px;

  & .MuiCardMedia-root {
    background-size: contain;
  }
  & .MuiTypography-subtitle1 {
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    -webkit-text-stroke: 0px;
    color: #000000ee;
  }
`;

export const CardMediaMui = styled(CardMedia)`
  height: 140px;
  border-bottom: 1px solid #acf;
`;

export const MaximizeIcon = styled(AspectRatioIcon)`
  /*   position: absolute; */
  width: 16px;
  height: 16px;
  /* top: 7%;
  right: 2%; 
  z-index: 1;  */

  color: #000000ee;
  box-shadow: 1px 1px 1px 1px #000000ee;
`;
