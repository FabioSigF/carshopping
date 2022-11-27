import styled from "styled-components";
import { colors, deviceSize, fontSize, pseudoElementCfg, transition } from "../../globalStyle";
import bg from '../../assets/img/shapes/texture-bg.png'
export const Wrapper = styled.footer `
  position: relative;
  width: 100%;
  height: 100%;
`

export const Background = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 5rem;
  z-index: 1;
  background: url(${bg});
  background-size: cover;
  &::before {
    ${pseudoElementCfg}
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: ${colors.homeBgLinear};
  }

  .footerContainer {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${deviceSize.laptop} ){
      flex-direction: row;
      justify-content: space-between;
      .footerContainerContact {
        width: 40%;
      }

      .footerContainerNav {
        width: 50%
      }
    }

  }
`

export const Contact = styled.div `
  padding-top: 3rem;
  margin-bottom: 2rem;
  h3 {
    color: ${colors.titleLight};
    font-size: ${fontSize.titleSmall};
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.textLight};
    margin-bottom: 2rem;
    line-height: ${fontSize.titleSmall};
  }

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${colors.white};
    font-size: ${fontSize.titleSmall};
    font-weight: 700;
  }

`

export const ContactIcon = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${colors.primary};
  font-size: 2rem;

  border-radius: 50%;
`

export const Social = styled.div `
  display: flex;
  justify-content: space-between;
  color: ${colors.white};
  margin-top: 3rem;
  margin-bottom: 3rem;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
  }

  a {
    color: ${colors.white};
  }
`

export const Nav = styled.nav `
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: ${deviceSize.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const NavList = styled.ul `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const NavTitle = styled.h6 `
  color: ${colors.titleLight};
  font-weight: 700;
  margin-bottom: .5rem;
`

export const NavItem = styled.li `
  position: relative;
  width: 100%;
`

export const Navlink = styled.a `
  color: ${colors.textLight};
  font-size: ${fontSize.small};
  transition: ${transition.default};
  &:hover {
    color: ${colors.primary};
    padding-left: 5px;
  }
`

export const Copyright = styled.div `
  border-top: 1px solid ${colors.text};
  color: ${colors.titleLight};
  font-size: ${fontSize.small};
  margin-top: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  
`

export const CopyrightContent = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    color: ${colors.primary};
  }

  ul {
    display: flex;
    gap: 1rem;

    a {
      color: ${colors.titleLight};
      transition: ${transition.default};
      &:hover {
        color: ${colors.primary};
      }
    }
  }

  @media screen and (min-width: ${deviceSize.mobileL}){
    flex-direction: row;
    justify-content: space-between;
  }
`