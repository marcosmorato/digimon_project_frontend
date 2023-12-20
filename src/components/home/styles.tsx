import styled from "styled-components";
import { Box,  Typography } from "@mui/material";

export const InfoContainer = styled(Box)`
  width: 1022px;
  height: 430px;
  box-shadow: 1px 1px 4px 4px #acf !important;
  border: 2px solid #000000ee;
  border-radius: 10px;
  color: #000000ee;
  background-color: #fff;
  opacity: 0.6;
  margin-top: 20px;
  padding: 16px;
  overflow-y: auto;
  
  @media (max-width: 426px) {
    width: 310px;
    height: 726px;
    padding: 12px;
  }

`

export const DescriptionText = styled(Typography)`
  height: 320px;
  width: 968px;
  
  @media (max-width: 426px) {
    height: 1120px;
    width: 280px;
  }
`;
