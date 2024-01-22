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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-style: italic;
  overflow: auto;
  & button {
    font-style: italic;
    margin-top: 50px;
    &:hover {
      cursor: pointer;
      background-color: #000000ee;
      box-shadow: 0.1em 0.1em 0.2em #acf;
      
    }
  }
  
  @media (max-width: 426px) {
    width: 338px;
    height: 310px;
    justify-content: space-evenly;
  }
`;

export const InputBox = styled.div`
  width: 540px;
  display: flex;
  margin-top: 20px;
  
  @media (max-width: 426px) {
    width: 320px;
    height: 150px;
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
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
    color: #000000ee;
    font-family: fantasy;
    text-align: left;
  }
  & .MuiInputBase-input {
    color: #000000ee;
    background-image: linear-gradient(180deg, #fff, #acf);
    font-family: fantasy !important;
    border-color: #000000ee !important;
  }
  
  @media (max-width: 426px) {
    & .MuiTextField-root {
      width: 270px;
    }
  }
  
`;

export const InputText = styled(TextField)`
`;

export const Login = styled(Button)`
  width: 220px;
  height: 56px;
`;
