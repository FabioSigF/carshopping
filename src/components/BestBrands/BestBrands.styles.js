import styled from "styled-components";
import { borderRadius, colors } from "../../globalStyle";

export const Wrapper = styled.section `
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${colors.white};
  border-radius: ${borderRadius.normal};
  padding: 2rem 3rem;
`

export const List = styled.ul `
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`