import styled, { css } from "styled-components";
import { colors, fontSize, transition } from "../../globalStyle";

export const Wrapper = styled.a `
  color: ${colors.white};
  font-size: ${fontSize.body};
  font-weight: 600;
  line-height: ${fontSize.body};
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  transition: ${transition.default};

  &:hover {
    color: ${colors.primary}
  }

  ${props =>
    props.dark &&
    css`
      color: ${colors.black};
      &:hover {
        color: ${colors.primary}
      }
    `}

`