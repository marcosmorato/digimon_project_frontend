import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled.div`
  width: 350px;
  height: 200px;
  display: flex;
  justify-content: center;
  /*   background-color: #ddd; */
  @media (max-width: 426px) {
    width: 310px;
    min-height: 130px;
  }
`;

export const LogoImg = styled(Box)`
  width: 100%;
  height: 100%;
  background-image: url("https://betterstudio.com/wp-content/uploads/2022/11/4-digimon-logo-SVG-betterstudio.com_.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
`;
