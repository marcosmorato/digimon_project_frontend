import styled from "styled-components";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
  Stack,
} from "@mui/material";

export const FormBox = styled(Box)`
  width: 190px;
  height: 454px;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 426px) {
    height: 400px;
    width: 325px;
    margin-top: 20px;
  }
`;

export const Form = styled.form`
  /*   background-color: rgba(255, 255, 255, 0.883); */
  /* box-shadow: 1px 1px 4px 4px #acf;
  border-radius: 1rem; */
  height: 454px;
  width: 190px;
  overflow: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  font-style: italic;
  @media (max-width: 426px) {
    height: 400px;
    width: 325px;
  }
`;

export const InputContainer = styled.div`
  width: 190px;
  height: 408px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 426px) {
    height: 400px;
    width: 300px;
  }
`;

export const inputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #fff, #acf);
  opacity: 0.6;
  & .MuiTextField-root {
    width: 220px;
    @media (max-width: 426px) {
      width: 325px;
    }
  }
  label {
    font-family: fantasy !important;
    color: black !important;
    width: 110px;
    text-align: left;
    /* -webkit-text-stroke: 1px #acf; */
  }
  & .MuiInputBase-input {
    color: black;
    /* -webkit-text-stroke: 1px #acf; */
    font-family: fantasy !important;
    border-color: black !important;

    background-image: linear-gradient(180deg, #fff, #acf);
  }
`;

export const InputText = styled(TextField)`
  /* width: 100%;
  height: 100%;
  margin: 0px !important; */
`;

export const DescriptionText = styled(Typography)`
  max-height: 100%;
  width: 90%;
  /* padding-left: 10px; */
  /* overflow-y: auto; */
  font-family: fantasy !important;
  /* background-image: linear-gradient(180deg, #ffeea8, #f6a325);
  background-clip: text;
  -webkit-background-clip: text; */
  color: black;
  -webkit-text-stroke: 1px #acf; /* Largura e cor da borda */
`;

export const Search = styled(Button)`
  width: 190px;
  height: 46px;
  @media (max-width: 426px) {
    width: 220px;
  }
`;
