import styled from "styled-components";
import { deviceSize } from "../../globalStyle";

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`


export const CarsContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  margin-bottom: 1.5rem;
  @media screen and (min-width: ${deviceSize.tablet}){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${deviceSize.laptop}){
    grid-template-columns: repeat(3, 1fr);
  
  }
`