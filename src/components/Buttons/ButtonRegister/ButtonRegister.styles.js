import styled from "styled-components";
import { colors, fontSize, transition } from "../../../globalStyle";

export const Wrapper = styled.button`
  background-color: ${colors.white};
  border: 1px solid ${colors.white};
  color: ${colors.black};
  
  font-size: ${fontSize.small};
  font-weight: 600;
  cursor: pointer;
  
  padding-top: .5rem;
  padding-bottom: .5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  transition: ${transition.default};

  &:hover {
    color: ${colors.white};
    border-color: ${colors.black};
    background-color: ${colors.primary};  
  }

`