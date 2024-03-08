import styled from "styled-components";
import {
  Box,
  Pagination,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

import AspectRatioIcon from "@mui/icons-material/AspectRatio";

export const PaginationContainer = styled(Box)`
  width: 1066px;
  height: 458px;
  display: flex;
  opacity: 0.9;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 426px) {
    width: 324px;
    height: 760px;
  }
`;

export const StackUi = styled(Stack)`
  @media (max-width: 426px) {
    width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PaginationUi = styled(Pagination)`
  & .MuiPaginationItem-root {
    background-image: linear-gradient(180deg, #fff, #acf);
    color: #000000ee;
    border: 1px solid #000000ee;
    font-family: fantasy;
    text-transform: none;

    &.Mui-selected {
      background-image: linear-gradient(180deg, #000000ee, #acf);
      color: #fff !important;
      border: 1px solid #fff;
    }

    &:hover {
      background-image: linear-gradient(180deg, #000000ee, #acf);
      color: #fff !important;
      border: 1px solid #fff;
    }
  }
`;

export const ContainerFavorite = styled.div`
  width: 1066px;
  height: 420px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: flex-start;
  
  @media (max-width: 426px) {
    height: 660px;
    margin: 0 0 12px 0;
    align-items: center;
    justify-content: center;
  }
`;

export const CardContentMui = styled(CardContent)`
  display: flex;
  width: 200px;
  
`;


export const CardMui = styled(Card)`
  width: 201px;
  height: 201px;
  margin: 0px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #fff, #acf);
  border-radius: 8px;
  border: 1px solid #000;
  box-shadow: 1px 1px 4px 4px #acf !important;
  & .MuiCardMedia-root {
    background-size: contain;
  }
  & .MuiTypography-overline {
    overflow: hidden;
    /* text-overflow: ellipsis; */
    text-transform: none;
    /* white-space: nowrap; */
    -webkit-text-stroke: 0px;
    color: #000000ee;
    line-height: 1.66rem;
    font-size: 16px;
  
  }
  
  & .MuiCardContent-root:last-child {
    padding: 4px;
  }
  @media (max-width: 426px) {
    width: 220px;
    height: 210px;
    margin: 4px 0px;
    align-items: center;
    justify-content: center;
  }
`;

export const CardMediaMui = styled(CardMedia)`
  height: 130px;
  width: 130px;
  border-bottom: 1px solid #000000ee;
  border-radius: 8px;
  @media (max-width: 426px) {
    width: 160px;
    height: 160px;
    /* margin: 2px 0px; */
    /* align-items: center;
    justify-content: center; */
  }
`;

export const MaximizeIcon = styled(AspectRatioIcon)`
  width: 16px;
  height: 16px;
  color: #000000ee;
  box-shadow: 1px 1px 1px 1px #000000ee;
`;
