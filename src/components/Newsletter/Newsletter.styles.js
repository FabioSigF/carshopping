import styled from "styled-components";
import { colors, fontSize, transition } from "../../globalStyle";

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
  border-radius: 0px 5px 5px 0px;
  color: ${colors.white};
  cursor: pointer;
  padding: 1rem 1rem;
  transition: ${transition.default};
  &:hover {
    background-color: ${colors.black};
  }
`