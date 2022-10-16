import styled from "styled-components";
import { borderRadius, colors, deviceSize, fontSize } from "../../globalStyle";
export const Wrapper = styled.div `
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgb(12 8 0 / 3%), 0 0.275rem 1.25rem -0.0625rem rgb(12 8 0 / 5%);
`

export const Form = styled.form `
  background-color: ${colors.bodyBg};
  border-radius: ${borderRadius.normal};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2rem;

  @media screen and (min-width: ${deviceSize.mobileL}) {
    flex-direction: row;
    align-items: flex-end;
    flex-wrap: wrap;
  }
`

export const Field = styled.div `
  display: flex;
  flex-direction: column;
  gap: .5rem;
  flex: 1;
`

export const Label = styled.label `
  color: ${colors.textDark};
  font-weight: 700;
`

export const Select = styled.select `

`

export const Option = styled.option  `
  
`