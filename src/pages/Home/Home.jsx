import React from 'react'
import { Container, iconsList } from '../../globalStyle'
import { Background, BrandsContainer, Content, Hero, Image, ImageContainer, List, OfferAside, Subtitle, Title, Wrapper } from './Home.styles'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

import heroImg1 from '../../assets/img/home/hero-car-1.png'
import heroImg2 from '../../assets/img/home/hero-car-2.png'
import heroImg3 from '../../assets/img/home/hero-car-3.png'
import WhyUs from '../../components/WhyUs/WhyUs'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

import Feedback from '../../components/Feedback/Feedback'
import News from '../../components/News/News'
import CostumerExp from '../../components/CostumerExp/CostumerExp'
import BestBrands from '../../components/BestBrands/BestBrands'
import Offer from '../../components/Offer/Offer'
import FeaturedCars from '../../components/FeaturedCars/FeaturedCars'
import OurStaff from '../../components/OurStaff/OurStaff'
import ButtonArrowCta from '../../components/ButtonArrowCta/ButtonArrowCta'
export default function Home() {
  const { documents: advertises, loading } = useFetchDocuments("advertises")
  return (
    <Wrapper>
      <Swiper
        pagination={true}
        spaceBetween={100}
        modules={[EffectFade, Pagination, Autoplay]}
        effect={"fade"}
        autoplay={{
          delay: 10000,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper">
        <SwiperSlide className='heroSlideWrapper'>
          <Background>
            <Container>
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
                  <ButtonArrowCta>
                    Explore More
                  </ButtonArrowCta>
                </Content>
                <ImageContainer>
                  <Image src={heroImg1} alt='AutoHive' />
                </ImageContainer>
              </Hero>
            </Container>
          </Background>
        </SwiperSlide>
        <SwiperSlide className='heroSlideWrapper'>
          <Background>
            <Container>
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
                  <ButtonArrowCta>
                    Explore More
                  </ButtonArrowCta>
                </Content>
                <ImageContainer>
                  <Image src={heroImg2} alt='AutoHive' />
                </ImageContainer>
              </Hero>
            </Container>
          </Background>
        </SwiperSlide>
        <SwiperSlide className='heroSlideWrapper'>
          <Background>
            <Container>
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
                  <ButtonArrowCta>
                    Explore More
                  </ButtonArrowCta>
                </Content>
                <ImageContainer>
                  <Image src={heroImg3} alt='AutoHive' />
                </ImageContainer>
              </Hero>
            </Container>
          </Background>
        </SwiperSlide>
      </Swiper>
      <Container style={{ paddingTop: "7rem", paddingBottom: "10rem" }}>
        <CostumerExp />
      </Container>
      <BrandsContainer>
        <BestBrands />
        <OfferAside>
          <Offer />
        </OfferAside>
      </BrandsContainer>
      <Container>
        <WhyUs />
      </Container>
      <Feedback />
      <Container style={{ marginBottom: "10rem" }}>
        <OurStaff />
      </Container>
      <Container>
        <FeaturedCars
          carsList={advertises}
          loading={loading}
        />
      </Container>
      <Container>
        <News />
      </Container>
    </Wrapper >
  )
}
