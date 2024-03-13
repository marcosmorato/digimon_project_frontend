import styled from "styled-components";
import { theme } from '../../utils/globalStyles/theme'

export const SignContainer = styled.div`
  max-width: 1200px;
  box-shadow: 1px 1px 4px 4px ${theme.colors.primary};
  border: 2px solid ${theme.colors.black};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, ${theme.colors.secondary}, ${theme.colors.primary});
  box-shadow: 1px 1px 4px 4px ${theme.colors.tertiary};
  @media (max-width: 426px) {
    flex-direction: column;
    & .MuiTypography-h3 {
      font-size: 2rem;
    }
  }
`;

export const Hr = styled.div`
  width: 2px;
  height: 376px;
  background-color: ${theme.colors.black};
  box-shadow: 1px 1px 4px 3px ${theme.colors.primary};
  
  @media (max-width: 426px) {
    width: 328px;
    height: 2px;
    background-color: ${theme.colors.black};
  }
`