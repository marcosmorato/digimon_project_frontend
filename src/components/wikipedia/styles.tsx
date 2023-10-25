import styled from "styled-components";
import {
  Box,
  Button,
  Paper,
  Modal,
  Typography,
  Dialog,
  DialogContent,
  TextField,
  Pagination,
  Stack,
} from "@mui/material";

export const PaginationContainer = styled(Box)`
  width: 784px;
  height: 450px;
  display: flex;
  /* align-items: center; */
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
  color: black;
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
    color: black;
    background-color: white;
    font-weight: 700;
    opacity: 0.9;

    &.Mui-selected {
      background-color: #acf !important;
    }

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export const StackUi = styled(Stack)``;

export const DialogContentMui = styled(DialogContent)`
  height: 80%;
  width: 100%;
  padding: 0.5rem;
  overflow: hidden;
  /* @media (min-width: 768px) {
    padding: 2rem;
  } */
`;

export const Form = styled.form`
  /*   background-color: rgba(255, 255, 255, 0.883); */
  box-shadow: 1px 1px 4px 4px #acf;
  padding: 30px 5px;
  min-width: 250px;
  height: 100%;
  max-height: 100%;

  overflow: auto;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  font-style: italic;

  /* @media (min-width: 700px) {
    height: 100%;
    margin: 1rem;
  } */
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const inputBox = styled.div`
  text-align: center;
  width: 100%;
  & > div {
    width: 83%;

    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin-bottom: 0.5rem;
    }
  }
`;

export const InputText = styled(TextField)``;

export const ModalInfo = styled(Modal)``;

export const DescriptionText = styled(Typography)`
  max-height: 100%;
  width: 784px;
  /* padding-left: 10px; */
  /* overflow-y: auto; */
  font-family: fantasy !important;
  color: black;
  -webkit-text-stroke: 1px #acf; /* Largura e cor da borda */
  @media (max-width: 426px) {
    width: 320px;
  }
`;

export const ShowInfo = styled(Button)`
  width: 20%;
  max-width: 20%;
  height: 12%;
  display: flow !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  text-transform: none !important;
  white-space: nowrap;
  margin: 0 16px !important;
  border: 2px solid black !important;
  box-shadow: 1px 1px 4px 4px #acf !important;

  font-family: fantasy !important;
  color: black !important;
  /* background-image: linear-gradient(180deg, #ffeea8, #f6a325); */
  background-color: white !important;
  font-size: 16px !important;
  @media (max-width: 426px) {
    width: 40%;
    max-width: 40%;
    margin: 6px 12px !important;
    height: 50px;
  }
  &:hover {
    background-color: black !important;
    color: white !important;
  }
`;
