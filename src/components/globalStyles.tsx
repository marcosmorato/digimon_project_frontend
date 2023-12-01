import styled from "styled-components";
import {
  Box,
  Typography,
} from "@mui/material";

export const ContainerSide = styled(Box)`
  width: 250px;
  height: 550px;
  box-shadow: 1px 1px 4px 4px #acf !important;
  border: 2px solid #000000ee;
  border-radius: 10px;
  color: #000000ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 16px;
  margin-right: 28px;
  & .MuiTypography-h3 {
    font-family: fantasy;
    text-align: center;
  }
  
  @media (max-width: 426px) {
    margin-bottom: 30px;
    height: 350px;
    width: 100%;
    margin-right: 0;
    & .MuiTypography-h3 {
      font-size: 2rem;
    }
  }
`;

export const ContainerFilter = styled(Box)`
  width: 250px;
  height: 550px;
  box-shadow: 1px 1px 4px 4px #acf !important;
  border: 2px solid #000000ee;
  border-radius: 10px;
  color: #000000ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 16px;
  margin-left: 8px;
  & .MuiTypography-h3 {
    font-family: fantasy;
    text-align: center;
  }
  
  @media (max-width: 426px) {
    margin-bottom: 30px;
    height: 500px;
    width: 100%;
    & .MuiTypography-h3 {
      font-size: 2rem;
    }
  }
`;

export const ContainerCenter = styled(Box)`
  width: 820px;
  height: 550px;
  box-shadow: 1px 1px 4px 4px #acf !important;
  border: 2px solid #000000ee;
  border-radius: 10px;
  color: #000000ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin-top: 30px;
  margin-right: 20px;
  & .MuiTypography-h3 {
    font-family: fantasy;
    text-align: center;
  }

  @media (max-width: 426px) {
    height: 800px;
    width: 100%;
    margin: 0 0;
    & .MuiTypography-h3 {
      font-size: 2rem;
    }   
  }
`;

export const ContainerExtra = styled(Box)`
  width: 1098px;
  height: 550px;
  box-shadow: 1px 1px 4px 4px #acf !important;
  border: 2px solid #000000ee;
  border-radius: 10px;
  color: #000000ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin-top: 30px;
  & .MuiTypography-root {
    font-family: fantasy;
  }
  
  @media (max-width: 426px) {
    height: 800px;
    width: 100%;
    & .MuiTypography-h3 {
      font-size: 2rem;
    }
  }
`;

export const TitleBox = styled(Typography)`
  height: 60px;
  width: 90%;
  color: #000000ee;
  -webkit-text-stroke: 1px #acf;
  
  @media (max-width: 426px) {
    height: 40px;
  }
`;

export const DescriptionText = styled(Typography)`
  height: 30px;
  width: 90%;
  font-family: fantasy !important;
  
  @media (max-width: 426px) {
    height: 40px;
  }
`;
