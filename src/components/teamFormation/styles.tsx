import styled from "styled-components";
import { Box,  Typography } from "@mui/material";

export const TeamFormation = styled(Box)`
  
  & .MuiTypography-h5 {
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    color: #b8bbbf;
    background-color: #222430;
    box-shadow: 1px 1px 4px 4px #393A3B;
    border: 1px solid #3D4055;
    border-radius: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  
`;

export const Title = styled(Typography)`
  width: 710px;
  height: 8vh;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;

export const TeamContainer = styled(Box)`
  width: 710px;
  height: 26vh;
  background-color: #222430;
  box-shadow: 1px 1px 4px 4px #393A3B;
  border: 1px solid #3D4055;
  border-radius: 10px;
  color: #b8bbbf;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-top: 40px;
  padding: 12px;
`;

export const DigiContainer = styled(Box)`
  width: 300px;
  height: 8vh;
  color: #b8bbbf;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  
  & .MuiTypography-h6 {
    font-size: 14px;
    font-family: 'Sofia Sans', sans-serif;
    color: #b8bbbf;
    letter-spacing: 1.6px;
  }

  & .MuiTypography-subtitle1 {
    font-size: 36px;
    color: #00A2E2;
  }
  
  & .MuiTypography-subtitle2 {
    font-size: 14px;
    color: #00A2E2;
  }
`;

export const LevelTitle = styled(Typography)`
  width: 300px;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LevelInfo = styled(Typography)`
  width: 300px;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
`;

