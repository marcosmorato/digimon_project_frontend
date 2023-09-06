import styled from "styled-components";
import { Box, Button, Dialog, DialogContent, TextField } from "@mui/material";

export const Container = styled(Box)`
  width: 15%;
  height: 80%;
  background-color: #fff;
  box-shadow: 1px 1px 4px 4px black;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.7;
  &:hover {
    opacity: 0.9;
  }
  margin-top: 30px;
`;
