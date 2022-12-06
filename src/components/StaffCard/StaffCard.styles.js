import styled from "styled-components";
import { borderRadius, colors, deviceSize, fontSize, pseudoElementCfg, transition } from "../../globalStyle";

export const Wrapper = styled.div `
  background-color: ${colors.white};
  border-radius: ${borderRadius.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem 1.5rem;
  width: 100%;
  max-width: 426px;
  position: relative;
  transition: ${transition.default};
  &:hover{
    .staffCardHover {
      visibility: visible;
      opacity: 1;
    }
  }
  @media screen and (min-width: ${deviceSize.tablet}){
    justify-content: space-between;
    width: 40%;
  }

  @media screen and (min-width: ${deviceSize.laptopM}) {
    width: 19%;
  }
`

export const Avatar = styled.img `
  border-radius: 50%;
  max-width: 100%;
  height: auto;
`

export const Header = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const Title = styled.h4 `
  color: ${colors.titleDark};
  font-size: ${fontSize.bodyLarge};
  font-weight: 700;
`

export const Exp = styled.span `
  color: ${colors.text};
  font-size: ${fontSize.small};
`

export const List = styled.ul `
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Item = styled.li `
  &:hover{
    a {
      
      color: ${colors.black};
    }
  }
  a {
    transition: ${transition.default};
    padding: .5rem;
    color: ${colors.gray};
    font-size: ${fontSize.body};
  }
`

export const HoverWrapper = styled.div `

  border-radius: ${borderRadius.small};
  background-image: ${props => props.bgHover && `url(${props.bgHover})`};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  padding: 2.5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: ${transition.default};
  &::before {
    ${pseudoElementCfg}
    background-color: ${colors.primary};
    width: 100%;
    height: 100%;
    opacity: .8;
    top: 0;
    z-index: -1;
  }
`

export const HoverTitle = styled(Title)`
  color: ${colors.white};
`

export const HoverExp = styled(Exp) `
  color: ${colors.white};
`

export const HoverDescription = styled.p `
  color: ${colors.white};
  line-height: ${fontSize.titleSmall};
  margin-top: 1rem;
  text-align: center;
`

export const ItemHover = styled(Item) `
  
  a {
    color: ${colors.white};
  }
  &:hover {
    a {
      background-color: ${colors.white};
      border-radius: 50%;
    }
  }
`