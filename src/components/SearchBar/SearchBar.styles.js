import styled from "styled-components";
import { colors, fontSize } from "../../globalStyle";

export const Wrapper = styled.div `
  background-color: ${colors.white};
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Header = styled.div `
  color: ${colors.textDark};
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    font-size: ${fontSize.title};
  }

  h2 {
    text-transform: uppercase;
    font-size: ${fontSize.body};
    font-weight: 800;
  }
`

export const Form = styled.form `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  select {
    width: 25%;
  }
`