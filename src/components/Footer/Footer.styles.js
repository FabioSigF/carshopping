import styled from "styled-components";
import { colors, deviceSize, fontSize, transition } from "../../globalStyle";

export const Wrapper = styled.footer `
  position: relative;
  width: 100%;
  height: 100%;
`

export const Background = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${colors.secondary};
  padding: 2rem 0;
  
  .footerContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: ${deviceSize.laptop} ){
      flex-direction: row;
      justify-content: space-between;
    }
  }
`

export const Nav = styled.nav `
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`

export const Social = styled.ul `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  a {
    color: ${colors.white};
    transition: ${transition.default};
    &:hover {
    color: ${colors.primary};
    }
  }
`

export const NavList = styled.ul `
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`

export const Navlink = styled.a `
  color: ${colors.textLight};
  cursor: pointer;
  font-size: ${fontSize.small};
  transition: ${transition.default};
  &:hover {
    color: ${colors.primary};
  }
`