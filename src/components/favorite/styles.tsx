import styled from "styled-components";
import {
  Box,
  Pagination,
  Stack,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import AspectRatioIcon from "@mui/icons-material/AspectRatio";

export const PaginationContainer = styled(Box)`
  width: 1066px;
  height: 458px;
  display: flex;
  opacity: 0.7;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 426px) {
    width: 324px;
    height: 760px;
  }
`;

export const StackUi = styled(Stack)``;

export const PaginationUi = styled(Pagination)`
  & .MuiPaginationItem-root {
    color: #000000ee;
    background-color: #fff;
    font-weight: 700;
    opacity: 0.9;

    &.Mui-selected {
      background-color: #acf !important;
    }

    &:hover {
      background-color: #000000ee;
      color: #fff;
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
    margin-top: 6px;
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
  & .MuiCardMedia-root {
    background-size: contain;
  }
  & .MuiTypography-overline {
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    -webkit-text-stroke: 0px;
    color: #000000ee;
  }
  
  & .MuiCardContent-root:last-child {
    padding: 4px;
  }
  @media (max-width: 426px) {
    width: 210px;
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
`;

export const MaximizeIcon = styled(AspectRatioIcon)`
  width: 16px;
  height: 16px;
  color: #000000ee;
  box-shadow: 1px 1px 1px 1px #000000ee;
`;
