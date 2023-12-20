import styled from "styled-components";
import { Box,  Typography } from "@mui/material";

export const ProfileContainer = styled(Box)`
  
  & .MuiTypography-root {
    font-size: 28px;
    letter-spacing: 1.6px;
    font-weight: bold;
    font-family: IBM Plex Sans;
  }
  
`;

export const Nickname = styled(Typography)`
  width: 710px;
  height: 8vh;
  background-color: #222430 !important;
  box-shadow: 1px 1px 4px 4px #393A3B !important;
  border: 1px solid #3D4055;
  border-radius: 10px;
  color: #b8bbbf;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 426px) {
    height: 800px;
    width: 100%;
    margin-top: 0px;
  }
`;