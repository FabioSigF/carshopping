import styled from "styled-components";
import { deviceSize } from "../../globalStyle";

export const Wrapper = styled.section `

`

export const List = styled.div `
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;

  @media screen and (min-width: ${deviceSize.laptopM}) {
    gap: 1rem;
    justify-content: space-between;
  }
`