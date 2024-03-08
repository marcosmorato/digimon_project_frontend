import styled from "styled-components";

export const SignContainer = styled.div`
  max-width: 1200px;
  box-shadow: 1px 1px 4px 4px #acf;
  border: 2px solid #000;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #fff, #acf);
  box-shadow: 1px 1px 4px 4px rgba(1, 3, 45, 1);
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
  background-color: #000000ee;
  box-shadow: 1px 1px 4px 3px #acf;
  
  @media (max-width: 426px) {
    width: 328px;
    height: 2px;
    background-color: #000000ee;
  }
`