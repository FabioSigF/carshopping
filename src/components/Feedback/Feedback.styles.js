import styled from "styled-components";
import { colors, deviceSize, fontSize, pseudoElementCfg } from "../../globalStyle";
import bg from '../../assets/img/bg/video-bg.jpg';

export const Wrapper = styled.section`
  position: relative;
  //margin para o espaço vazado
  margin-top: 180px;
  height: 100%;
  background-color: ${colors.black};

  @media screen and (min-width: ${deviceSize.mobileM}) {
    margin-top: 95px;
  }
`
export const BgContainer = styled.div`

  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 2rem;
  background: linear-gradient(to right, #2E2E2E 50.22%, rgba(0, 0, 0, 0) 100%);

  @media screen and (min-width: ${deviceSize.laptop}){
    
    background-image: ${`url(${bg})`};
    background-size: cover;
    background-repeat: no-repeat;
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
  }
`

export const Count = styled.div`
  background-color: ${colors.white};
  right: 0;
  width: 100%;
  z-index: 1;
  transform: translateY(-25%);
  
  @media screen and (min-width: ${deviceSize.laptopM}){
    transform: translateY(-50%);
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
  }
`

export const CountItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  @media screen and (min-width: ${deviceSize.mobileM}) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media screen and (min-width: ${deviceSize.laptopM}){
    justify-content: space-between;
    padding: 60px 100px; 
  }
`

export const CountCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  
  @media screen and (min-width: ${deviceSize.laptopM}){
    flex-direction: row;
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
  align-items: center;
  gap: .75rem;

  @media screen and (min-width: ${deviceSize.laptopM}){
    align-items: flex-start;
  }
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
  width: 100%;
  min-height: 320px;
  height: 100%;

  .swiper-button-next,
  .swiper-button-prev {
    background-color: ${colors.primary};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    &::after{
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.white};
      background-size: cover;
      font-size: 16px;
    }
  }
  
  .swiper-button-next {
    &::after {
      right: 14px;
    }
  }
  .swiper-button-prev {
    &::after {
      left: 14px;
    }
  }

`