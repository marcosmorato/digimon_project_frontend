import styled from "styled-components";
import {
  Box,
  Button,
  TextField,
  Typography
} from "@mui/material";

export const FormBox = styled(Box)`
  width: 210px;
  height: 454px;
  color: #000000ee;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(180deg, #fff, #acf);
    border-radius: 8px;
    border: 2px solid #000000ee;
    box-shadow: 1px 1px 4px 4px #acf;
  @media (max-width: 426px) {
    height: 424px;
    width: 325px;
    margin-top: 20px;
    padding: 12px 0px;
  }
`;

export const Label = styled(Typography)`
font-family: fantasy !important;
color: #000000 !important;
font-size: 18px !important;
margin-top: 10px !important;
`

export const Filters = styled.div`
  width: 190px;
  height: 408px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 426px) {
    height: 322px;
    width: 300px;
    align-items: center;
  }
`;

export const Filter = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 426px) {
    width: 300px;
    flex-direction: initial;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;

export const inputBox = styled.div`
  width: 180px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  & .MuiTextField-root {
    width: 220px;
    margin: 0;
  }
  & .MuiInputLabel-root {
    width: 110px;
    font-family: fantasy;
    text-align: left;
  }
  & .MuiInputBase-input {
    font-family: fantasy;
    color: #000000ee;
    border-color: #000000ee;
    border-radius: 4px;
    background-image: linear-gradient(180deg, #fff, #acf);
    
  }

  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #000000ee;
    }
  }
  
  @media (max-width: 426px) {
    width: 180px;
  }
`;

export const InputText = styled(TextField)`

`;

export const SelectContainer = styled.div`
  width: 180px;
  
  @media (max-width: 426px) {
      width: 180px;
  }
`

export const Buttons = styled.div`
  width: 190px;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  & .MuiButton-root{
    background-image: linear-gradient(180deg, #fff, #acf);
    color: #000000ee;
    border: 1px solid #000000ee;
    font-family: fantasy;
    text-transform: none;
    &:hover {
      background-image: linear-gradient(180deg, #000000ee, #acf);
      color: #fff !important;
      border: 1px solid #fff;
  }
  
  }
  @media (max-width: 426px) {
      width: 300px;
      margin-top: 26px;
  }
`

export const Search = styled(Button)`
  width: 110px;
  height: 36px;
  

  @media (max-width: 426px) {
    width: 180px;
  }
`;

export const Reset = styled(Button)`
  width: 70px;
  height: 36px;
  
  @media (max-width: 426px) {
    width: 80px;
  }
`;
