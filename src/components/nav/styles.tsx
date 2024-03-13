import styled from "styled-components";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { theme } from '../../utils/globalStyles/theme'

export const ListMui = styled(List)`
  width: 210px;
  height: 454px;

  @media (max-width: 426px) {
    height: 340px;
    width: 300px;
  }
`;

export const ListItemButtonMui = styled(ListItemButton)`
  width: 206px;
  
  &:hover {
    & .MuiTypography-root {
      color: ${theme.colors.white};
    }
  }
  
  @media (max-width: 426px) {
    width: 296px;
  }
`;

export const ListItemIconMui = styled(ListItemIcon)`
  width: 154px;
  @media (max-width: 426px) {
    width: 264px;
  }
`;

export const ListItemTextMui = styled(ListItemText)`
  width: 154px;
  height: 100%;

  & .MuiTypography-root {
    font-family: fantasy;
    color: ${theme.colors.text};
    font-size: 20px;
  }
  
  @media (max-width: 426px) {
    width: 264px;
  }
`;
