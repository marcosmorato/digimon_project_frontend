import styled from "styled-components";
import { Box,  Typography } from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';

export const HomeContainer = styled(Box)`
  width: 710px;
  height: 86vh;
  /* box-shadow: 1px 1px 4px 4px #393A3B !important; */
  /* border: 2px solid #000000ee; */
  /* border-radius: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #222430 !important; */

  @media (max-width: 426px) {
    height: 800px;
    width: 100%;
    margin-top: 0px;
    & .MuiTypography-root {
      font-size: 1rem;
    }
  }
`;


export const HomeNav = styled.div`
  width: 710px;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 426px) {
    width: 310px;
    height: 726px;
    padding: 12px;
  }

`

export const ContainerIcon = styled.div`
    height: 36px;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #222430 !important;
    box-shadow: 1px 1px 4px 4px #393A3B !important;
    border: 1px solid #3D4055;
    border-radius: 10px;
    color: #b8bbbf;
    margin: 0px 10px;
`

export const ProfileIcon = styled(PermIdentityOutlinedIcon)`

`

export const SettingIcon = styled(SettingsOutlinedIcon)`

`

export const NewsIcon = styled(NewspaperOutlinedIcon)`

`