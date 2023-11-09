import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  overflow-y: auto;
`;

export const ContainerBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (max-width: 426px) {
    flex-direction: column;
  }
`;
