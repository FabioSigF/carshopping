import React from 'react'
import { Container, iconsList } from '../../globalStyle'
import { Background, Content, Hero, Image, ImageContainer, List, Subtitle, Title, Wrapper } from './Home.styles'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '../../components/Button/Button'

import heroImg1 from '../../assets/img/home/hero-car-1.png'
import heroImg2 from '../../assets/img/home/hero-car-2.png'
import heroImg3 from '../../assets/img/home/hero-car-3.png'
export default function Home() {
  return (
    <Wrapper>
      <Background>
        <Container>
          <Swiper 
            pagination={true} 
            spaceBetween={100}
            modules={[Pagination, Autoplay]} 
            autoplay={{
              delay: 10000,
              pauseOnMouseEnter: true,
            }}
            className="mySwiper">
            <SwiperSlide>
              <Hero>
                <Content>
                  <Title>Export Auto Service</Title>
                  <Subtitle>Mercedes Benz - 2.0</Subtitle>
                  <p>Distinctively optimize web-enabled materials with functional markets.<br /> Intellectual capital with applications.</p>
                  <List>
                    <li>{iconsList.check} Leather Seats</li>
                    <li>{iconsList.check} Sunroof / moonroof</li>
                    <li>{iconsList.check} Heated Seats</li>
                  </List>
                  <Button btnStyle={'mainCta'}>Explore More</Button>
                </Content>
                <ImageContainer>
                  <Image src={heroImg1} alt='AutoHive' />
                </ImageContainer>
              </Hero>
            </SwiperSlide>
            <SwiperSlide>
              <Hero>
                <Content>
                  <Title>Export Auto Service</Title>
                  <Subtitle>Lamborghini Aventator</Subtitle>
                  <p>Distinctively optimize web-enabled materials with functional markets.<br /> Intellectual capital with applications.</p>
                  <List>
                    <li>{iconsList.check} Leather Seats</li>
                    <li>{iconsList.check} Sunroof / moonroof</li>
                    <li>{iconsList.check} Heated Seats</li>
                  </List>
                  <Button btnStyle={'mainCta'}>Explore More</Button>
                </Content>
                <ImageContainer>
                  <Image src={heroImg2} alt='AutoHive' />
                </ImageContainer>
              </Hero>
            </SwiperSlide>
            <SwiperSlide>
              <Hero>
                <Content>
                  <Title>Export Auto Service</Title>
                  <Subtitle>Lamborghini Centenario</Subtitle>
                  <p>Distinctively optimize web-enabled materials with functional markets. <br /> Intellectual capital with applications.</p>
                  <List>
                    <li>{iconsList.check} Leather Seats</li>
                    <li>{iconsList.check} Sunroof / moonroof</li>
                    <li>{iconsList.check} Heated Seats</li>
                  </List>
                  <Button btnStyle={'mainCta'}>Explore More</Button>
                </Content>
                <ImageContainer>
                  <Image src={heroImg3} alt='AutoHive' />
                </ImageContainer>
              </Hero>
            </SwiperSlide>
          </Swiper>
        </Container>
      </Background>
    </Wrapper>
  )
}
