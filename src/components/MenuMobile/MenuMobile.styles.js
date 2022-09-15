import styled from "styled-components";
import { borderRadius, colors, fontSize, transition } from "../../globalStyle";

export const Wrapper = styled.div `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: ${colors.bodyBg};
  padding: 4rem 1rem;
  box-sizing: border-box;
  transition: ${transition.default};
  transform: ${props => props.openMenu ? 'translateX(0)' : 'translateX(-100%)' };
`
export const CloseBtn = styled.button `
  top: 1rem;
  right: 1rem;
  position: absolute;
  font-size: 1.5rem;
`
export const Header = styled.header `
  background-color: ${colors.black};
  border-radius: ${borderRadius.small};
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  padding: 1rem;
`

export const Nav = styled.nav `
`

export const List = styled.ul `

`

export const Item = styled.li `
  a {
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.lightGray};
    color: ${colors.textDark};
    font-weight: 600;
  }
`

export const Contact = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  h2 {
    font-size: ${fontSize.titleSmall};
    font-weight: 600;
    color: ${colors.titleDark};
  }
  a {
    color: ${colors.text};
  }

`

export const Social = styled.ul `
  display: flex;
  gap: .5rem;
  margin-top: 1rem;
  li a{
    color: ${colors.textDark};
    font-size: ${fontSize.titleSmall};
  }
`

