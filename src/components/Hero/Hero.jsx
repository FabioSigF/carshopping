import React from 'react'

//Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
import 'swiper/css';
import "swiper/css/effect-fade";

//Styles
import { Wrapper, Background, Content, Cta, List, Title } from './Hero.styles'

//Background Images
import heroBg1 from '../../assets/img/bg/hero1.jpg'
import heroBg2 from '../../assets/img/bg/hero2.jpg'
import heroBg3 from '../../assets/img/bg/hero3.jpg'
import { Container, iconsList } from '../../globalStyle';
import ButtonArrowCta from '../Buttons/ButtonArrowCta/ButtonArrowCta';

export default function Hero() {
  return (
    <Wrapper>
        <Swiper
          pagination={true}
          spaceBetween={100}
          modules={[EffectFade, Autoplay]}
          effect={"fade"}
           autoplay={{
             delay: 10000,
           }}
          className="mySwiper">
          <SwiperSlide className='heroSlideWrapper'>
            <Background background={heroBg1}>
              <Container>
                <Content>
                  <Cta>Find your dream car</Cta>
                  <Title>MercedesBenz CLS63 AMG</Title>
                  <p>Distinctively optimize web-enabled materials with functional markets.<br /> Intellectual capital with applications.</p>
                  <List>
                    <li>{iconsList.check} Leather Seats</li>
                    <li>{iconsList.check} Sunroof / moonroof</li>
                    <li>{iconsList.check} Heated Seats</li>
                  </List>
                  <ButtonArrowCta>
                    See More
                  </ButtonArrowCta>
                </Content>
              </Container>
            </Background>
          </SwiperSlide>
          
          <SwiperSlide className='heroSlideWrapper'>
            <Background background={heroBg2}>
              <Container>
                <Content>
                  <Cta>Find your dream car</Cta>
                  <Title>Lamborghini Huracan EVO</Title>
                  <p>Distinctively optimize web-enabled materials with functional markets.<br /> Intellectual capital with applications.</p>
                  <List>
                    <li>{iconsList.check} Leather Seats</li>
                    <li>{iconsList.check} Sunroof / moonroof</li>
                    <li>{iconsList.check} Heated Seats</li>
                  </List>
                  <ButtonArrowCta>
                    See More
                  </ButtonArrowCta>
                </Content>
              </Container>
            </Background>
          </SwiperSlide>

          <SwiperSlide className='heroSlideWrapper'>
            <Background background={heroBg3}>
              <Container>
                <Content>
                  <Cta>Find your dream car</Cta>
                  <Title>Lexus RC F 470 CV</Title>
                  <p>Distinctively optimize web-enabled materials with functional markets.<br /> Intellectual capital with applications.</p>
                  <List>
                    <li>{iconsList.check} Leather Seats</li>
                    <li>{iconsList.check} Sunroof / moonroof</li>
                    <li>{iconsList.check} Heated Seats</li>
                  </List>
                  <ButtonArrowCta>
                    See More
                  </ButtonArrowCta>
                </Content>
              </Container>
            </Background>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
  )
}
