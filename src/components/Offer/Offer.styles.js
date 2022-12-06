import styled from "styled-components";
import { borderRadius, colors, fontSize, pseudoElementCfg } from "../../globalStyle";
import bgCard from '../../assets/img/shapes/texture-bg.png'

export const Wrapper = styled.section `
  width: 100%;
  height: 100%;
`

export const Card = styled.div `
  background-image: ${`url(${bgCard})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${borderRadius.normal};
  box-sizing: border-box;
  display: block;
  padding: 2.5rem 1.5rem;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    ${pseudoElementCfg}
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${colors.homeBgLinear};
    z-index: -1;
  }
`

export const Header = styled.header `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`

export const Title = styled.h4 `
  font-size: ${fontSize.title};
  font-weight: 600;
  color: ${colors.white};
`

export const Discount = styled.span `
  font-size: ${fontSize.body};
  font-weight: 700;
  color: ${colors.primary};
  position: relative;
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
  gap: .5rem;
  padding-right: 1rem;
  &::after {
    ${pseudoElementCfg}
    background-color: ${colors.primary};
    position: relative;
    bottom: 0;
    right: 0;
    height: 2px;
    width: 100%;
  }
`

export const Hero = styled.img `
  max-width: 100%;
`