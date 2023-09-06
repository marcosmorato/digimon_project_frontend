import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled.div`
  width: 60%;
  height: 20%;
  display: flex;
  justify-content: center;
  background-color: #ddd;
`;

export const LogoImg = styled(Box)`
  width: 100%;
  height: 100%;
  background-image: url("https://betterstudio.com/wp-content/uploads/2022/11/4-digimon-logo-SVG-betterstudio.com_.svg");
  background-position: center;
  /* background-repeat: no-repeat; */
  background-size: contain;
  overflow: hidden;
`;
