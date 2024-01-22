import styled from "styled-components";
import { Box,  Typography } from "@mui/material";
import { typography } from "@mui/system";

export const HomeContainer = styled(Box)`
  width: 1098px;
  height: 86vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .MuiTypography-root {
    font-size: 28px;
    letter-spacing: 1.6px;
    font-weight: bold;
    font-family: 'IBM Plex Sans', sans-serif;
  }
  
  @media (max-width: 426px) {
    height: 800px;
    width: 100%;
    margin-top: 0px;
    & .MuiTypography-root {
      font-size: 1rem;
    }
  }
`;

export const Title = styled(Typography)`
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
  text-transform: uppercase;
  @media (max-width: 426px) {
    height: 800px;
    width: 100%;
    margin-top: 0px;
  }
`;

export const ContainerNew = styled.div`
  & .MuiTypography-h3 {
    font-size: 28px;
    letter-spacing: 1.6px;
    font-weight: bold;
    font-family: 'IBM Plex Sans', sans-serif;
  }
`

export const New = styled(Box)`
  width: 710px;
  height: 30vh;
  background-color: #222430 !important;
  box-shadow: 1px 1px 4px 4px #393A3B !important;
  border: 1px solid #3D4055;
  border-radius: 10px;
  color: #b8bbbf;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  
  & hr {
    width: 662px;
    border: dashed 1px #3D4055;
  }
    
  & .MuiTypography-h4 {
    color: #b8bbbf;
    padding: 12px;
    display: flex;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.6px;
    justify-content: flex-end;
    font-family: Orbitron, sans-serif;
  }
  
  & .MuiTypography-h5 {
    display: flex;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1.6px;
    justify-content: flex-end;
    font-family: Orbitron, sans-serif;
    margin-top: 12px;
    padding: 12px;
    background-color: #525252;
    color: #b8bbbf;
  }
  
  & .MuiTypography-subtitle1 {
    color: #b8bbbf;
    padding: 12px;
    display: flex;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1.6px;
    justify-content: flex-end;
    margin-top: 12px;
    font-family: math, sans-serif;
  }

`;

export const DateNew = styled(Typography)`
    width: 686px;
    height: 6vh;
`;

export const TitleNew = styled(Typography)`
  width: 662px;
  height: 5vh;
  border-bottom: 1px solid #3D4055;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const DescriptionNew = styled(Typography)`
  width: 662px;
  height: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;