import styled from "styled-components";
import { Button, TextField } from "@mui/material";

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
  height: 296px;
  width: 540px;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-style: italic;
  & button {
    font-style: italic;
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

export const InputBox = styled.div`
  width: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  
  @media (max-width: 426px) {
    width: 320px;
    justify-content: space-between;
  }
`;

export const Input = styled.div`
  width: 270px;
  height: 75px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  opacity: 0.8;
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
    
  @media (max-width: 426px) {
    width: 155px;
    & .MuiTextField-root {
      width: 155px;
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
    font-style: italic;
    border-color: #000 !important;
  }
`;
  
export const ButtonContainer = styled.div`
  width: 270px;
  height: 75px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 426px) {
    width: 155px;
  }
`;

export const CreateUser = styled(Button)`
  width: 220px;
  height: 56px;
  
  @media (max-width: 426px) {
    width: 155px;
  }
`;
