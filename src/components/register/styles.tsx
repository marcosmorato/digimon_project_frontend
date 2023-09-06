import styled from "styled-components";
import { Box, Button, Dialog, DialogContent, TextField } from "@mui/material";

export const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ddd;
`;

export const FormBox = styled(Box)`
  width: 75%;
  height: 70%;
  background-color: #fff;
  color: black;
  box-shadow: 1px 1px 4px 4px #acf;
  border-radius: 0px 10px 10px 0;
  display: flex;
  align-items: center;
  opacity: 0.7;
  flex-direction: column;
  &:hover {
    opacity: 0.9;
  }
`;

export const LogoImg = styled(Box)`
  width: 90%;
  height: 20%;
  background-image: url("https://betterstudio.com/wp-content/uploads/2022/11/4-digimon-logo-SVG-betterstudio.com_.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
`;

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
  background-color: rgba(255, 255, 255, 0.883);
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

export const InputContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputText = styled(TextField)``;

export const DialogMui = styled(Dialog)``;

export const CreateUser = styled(Button)`
  width: 20%;
  height: 10%;
  margin-top: 15px !important;
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
