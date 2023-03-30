import styled from "styled-components";
import { deviceSize } from "../../globalStyle";

export const Wrapper = styled.section ` 
`

export const NewsList = styled.ul `
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: ${deviceSize.laptop}){
    flex-direction: row;
    gap: 1rem;
  }
`