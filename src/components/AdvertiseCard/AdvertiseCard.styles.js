import styled from "styled-components";
import { borderRadius, colors, deviceSize, fontSize, transition } from "../../globalStyle";

export const Wrapper = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${colors.bodyBg};
  border-radius: ${borderRadius.small};
  cursor: pointer;
  overflow: hidden;
  max-width: 516px;
  transition: ${transition.default};

  @media screen and (min-width: ${deviceSize.tablet}){
    height: 475px;
  }
  @media screen and (min-width: ${deviceSize.laptop}){
    height: 459px;
  }

  &:hover {
    box-shadow: 20px 20px 100px rgb(73 73 73 / 15%);

    & .advertise__thumb{
      transform: scale(1.02);
    }

    & button {
      background-color: ${colors.primary};
      color: ${colors.white};
    }

    & .advertise__price {
      background-color: ${colors.black};

    }
  }
  
`

export const Year = styled.span `
  position: absolute;
  top: 1rem;
  right: 1rem;

  background-color: ${colors.bodyBg};
  border-radius: ${borderRadius.small};
  font-size: ${fontSize.small};
  font-weight: 600;
  padding: 0.625rem;
  z-index: 1;
`

export const Price = styled.span `
  position: absolute;
  top: -1.25rem;
  right: 2rem;

  background-color: ${colors.primary};
  border-radius: ${borderRadius.small};
  color: ${colors.white};
  font-size: ${fontSize.small};
  font-weight: 600;
  padding: 0.625rem;
  transition: ${transition.default};
`

export const ThumbContainer = styled.div `
  max-width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    width: 100%;
  }
`

export const Thumb = styled.img `
  width: 100%;
  height: auto;
  transition: ${transition.default};
  @media screen and (min-width: ${deviceSize.tablet}){
    height: 234px;
  }
  @media screen and (min-width: ${deviceSize.laptop}){
    height: 206px;
  }
  @media screen and (min-width: ${deviceSize.laptopM}){
    height: 234px;
  }

  
`

export const Content = styled.div `
  position: relative;
  background-color: ${colors.bodyBg};
  padding: 2rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`

export const Title = styled.h3 `
  color: ${colors.titleDark};
  font-size: ${fontSize.bodyLarge};
  font-weight: 600;
  
`

export const Seller = styled.span `
  font-size: ${fontSize.small};
  display: block;
  strong {
    color: ${colors.textDark};
    font-weight: 800;
  }
`

export const Details = styled.div `
  border-top: 1px solid ${colors.lightGray};
  padding-top: 1rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`

export const IconBox = styled.div `
  display: flex;
  align-items: center;
  gap: .2rem;
  font-size: ${fontSize.small};
  font-weight: 600;
  svg {
    width: 16px;
    height: 16px;
  }
`