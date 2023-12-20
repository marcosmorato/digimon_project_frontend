import styled from "styled-components";
import {
  Box,
  Button,
  Pagination,
  Stack,
} from "@mui/material";

export const PaginationContainer = styled(Box)`
  width: 784px;
  height: 450px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  opacity: 0.7;
  
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
  color: #000000ee;
  opacity: 0.7;
  margin-top: 8px;
  & .MuiButton-root {
    display: flow;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    margin: 0 16px;
    border: 2px solid #000000ee;
    box-shadow: 1px 1px 4px 4px #acf;
    font-family: fantasy;
    color: #000000ee;
    background-color: white;
    font-size: 16px;
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
  &:hover {
    background-color: #000000ee !important;
    color: white !important;
  }
  
  @media (max-width: 426px) {
    width: 140px;
    height: 50px;
  }
`;

export const StackUi = styled(Stack)`
  @media (max-width: 426px) {
    width: 320px;
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

