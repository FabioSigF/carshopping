import styled from "styled-components";
import { borderRadius, colors, deviceSize } from "../../globalStyle";

export const Wrapper = styled.section `
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${colors.white};
  border-radius: ${borderRadius.normal};
  padding: 2rem 3rem;
  
`

export const List = styled.ul `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1rem;
  position: relative;

  @media screen and (min-width: ${deviceSize.tablet}){
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${deviceSize.laptopM}) {
    grid-template-columns: repeat(4, 1fr);
  }
`