import styled from "styled-components";
import { Button, TextField, Typography } from "@mui/material";

export const Container = styled.div`
  width: 582px;
  height: 470px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  & .MuiTypography-root {
    font-family: fantasy;
    text-align: center;
  }
  
  @media (max-width: 426px) {
    width: 360px;
    padding: 12px;
  }
`;

export const Form = styled.form`
  height: 306px;
  width: 540px;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & button {
    &:hover {
      cursor: pointer;
      background-color: #000000ee;
      box-shadow: 0.1em 0.1em 0.2em #acf;
      
    }
  }
  
  @media (max-width: 426px) {
    width: 338px;
    margin-top: 30px;
  }
`;

export const Label = styled(Typography)`

`

export const InputContainer = styled.div`
  width: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 426px) {
    width: 320px;
    justify-content: space-between;
  }
`;

export const Input = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  
  & .MuiTypography-root {
    font-family: fantasy;
    color: #000000ee;
    font-size: 18px;
    margin-top: 10px;
  }
  
  @media (max-width: 426px) {
    width: 150px;
    justify-content: center;
    align-items: center;
  }
`;

export const InputBox = styled.div`
  width: 260px;
  height: 65px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  & .MuiTextField-root {
    width: 220px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  label {
    width: 110px;
    font-family: fantasy;
    color: #000000ee;
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
    width: 150px;
    & .MuiTextField-root {
      width: 150px;
    }
  }
`;

export const InputText = styled(TextField)`
  & .MuiInputBase-input {
    color: #000000ee;
    font-family: fantasy;
    background-image: linear-gradient(180deg, #fff, #acf);
  }
  
  & .Mui-focused {
    color: #1976d2;
    border-color: #000 !important;
  }
`;
  
export const ButtonBox = styled.div`
  width: 260px;
  height: 102px;
  display: flex;
  justify-content: center;
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
      width: 150px;
  }
`;

export const CreateUser = styled(Button)`
  width: 220px;
  height: 56px;
  
  @media (max-width: 426px) {
    width: 125px;
    height: 46px;
  }
`;
