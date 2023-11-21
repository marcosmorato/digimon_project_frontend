import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled.div`
  /* width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  overflow-y: auto;
  overflow-x: hidden; */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  overflow-y: auto;
  overflow-x: hidden;
  justify-content: center;
  @media (max-width: 426px) {
    justify-content: flex-start;
  }
`;

export const ContainerBody = styled.div`
  /* max-width: 1098px; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 426px) {
    flex-direction: column;
  }
`;
