import styled from "styled-components";
import { colors, fontSize } from "../../globalStyle";

export const Wrapper = styled.div`
  width: 123px;
`

export const Title = styled.h1 `
  color: ${colors.white};
  font-size: ${fontSize.bodyLarge};
  font-weight: 800;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  & > span {
    color: ${colors.primary};
  }
  margin-bottom: .2rem;
`

export const Subtitle = styled.span `
  color: ${colors.white};
  display: flex;
  font-size: .5rem;
  justify-content: space-between;
  padding-right: .2rem;
  max-width: 100%;
  text-transform: uppercase;
`