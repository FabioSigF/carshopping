import styled from "styled-components";
import { borderRadius, colors, fontSize, pseudoElementCfg, transition } from "../../globalStyle";

export const Wrapper = styled.header`
  background-color: ${colors.secondary};
  border-bottom: 1px solid rgba(255,255,255,0.06);
  width: 100%;
  max-width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
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
  a {
    font-size: ${fontSize.small};
    color: ${colors.textLight};
    font-weight: 600;
    transition: ${transition};
    &:hover,
    &.active {
      color: ${colors.white};
    }
  }
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