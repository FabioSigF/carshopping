import styled from "styled-components";
import { borderRadius, colors, pseudoElementCfg, transition } from "../../globalStyle";

export const Wrapper = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

export const Item = styled.li`

`

export const Hamburger = styled.button`
  position: relative;
  width: 30px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  cursor: pointer;
  div,
  &::before,
  &::after {
    background-color: ${colors.white};
    border-radius: ${borderRadius.normal};
    height: 3px;
    transition: ${transition.default};
  }
  &::before,
  &::after {
    ${pseudoElementCfg}
  }
  div{
    width: 80%;
  }
  &::before {
    width: 95%;
    top: 0;
  }
  &::after {
    width: 60%;
    bottom: 0;
  }
  &:hover {
    div,
    &::before,
    &::after{
      width: 30px;
      
    }
  }
`