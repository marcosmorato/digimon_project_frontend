import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  overflow-y: auto;
`;

export const SignContainer = styled.div`
  width: 1200px;
  box-shadow: 1px 1px 4px 4px #acf !important;
  border: 2px solid #000;
  border-radius: 10px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  @media (max-width: 426px) {
    /*     height: 470px;
    width: 100%; */
    width: 360px;
    flex-direction: column;
    & .MuiTypography-h3 {
      font-size: 2rem;
    }
  }
`;

export const LogoImg = styled(Box)`
  width: 100%;
  height: 20%;
  background-image: url("https://betterstudio.com/wp-content/uploads/2022/11/4-digimon-logo-SVG-betterstudio.com_.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
`;
