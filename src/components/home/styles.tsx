import styled from "styled-components";
import { Box,  Typography } from "@mui/material";
import { theme } from '../../utils/globalStyles/theme'

export const InfoContainer = styled(Box)`
  width: 1022px;
  height: 430px;
  box-shadow: 1px 1px 4px 4px ${theme.colors.primary} !important;
  border: 2px solid ${theme.colors.black};
  border-radius: 10px;
  color: ${theme.colors.text};
  background-image: linear-gradient(180deg, ${theme.colors.secondary}, ${theme.colors.primary});
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
