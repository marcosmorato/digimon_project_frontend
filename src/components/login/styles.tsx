import styled from "styled-components";
import { Box, Button, Dialog, DialogContent, TextField } from "@mui/material";

export const Container = styled.div`
  width: 582px;
  height: 470px;
  display: flex;
  align-items: center;
  /*   justify-content: flex-end; */
  flex-direction: column;
  justify-content: center;
  /*   background-color: #ddd; */
  @media (max-width: 426px) {
    width: 360px;
    padding: 12px;
    border-bottom: 1px solid #acf;
  }
`;

export const FormBox = styled(Box)`
  width: 582px;
  height: 354px;
  color: black;
  display: flex;
  align-items: center;
  border-right: 1px solid #acf;
  flex-direction: column;
  text-align: center;
  @media (max-width: 426px) {
    width: 338px;
    border-right: 0px;
  }
`;

export const DialogContentMui = styled(DialogContent)`
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  overflow: hidden;
  /* @media (min-width: 768px) {
    padding: 2rem;
  } */
`;

export const Form = styled.form`
  /*   background-color: rgba(255, 255, 255, 0.883); */
  height: 380px;
  width: 540px;
  overflow: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  font-style: italic;

  @media (max-width: 426px) {
    width: 338px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  width: 540px;
  margin-top: 20px;
  @media (max-width: 426px) {
    width: 320px;
    flex-direction: column;
    align-items: center;
  }
`;

export const inputBox = styled.div`
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-image: linear-gradient(180deg, #fff, #acf); */
  opacity: 0.6;
  & .MuiTextField-root {
    width: 220px;
    @media (max-width: 426px) {
      width: 270px;
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

export const InputText = styled(TextField)``;

export const CreateUser = styled(Button)`
  width: 220px;
  height: 56px;
  /* @media (max-width: 900px) {
    width: 150px;
    height: 30px;

    margin: 0 0.5rem;
    padding: 0 1rem;

    border-radius: 0.3rem;

    color: #ccc;
    background-color: #454d60;
    box-shadow: 4px 4px 4px 2px black;
    border-bottom: 2px solid #af5735;

    text-align: center;

    &:hover {
      cursor: pointer;

      background-color: #303542;
      border-bottom: 1px solid #af5735;

      box-shadow: 0.1em 0.1em 0.2em black;
    }
  }

  @media (min-width: 900px) {
    height: 80%;

    background-color: #ff7843;
    box-shadow: 4px 4px 4px 2px black;

    &:hover {
      background-color: #af5735;
    }

    @media (min-width: 900px) {
      height: 80%;
    }
  } */
`;
