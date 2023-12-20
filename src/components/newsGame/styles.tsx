import styled from "styled-components";
import { Box,  Typography } from "@mui/material";
import { typography } from "@mui/system";

export const HomeContainer = styled(Box)`
  width: 1098px;
  height: 86vh;
  /* box-shadow: 1px 1px 4px 4px #393A3B !important; */
  /* border: 2px solid #000000ee; */
  /* border-radius: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #222430 !important; */
  & .MuiTypography-root {
    font-size: 28px;
    letter-spacing: 1.6px;
    font-weight: bold;
    font-family: IBM Plex Sans;
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
  @media (max-width: 426px) {
    height: 800px;
    width: 100%;
    margin-top: 0px;
  }
`;

export const ContainerNew = styled.div`
  & .MuiTypography-root {
    font-size: 28px;
    letter-spacing: 1.6px;
    font-weight: bold;
    font-family: IBM Plex Sans;
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
    border: dashed 1px #3D4055
  }
  
  & .MuiTypography-root {
    font-family: Orbitron;
    font-size: 16px;
  };
  
  @media (max-width: 426px) {
    height: 800px;
    width: 100%;
    margin-top: 0px;
  }
`;

export const DateNew = styled(Typography)`
  width: 686px;
  height: 6vh;
  color: #b8bbbf;
  display: flex;
  padding: 12px;
  display: flex;
  justify-content: flex-end;
  font-family: Orbitron;
  @media (max-width: 426px) {
    height: 800px;
    width: 100%;
    margin-top: 0px;
  }
`;

export const TitleNew = styled(Typography)`
  width: 662px;
  height: 4vh;
  background-color: #525252 !important;
  box-shadow: 1px 1px 4px 4px #393A3B !important;
  border: 1px solid #3D4055;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  @media (max-width: 426px) {
    height: 800px;
    width: 100%;
    margin-top: 0px;
  }
`;