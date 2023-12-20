import styled from "styled-components";
import {
  Box,
  Button,
  TextField,
} from "@mui/material";

export const FormBox = styled(Box)`
  width: 190px;
  height: 454px;
  color: #000000ee;
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
  height: 454px;
  width: 190px;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  
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
    align-items: center;
  }
`;

export const inputBox = styled.div`
  width: 188px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #fff, #acf);
  opacity: 0.6;
  & .MuiTextField-root {
    width: 220px;
  }
  & .MuiInputLabel-root {
    width: 110px;
    font-family: fantasy;
    color: #000000ee;
    text-align: left;
  }
  & .MuiInputBase-input {
    font-family: fantasy;
    color: #000000ee;
    border-color: #000000ee;
    background-image: linear-gradient(180deg, #fff, #acf);
  }
  
  @media (max-width: 426px) {
    width: 270px;
    & .MuiTextField-root {
      width: 325px;
    }
  }
`;

export const InputText = styled(TextField)`
`;

export const SelectContainer = styled.div`
  width: 188px;
  
  @media (max-width: 426px) {
      width: 270px;
  }
`

export const Search = styled(Button)`
  width: 190px;
  height: 46px;
  
  @media (max-width: 426px) {
    width: 220px;
  }
`;
