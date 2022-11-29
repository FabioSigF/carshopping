import styled from "styled-components";
import { borderRadius, colors, deviceSize, fontSize } from "../../globalStyle";

export const Wrapper = styled.section `
  padding-bottom: 15rem;
`

export const Header = styled.div `
  text-align: center;
  padding-bottom: 2rem;
  @media screen and (min-width: ${deviceSize.laptopM}){
    max-width: 60%;
    margin: 0 auto;
    padding-bottom: 8rem;
  }
`

export const Content = styled.div `
  position: relative;
  display: flex;
  justify-content: center;
`

export const List = styled.ul `

  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: ${deviceSize.laptopM}) {
    flex-wrap: wrap;
    gap: 4rem;
    justify-content: space-between;
    max-height: 600px;
    width: 100%;
    
    li:nth-child(4),
    li:nth-child(5),
    li:nth-child(6)
    {
      flex-direction: row-reverse;
      justify-content: end;
      text-align: left;
    }
  }
`

export const Item = styled.li `
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 1rem;

  color: ${colors.text};
  font-size: ${fontSize.small};
  line-height: ${fontSize.bodyLarge};
  @media screen and (min-width: ${deviceSize.laptopM}) {
    flex-direction: row;
    text-align: right;
  }
`

export const ItemHeader = styled.div `
  display: flex;
  flex-direction: column;
  gap: .5rem;
  
  @media screen and (min-width: ${deviceSize.laptopM}){
    max-width: 40%;
  }
`

export const ItemTitle = styled.h4 `
  color: ${colors.titleDark};
  font-weight: 700;
  font-size: ${fontSize.bodyLarge};
  
  @media screen and (min-width: ${deviceSize.laptopM}){
    font-size: ${fontSize.titleSmall};
  }
`

export const IconWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  border-radius: ${borderRadius.small};
  color: ${colors.primary};
  font-size: 2rem;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
`

export const Image = styled.img `
  display: none;
  @media screen and (min-width: ${deviceSize.laptopM}){
    display: block;
    position: absolute;
    top: -4rem;
    margin: 0 auto;
    max-width: 356px;
    height: auto;
  }
`