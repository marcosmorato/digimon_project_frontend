import styled from "styled-components";
import { Box } from "@mui/material";

export const LogoImg = styled(Box)`
  width: 350px;
  height: 200px;
  background-image: url("https://betterstudio.com/wp-content/uploads/2022/11/4-digimon-logo-SVG-betterstudio.com_.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  margin-bottom: 20px;
  @media (max-width: 426px) {
    width: 310px;
    min-height: 130px;
  }
`;
