import styled from "styled-components";

export const SignContainer = styled.div`
  max-width: 1200px;
  box-shadow: 1px 1px 4px 4px #acf;
  border: 2px solid #000;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://i.pinimg.com/736x/f4/32/29/f43229c63e4260d277251c1cea812801.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media (max-width: 426px) {
    flex-direction: column;
    & .MuiTypography-h3 {
      font-size: 2rem;
    }
  }
`;

export const Hr = styled.div`
  width: 2px;
  height: 356px;
  background-color: #000000ee;
  box-shadow: 1px 1px 4px 3px #acf;
  
  @media (max-width: 426px) {
    width: 328px;
    height: 2px;
    background-color: #000000ee;
  }
`