import styled from "styled-components";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export const FormControlMui = styled(FormControl)<{ modalVersion?: string }>`
  width: ${(props) => (props.modalVersion === "modal" ? "188px" : "220px")};
  text-align: left;

  margin-bottom: 1rem;
  opacity: 0.6;
  .MuiSelect-standard {
    border-bottom: 2px solid blue !important;
    background-image: linear-gradient(180deg, #ffeea8, #f6a325);
  }

  label {
    font-family: fantasy !important;
    color: black !important;
    width: 80px;
    text-align: left;
    /* -webkit-text-stroke: 1px #acf; */
  }

  .MuiSvgIcon-root {
    color: black;
  }

  .MuiOutlinedInput-notchedOutline {
    font-family: fantasy !important;
    color: black;
    border-color: black !important; /* Importante para sobrescrever as configurações padrão */
    outline: none !important;
  }

  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: black !important;
    }
  }

  option {
    width: 10px; /* Remova as aspas em torno de "10px" */
  }

  & .MuiInputBase-input {
    color: black;
    /* -webkit-text-stroke: 1px #acf; */
    font-family: fantasy !important;
    border-color: black !important;

    background-image: linear-gradient(180deg, #fff, #acf);
  }
`;

export const InputLabelMui = styled(InputLabel)`
  /* color: white !important; */
`;

export const MenuItemMui = styled(MenuItem)``;

export const SelectMui = styled(Select)`
  /* border-bottom: 2px solid red; */
`;

/* 

& .MuiInputBase-input {

  border-bottom: 2px solid yellow !important;


  &:hover {
    border-bottom: 2px solid red !important;
  }

  &.Mui-focused {
    border-bottom: 2px solid red !important; 


    &::after {
      border-bottom: 2px solid red !important; 
    }
  }
} */
