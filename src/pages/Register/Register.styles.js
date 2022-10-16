import styled from "styled-components";
import { borderRadius, colors, fontSize } from "../../globalStyle";

export const Wrapper = styled.div `
  padding: 120px 0;
`

export const Title = styled.h2 `
  color: ${colors.titleDark};
  font-size: ${fontSize.titleSmall};
  font-weight: 700;
  margin-bottom: 3rem;
`

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 425px;
  margin: 0 auto;
`

export const Field = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Label = styled.label `
  font-size: ${fontSize.body};
  color: ${colors.textDark};
  font-weight: 600;

  `

export const Input = styled.input `

`
