import styled from "styled-components";
import {
  Box,
  Typography,
} from "@mui/material";

export const GamingContainer = styled.div`
background-color: #13151e;
color: #b8bbbf;
width: 100vw;
height: 100vh;
background-image: none;
display: flex;
align-items: center;
flex-direction: column;
`

export const ContainerSide = styled(Box)`
  width: 250px;
  height: 550px;
  box-shadow: 1px 1px 4px 4px #acf;
  border: 2px solid #000000ee;
  border-radius: 10px;
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
  
  & .MuiList-root {
    margin-top: 16px;
    font-size: 16px;
    background-image: linear-gradient(180deg, #fff, #acf);
    opacity: 0.8;
    border-radius: 8px;
    border: 2px solid #000000ee;
    box-shadow: 1px 1px 4px 4px #acf;
    padding-top: 0;

    & .MuiListItemButton-root {
      &:hover {
        background-image: linear-gradient(180deg, #000000ee, #acf);
        -webkit-text-stroke: 1px #000000ee;
      }
    }
    
    & .Mui-disabled {
      background-image: linear-gradient(180deg, #000000ee, #acf);
      opacity: 0.8;
      -webkit-text-stroke: 1px #000000ee;
      & .MuiTypography-root {
        color: #fff;
      }
    }
  }
  
  @media (max-width: 426px) {
    margin-bottom: 30px;
    height: 420px;
    width: 100%;
    margin-right: 0;
    & .MuiTypography-h3 {
      font-size: 2rem;
    }
  }
`;

export const ContainerNavGame = styled(Box)`
  background-color: #222430 !important;
  width: 250px;
  height: 86vh;
  box-shadow: 1px 1px 4px 4px #393A3B !important;
  border: 1px solid #3D4055;
  border-radius: 10px;
  color: #000000ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin-right: 28px;
  & .MuiTypography-h3 {
    /* font-family: fantasy; */
    text-align: center;
  }
  
  @media (max-width: 426px) {
    margin-bottom: 30px;
    height: 380px;
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
  & .MuiTypography-h3 {
    font-family: fantasy;
    text-align: center;
  }
  
  @media (max-width: 426px) {
    height: 800px;
    width: 100%;
    margin-top: 0px;
    & .MuiTypography-h3 {
      font-size: 2rem;
    }
  }
`;

export const ContainerPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  overflow-y: auto;
  @media (max-width: 426px) {
    justify-content: flex-start;
  }
`

export const ContainerBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 426px) {
    flex-direction: column;
    
  }
`;


export const TitleBox = styled(Typography)`
  height: 70px;
  width: 90%;
  color: #acf;
  -webkit-text-stroke: 1px #000000ee;
  
  /* @media (max-width: 426px) {
    height: 70px;
  } */
`;

export const DescriptionText = styled(Typography)`
  height: 30px;
  width: 200px;
  text-align: center;
  font-family: fantasy !important;
 
  @media (max-width: 426px) {
    height: 40px;
  }
`;
