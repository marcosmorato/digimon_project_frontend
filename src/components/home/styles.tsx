import styled from "styled-components";
import { Box, Button, Dialog, DialogContent, TextField } from "@mui/material";

export const ShowInfo = styled(Button)`
  width: 20%;
  height: 12%;
  display: flow !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  text-transform: none !important;
  white-space: nowrap;
  margin: 0 20px !important;
  border: 2px solid black !important;
  box-shadow: 1px 1px 4px 4px #acf !important;

  font-family: fantasy !important;
  color: black !important;
  /* background-image: linear-gradient(180deg, #ffeea8, #f6a325); */
  background-color: white !important;
  font-size: 16px !important;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    background-color: black !important;
    color: white !important;
  }
`;
