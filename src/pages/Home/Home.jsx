import React from 'react'
import { Container, iconsList } from '../../globalStyle'
import { Background, Cars, CarsContainer, Content, Hero, Image, ImageContainer, List, Subtitle, Title, Wrapper } from './Home.styles'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '../../components/Button/Button'

import heroImg1 from '../../assets/img/home/hero-car-1.png'
import heroImg2 from '../../assets/img/home/hero-car-2.png'
import heroImg3 from '../../assets/img/home/hero-car-3.png'
import WhyUs from '../../components/WhyUs/WhyUs'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import AdvertiseCard from '../../components/AdvertiseCard/AdvertiseCard'
import Feedback from '../../components/Feedback/Feedback'
import News from '../../components/News/News'
import CostumerExp from '../../components/CostumerExp/CostumerExp'
import BestBrands from '../../components/BestBrands/BestBrands'
export default function Home() {

  const { documents: advertises, loading } = useFetchDocuments("advertises")

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
      <Container>
        <WhyUs />
      </Container>
      <Container style={{ paddingTop: "7rem", paddingBottom:"10rem" }}>
        <CostumerExp />
      </Container>
      {/*Best Seeling Brands (car-dealership-2.html)
      + 
      Discounts - Aside (car-dealership-2.html)
      */}
      <Container>
        <BestBrands />
      </Container>
      {/*Our Professional Staff (index-3.html) */}
      {/*Buy Your Car Quickly And Easily (car-dealership-2.html) */}
      <Container>
        <Cars>
          <CarsContainer>
            {loading && <p>Carregando...</p>}
            {advertises &&
              advertises.map((advertise) => (
                <AdvertiseCard
                  advertise={advertise}
                />
              ))}
            {advertises && advertises.lenght === 0 && (
              <p>Não foram encontrados anuncios...</p>
            )}
          </CarsContainer>
          <Button
            btnStyle={'mainCta'}
            color={'primary'}
          >View More</Button>
        </Cars>
      </Container>
      <Feedback />
      <Container>
        <News />
      </Container>
    </Wrapper>
  )
}
