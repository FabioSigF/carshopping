import styled from "styled-components";
import { borderRadius, colors, fontSize, margin, pseudoElementCfg, transition } from "../../globalStyle";

export const Wrapper = styled.header`
  background: rgba(17,16,16,0.5);
  width: 100%;
  max-width: 100vw;
  height: ${margin.mheader};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: all 200ms ease-in-out;

  &.header_scroll {
    background: ${colors.secondary};
    border-bottom: 1px solid rgba(255,255,255,0.06);
    transition: all 200ms ease-in-out;
  }
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
    color: ${colors.textLight};
    font-size: ${fontSize.smallX};
    font-weight: 700;
    text-transform: uppercase;
    transition: ${transition.default};
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