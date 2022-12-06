import styled from "styled-components";
import { deviceSize } from "../../globalStyle";

export const Wrapper = styled.section ` 
  padding-top: 4rem;
  padding-bottom: 4rem;
`

export const NewsList = styled.ul `
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 10rem;

  @media screen and (min-width: ${deviceSize.laptop}){
    flex-direction: row;
    gap: 1rem;
  }
`