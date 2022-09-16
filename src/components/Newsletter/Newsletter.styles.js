import styled from "styled-components";
import { colors, fontSize } from "../../globalStyle";

export const Wrapper = styled.section `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Cta = styled.h3 `
  color: ${colors.titleLight};
  font-size: ${fontSize.titleSmall};
  font-weight: 700;
`

export const Form = styled.form `
  display: flex;
  align-items: center;
`
export const Input = styled.input `
  width: 100%;
  background-color: ${colors.bodyBg};
  border-radius: 5px 0 0 5px;
  padding: 1rem;
`

export const Submit = styled.input `
  background-color: ${colors.primary};
  color: ${colors.white};
  border-radius: 0px 5px 5px 0px;
  padding: 1rem 1rem;
`