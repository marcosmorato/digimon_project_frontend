import styled from "styled-components";
import {
  Box,
  Button,
  Typography,
  DialogContent,
  TextField,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';

import EggOutlinedIcon from '@mui/icons-material/EggOutlined';

import DirectionsSubwayFilledOutlinedIcon from '@mui/icons-material/DirectionsSubwayFilledOutlined';

import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';

import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';

import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


export const HomeIcon = styled(HomeOutlinedIcon)`
    z-index: 1; /* Para garantir que os ícones estejam acima da imagem */
    color: #b8bbbf;
    opacity: 0.9;
    width: 24px;
    height: 23px;
    top: 10px;
    right: 10px;
    z-index: 1;
`;

export const BagIcon = styled(BusinessCenterOutlinedIcon)`
    z-index: 1; /* Para garantir que os ícones estejam acima da imagem */
    color: #b8bbbf;
    opacity: 0.9;
    width: 24px;
    height: 23px;
    top: 10px;
    right: 10px;
    z-index: 1;
`;

export const DigiStorageIcon = styled(WarehouseOutlinedIcon)`
    z-index: 1; /* Para garantir que os ícones estejam acima da imagem */
    color: #b8bbbf;
    opacity: 0.9;
    width: 24px;
    height: 23px;
    top: 10px;
    right: 10px;
    z-index: 1;
`;

export const IncubatorIcon = styled(EggOutlinedIcon)`
    z-index: 1; /* Para garantir que os ícones estejam acima da imagem */
    color: #b8bbbf;
    opacity: 0.9;
    width: 24px;
    height: 23px;
    top: 10px;
    right: 10px;
    z-index: 1;
`;

export const ExplorationIcon = styled(DirectionsSubwayFilledOutlinedIcon)`
    z-index: 1; /* Para garantir que os ícones estejam acima da imagem */
    color: #b8bbbf;
    opacity: 0.9;
    width: 24px;
    height: 23px;
    top: 10px;
    right: 10px;
    z-index: 1;
`

export const TrainingIcon = styled(FitnessCenterOutlinedIcon)`
    z-index: 1; /* Para garantir que os ícones estejam acima da imagem */
    color: #b8bbbf;
    opacity: 0.9;
    width: 24px;
    height: 23px;
    top: 10px;
    right: 10px;
    z-index: 1;
`;

export const DigicodeIcon = styled(MemoryOutlinedIcon)`
    z-index: 1; /* Para garantir que os ícones estejam acima da imagem */
    color: #b8bbbf;
    opacity: 0.9;
    width: 24px;
    height: 23px;
    top: 10px;
    right: 10px;
    z-index: 1;
`;

export const heartIcon = styled(FavoriteOutlinedIcon)`
    z-index: 1; /* Para garantir que os ícones estejam acima da imagem */
    color: #b8bbbf;
    opacity: 0.9;
    top: 10px;
    right: 10px;
    z-index: 1;
`;

export const ListMui = styled(List)`
  width: 190px;
  height: 430px;
  font-size: 16px !important;
  margin-top: 20px !important;
  
  & .MuiListItemButton-root {
    &:hover {
      background-color: #000000ee;
    }
  }

  & hr {
    border-color: #3d4055;
  }
  
  @media (max-width: 426px) {
    height: 260px;
    width: 300px;
  }
`;

export const ListSubheaderMui = styled(ListSubheader)`
  font-family: fantasy !important;
`;

export const ListItemButtonMui = styled(ListItemButton)`
    width: 100%;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 16px !important; */
  &:hover {
    color: white;
    border-radius: 16px !important; 
    & .MuiTypography-root {
      color: white;
    }
  }
`;

export const ListItemIconMui = styled(ListItemIcon)`
    width: 100%;
    
    & .MuiListItemText-root {
        margin: 4px;
    }
`;

export const ListItemTextMui = styled(ListItemText)`
  /* font-family: fantasy !important; */
  width: 100%;
  height: 100%;

  & .MuiTypography-root {
    font-family: 'IBM Plex Sans', sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    text-align: left;
    text-decoration: none;
    outline: 0;
    /* color: #12a5ff; */
    /* background-color: #13151e; */
   
    color: #b8bbbf;
    &:hover {
      color: white;
    }
  }
`;

export const Footer = styled.div`
     & .MuiTypography-root {
    color: #000000ee;
    font-family: 'IBM Plex Sans', sans-serif;
    text-transform: uppercase;
    font-size: 8px;
    text-align: center;
    text-decoration: none;
    outline: 0;
    color: #b8bbbf;
  }
`

export const FooterText = styled(Typography)`

    text-align: center;
    & .MuiSvgIcon-root {
        color: #eb0505;
        width: 12px;
        height: 12px;
    }
  
`
