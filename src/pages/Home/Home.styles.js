import styled from "styled-components";
import { colors, deviceSize, fontSize, pseudoElementCfg } from "../../globalStyle";
import bg from '../../assets/img/shapes/texture-bg.png'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

`

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  min-height: 120vh;
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

  & .swiper-pagination {
    bottom: 0px;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem;
  }
  & .swiper-pagination-bullet {
    opacity: 1;
    background-color: ${colors.bodyBg};
    
  }

  & .swiper-pagination-bullet-active {
    background-color: ${colors.primary};
    position: relative;
    &::before {
      ${pseudoElementCfg}
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 1px solid ${colors.primary};
      top: -5px;
      left: -5px;
    }
  }

`

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  gap: 1rem;
  padding-bottom: 3rem;
  @media screen and (min-width: ${deviceSize.laptopM}){
    flex-direction: row;
  }
`

export const Content = styled.div`
  color: ${colors.textLight};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  p {
    line-height: 1.5rem;
  }

  @media screen and (min-width: ${deviceSize.laptopM}){
    width: 50%;
  }
`
export const Title = styled.h2`
  color: ${colors.primary};
  font-size: ${fontSize.titleSmall};
  font-weight: 700;
`

export const Subtitle = styled.h3`
  color: ${colors.titleLight};
  font-size: ${fontSize.title};
  font-weight: 700;
  @media screen and (min-width: ${deviceSize.tablet}) {
    font-size: ${fontSize.titleLarge};
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`
export const ImageContainer = styled.div`
  position: relative;
  @media screen and (min-width: ${deviceSize.laptopM}){
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 60%;
  }
`
export const Image = styled.img`
  display: block;
  max-width: 100%;
  @media screen and (min-width: ${deviceSize.laptopM}){
    max-width: 800px;
    position: absolute;
    right: 0;
  }
`
