import styled from "styled-components";
import { colors, deviceSize, fontSize, margin} from "../../globalStyle";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  .heroSlideWrapper
  {
    visibility: hidden;
    opacity: 0;
    transition: 200ms ease-in-out;
    &.swiper-slide-active {
      visibility: visible;
      opacity: 1;
      transition: 200ms ease-in-out;
    }
  }
`

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: ${props => `url(${props.background}) `};
  background-position: bottom;
  background-size: cover;
`

export const Hero = styled.section`
  min-height: ${`calc(1z00vh - ${margin.mheader})`};
`

export const Content = styled.div`
  color: ${colors.textLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  min-height: ${`calc(100vh - ${margin.mheader})`};

  p {
    line-height: 1.5rem;
  }

  @media screen and (min-width: ${deviceSize.laptopM}){
    width: 50%;
  }
`

export const Cta = styled.div`
  color: ${colors.white};
  font-weight: 800;
  letter-spacing: .25rem;
  text-transform: uppercase;

  border-left: 4px solid ${colors.primary};
  border-right: 4px solid ${colors.primary};
  padding-left: .75rem;
  padding-right: .75rem;
  padding-top: .35rem;
  padding-bottom: .35rem;

  margin-top: 2rem;
`
export const Title = styled.h2`
  color: ${colors.titleLight};
  font-size: ${fontSize.title};
  font-weight: 700;
  text-shadow: 0 1px ${colors.black};
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