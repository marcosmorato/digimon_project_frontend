import styled from "styled-components";
import {
  Box,
  Button,
  Pagination,
  Stack,
} from "@mui/material";
import { theme } from '../../utils/globalStyles/theme'
import CircularProgress from '@mui/material/CircularProgress';

export const PaginationContainer = styled(Box)`
  width: 784px;
  height: 450px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 426px) {
    width: 328px;
    height: 726px;
  }
`;

export const NameContainer = styled(Box)`
  width: 784px;
  height: 370px;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text};
  margin-top: 8px;
  & .MuiButton-root {
    display: flow;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    margin: 0 16px;
    border: 2px solid ${theme.colors.black};
    font-family: fantasy;
    color: ${theme.colors.text};
    background-image: linear-gradient(180deg, ${theme.colors.secondary}, ${theme.colors.primary});
    font-size: 16px;

    
    &:hover {
      background-image: linear-gradient(180deg, ${theme.colors.black}, ${theme.colors.primary});
      color: ${theme.colors.white} !important;
      -webkit-text-stroke: 1px ${theme.colors.text};
      border: 2px solid ${theme.colors.secondary};
      opacity: 1 !important;
    }
  }
     
  & .Mui-disabled {
    color: ${theme.colors.error} !important;
  }
  
  @media (max-width: 426px) {
    height: 620px;
    width: 328px;
    margin-top: 20px;
    & .MuiButton-root {
      margin: 6px 12px;
    }
  }
`;

export const ShowInfo = styled(Button)`
  width: 158px;
  height: 45px;
  white-space: nowrap;

  
  @media (max-width: 426px) {
    width: 140px;
    height: 50px;
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

export const Loading = styled(CircularProgress)``