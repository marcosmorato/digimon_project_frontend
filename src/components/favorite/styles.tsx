import styled from "styled-components";
import {
  Box,
  Pagination,
  Stack,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { theme } from '../../utils/globalStyles/theme'

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
    background-image: linear-gradient(180deg, ${theme.colors.secondary}, ${theme.colors.primary});
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.black};
    font-family: fantasy;
    text-transform: none;

    &.Mui-selected {
      background-image: linear-gradient(180deg, ${theme.colors.black}, ${theme.colors.primary});
      color: ${theme.colors.white} !important;
      border: 1px solid ${theme.colors.secondary};
    }

    &:hover {
      background-image: linear-gradient(180deg, ${theme.colors.black}, ${theme.colors.primary});
      color: ${theme.colors.white} !important;
      border: 1px solid ${theme.colors.secondary};
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
  background-image: linear-gradient(180deg, ${theme.colors.secondary}, ${theme.colors.primary});
  border-radius: 8px;
  border: 1px solid ${theme.colors.black};
  box-shadow: 1px 1px 4px 4px ${theme.colors.primary} !important;
  & .MuiCardMedia-root {
    background-size: contain;
  }
  & .MuiTypography-overline {
    overflow: hidden;
    text-transform: none;
    -webkit-text-stroke: 0px;
    color: ${theme.colors.text};
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
  border-bottom: 1px solid ${theme.colors.black};
  border-radius: 8px;
  @media (max-width: 426px) {
    width: 160px;
    height: 160px;
  }
`;

export const MaximizeIcon = styled(AspectRatioIcon)`
  width: 16px;
  height: 16px;
  color: ${theme.colors.text};
  box-shadow: 1px 1px 1px 1px ${theme.colors.black};
`;
