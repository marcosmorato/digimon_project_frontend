import styled from "styled-components";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const ListMui = styled(List)`
  width: 190px;
  height: 430px;

  @media (max-width: 426px) {
    height: 308px;
    width: 300px;
  }
`;

export const ListItemButtonMui = styled(ListItemButton)`
  width: 186px;
  
  &:hover {
    color: #fff;
    & .MuiTypography-root {
      color: #fff;
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
    color: #000000ee;
    &:hover {
      color: white;
    }
  }
  
  @media (max-width: 426px) {
    width: 264px;
  }
`;
