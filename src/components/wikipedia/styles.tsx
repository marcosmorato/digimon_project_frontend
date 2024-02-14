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
  opacity: 0.8;
  
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
  margin-top: 8px;
  & .MuiButton-root {
    display: flow;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    margin: 0 16px;
    border: 2px solid #000000ee;
    font-family: fantasy;
    color: #000000ee;
    background-image: linear-gradient(180deg, #fff, #acf);
    font-size: 16px;

    
    &:hover {
      background-image: linear-gradient(180deg, #000000ee, #acf);
      color: #fff !important;
      -webkit-text-stroke: 1px #000000ee;
      border: 2px solid #fff;
      opacity: 1 !important;
    }
  }
     
  & .Mui-disabled {
    color: #ff0000cc !important;
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
    background-image: linear-gradient(180deg, #fff, #acf);
    color: #000000ee;
    border: 1px solid #000000ee;
    font-family: fantasy;
    opacity: 0.8;
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

