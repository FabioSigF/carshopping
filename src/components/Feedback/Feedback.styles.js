import styled from "styled-components";
import { colors, fontSize, iconsList, pseudoElementCfg } from "../../globalStyle";
import bg from '../../assets/img/bg/video-bg.jpg';
import { IoChevronForward } from "react-icons/io5";

export const Wrapper = styled.section`
  position: relative;
  margin-top: 10rem;
  margin-bottom: 3rem;
  height: 600px;
  background-color: ${colors.black};
  
  `
export const BgContainer = styled.div`
  background-image: ${`url(${bg})`};
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  &::after,
  &::before {
    ${pseudoElementCfg}
  }
  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0%;
    background: linear-gradient(to right, #2E2E2E 50.22%, rgba(0, 0, 0, 0) 100%);
  }
`

export const Count = styled.div`
  background-color: ${colors.white};
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  z-index: 1;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
  width: 100%;
`

export const CountItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 60px 100px;
`

export const CountCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  &:not(:first-child){
    &::before {
      ${pseudoElementCfg}
      background-color: ${colors.black};
      width: 2px;
      height: 65px;
      opacity: 0.05;
      left: -1.5rem;
    }
  }
`

export const Icon = styled.span`
  background-color: ${colors.primaryLight};
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 2rem;
`

export const CountContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .75rem;
`

export const CountTitle = styled.h3`
  font-size: ${fontSize.titleSmall};
  color: ${colors.black};
  font-weight: 800;
  text-transform: lowercase;
`

export const CountText = styled.p`
  font-size: ${fontSize.small};
  font-weight: 600;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const SliderContainer = styled.div`
  max-width: 680px;
  max-height: 320px;

  .swiper-button-next,
  .swiper-button-prev {
    background-color: ${colors.primary};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    &::after{
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.white};
      background-size: cover;
      font-family: inherit;
      font-size: 20px;
      line-height: 15px;
      margin-bottom: 6px;
    }
  }

  .swiper-button-next
  {
    &::after {
      content: '>';
    }
  }
  .swiper-button-prev{
    &::after {
      content: '<';
     }
  }
  

`