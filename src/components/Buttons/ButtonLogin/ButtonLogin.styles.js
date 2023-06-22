import styled from "styled-components";
import { colors, fontSize, transition } from "../../../globalStyle";

export const  Wrapper = styled.button `
  color: ${colors.white};
  border: 1px solid ${colors.primary};
  background-color: ${colors.primary};
  font-size: ${fontSize.small};
  font-weight: 600;
  cursor: pointer;
  
  padding-top: .5rem;
  padding-bottom: .5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  transition: ${transition.default};

  &:hover {
    background-color: ${colors.white};
    border-color: ${colors.black};
    color: ${colors.black}
  }

`