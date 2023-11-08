import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled.div`
  width: 1440px;
  height: 868px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  overflow-y: auto;
  justify-content: center;
`;

export const SignContainer = styled.div`
  width: 1200px;
  box-shadow: 1px 1px 4px 4px #acf;
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