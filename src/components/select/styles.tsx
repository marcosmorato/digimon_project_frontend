import styled from "styled-components";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { theme } from '../../utils/globalStyles/theme'

export const FormControlMui = styled(FormControl)<{ modalVersion?: string }>`
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;

  .MuiSelect-standard {
    border-bottom: 2px solid blue !important;
    background-image: linear-gradient(180deg, #ffeea8, #f6a325);
  }

  label {
    font-family: fantasy !important;
    color: ${theme.colors.text} !important;
    width: 80px;
    text-align: left;
  }

  .MuiSvgIcon-root {
    color: ${theme.colors.text};
  }

  .MuiOutlinedInput-notchedOutline {
    font-family: fantasy !important;
    color: ${theme.colors.text};
    outline: none !important;
  }

  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${theme.colors.black} !important;
    }
  }

  option {
    width: 10px;
  }

  & .MuiInputBase-input {
    color: ${theme.colors.text};
    font-family: fantasy !important;
    border-color: ${theme.colors.black} !important;

    background-image: linear-gradient(180deg, ${theme.colors.secondary}, ${theme.colors.primary});
  }
`;

export const SelectMui = styled(Select)`
  
  
`;

export const MenuItemMui = styled(MenuItem)`
    font-family: fantasy !important;
    color: ${theme.colors.text} !important;
`;