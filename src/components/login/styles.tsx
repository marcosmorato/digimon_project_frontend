import styled from "styled-components";
import { Button, TextField, Typography, Modal, Paper } from "@mui/material";
import FeedbackIcon from '@mui/icons-material/Feedback';

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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  
  @media (max-width: 426px) {
    width: 338px;
    height: 310px;
    justify-content: space-evenly;
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
    height: 226px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0px;
  }
`;

export const InputBox = styled.div`
  width: 270px;
  height: 75px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  & .MuiTextField-root {
    width: 220px;
    margin: 0;
  }
  label {
    width: 110px;
    color: #000000ee;
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
    justify-content: center;
    height: 70px;
    & .MuiTextField-root {
      width: 240px;
      height: 70px;
    }
  }
  
`;

export const InputText = styled(TextField)`
`;

export const ButtonBox = styled.div`
  width: 220px;
  height: 56px;
  display: flex;
  align-items: center;
  margin-top: 20px;
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
      margin-top: 12px;
      width: 180px;
      height: 50px;
  }
`

export const Login = styled(Button)`
  width: 220px;
  height: 56px;
  @media (max-width: 426px) {
      margin-top: 16px;
      width: 180px;
      height: 50px;
  }
`;

export const ModalUi = styled(Modal)`
  background-color: rgba(1, 3, 45, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaperInfo = styled(Paper)`
  width: 300px;
  height: 300px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: linear-gradient(180deg, #040024, #000000 );
  border: 2px solid #000;
  background-size: cover;
  box-shadow: 1px 1px 4px 4px #acf !important;
  padding: 16px;
  
  & .MuiTypography-root {
    font-family: fantasy;
    color: #acf;
    -webkit-text-stroke: 1px #000000ee;
    font-size: 18px;
    margin-top: 10px;
    text-align: center;
  }
  
  & .MuiSvgIcon-root {
    width: 50px;
    height: 50px;
  }
  
  @media (max-width: 426px) {
    width: 352px;
    height: 780px;
    top: 20px;
    left: 36px;
    justify-content: flex-start;
    background-position: left;
    padding: 12px;
    background-image: linear-gradient(90deg, #040024, #000000 );
    & .MuiTypography-h2 {
      font-size: 2rem;
    }
  }
`;

export const FeedbackIconMui = styled(FeedbackIcon)`
  z-index: 1;
  color: #fff;
  /* width: 50px !important;
  height: 50px !important; */

`