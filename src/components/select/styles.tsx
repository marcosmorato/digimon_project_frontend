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
  width: 100%;
  text-align: left;

  margin-bottom: 1rem;
  opacity: 0.8;

  .MuiSelect-standard {
    border-bottom: 2px solid blue !important;
    background-image: linear-gradient(180deg, #ffeea8, #f6a325);
  }

  label {
    font-family: fantasy !important;
    color: #000000ee !important;
    width: 80px;
    text-align: left;
  }

  .MuiSvgIcon-root {
    color: #000000ee;
  }

  .MuiOutlinedInput-notchedOutline {
    font-family: fantasy !important;
    color: #000000ee;
    outline: none !important;
  }

  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #000000ee !important;
    }
  }

  option {
    width: 10px;
  }

  & .MuiInputBase-input {
    color: #000000ee;
    font-family: fantasy !important;
    border-color: #000000ee !important;

    background-image: linear-gradient(180deg, #fff, #acf);
  }
`;

export const SelectMui = styled(Select)`
  
  
`;

export const MenuItemMui = styled(MenuItem)`
    font-family: fantasy !important;
    color: #000000ee !important;
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
