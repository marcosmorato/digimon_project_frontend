import styled from "styled-components";
import { Box, Typography } from "@mui/material";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const HeaderContainer = styled(Box)`
  width: 100vw;
  height: 60px;
  background-color: #222430 !important;
  margin-bottom: 26px;
  border-bottom: 1px solid #3D4055;
  box-shadow: 1px 1px 4px 4px #393A3B !important;
  display: flex;
  align-items: center;
  justify-content: center;
  
  & .MuiTypography-root {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 14px;
    text-align: left;
    text-decoration: none;
    outline: 0;
    font-weight: bold;
    /* color: #12a5ff; */
    /* background-color: #13151e; */
   
    color: #b8bbbf;
  }
  & .MuiSvgIcon-root {
    width: 32px;
    height: 32px;
    margin: 0px 2px;
  }
  @media (max-width: 426px) {
    width: 310px;
    min-height: 130px;
  }
`;

export const Nickname = styled(Typography)`

  @media (max-width: 426px) {
    width: 310px;
    min-height: 130px;
  }
`;

export const AvatarIcon = styled(AccountCircleIcon)`
    z-index: 1; /* Para garantir que os ícones estejam acima da imagem */
    color: #b8bbbf;
    opacity: 0.9;
    top: 10px;
    right: 10px;
    z-index: 1;
`

