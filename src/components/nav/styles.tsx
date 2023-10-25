import styled from "styled-components";
import {
  Box,
  Button,
  Typography,
  DialogContent,
  TextField,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const ListMui = styled(List)`
  width: 190px;
  height: 430px;

  background-color: white !important;
  font-size: 16px !important;
  opacity: 0.6;
  border-radius: 10px;
  border: 2px solid black;
  box-shadow: 1px 1px 4px 4px #acf !important;
  margin-top: 20px !important;
  & .MuiListItemButton-root {
    &:hover {
      background-color: black;
    }
  }
  @media (max-width: 426px) {
    height: 250px;
    width: 300px;
  }
`;

export const ListSubheaderMui = styled(ListSubheader)`
  font-family: fantasy !important;
`;

export const ListItemButtonMui = styled(ListItemButton)`
  width: 100%;
  &:hover {
    color: white;
    & .MuiTypography-root {
      color: white;
    }
  }
`;

export const ListItemIconMui = styled(ListItemIcon)`
  width: 100%;
`;

export const ListItemTextMui = styled(ListItemText)`
  font-family: fantasy !important;
  width: 100%;
  height: 100%;

  & .MuiTypography-root {
    color: black;

    font-family: fantasy;
    &:hover {
      color: white;
    }
  }
`;
