import styled from "styled-components";
import { deviceSize } from "../../globalStyle";

export const Wrapper = styled.section ` 
  padding-top: 4rem;
  padding-bottom: 4rem;
`

export const Header = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 2.5rem;
  gap: 1.5rem;
  max-width: 70%;
  text-align: center;
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