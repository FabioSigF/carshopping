import React from 'react'
import { Card, Discount, Header, Hero, Title, Wrapper } from './Offer.styles'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from 'swiper';
import Button from '../Button/Button';
import offerImg from '../../assets/img/offer/offer-car-1.png';
import { borderRadius } from '../../globalStyle';

export default function Offer() {
  return (
    <Wrapper>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        autoplay={{
          delay:2500,
          pauseOnMouseEnter: true,
        }}
        >
        <SwiperSlide>
          <Card>
              <Header>
                <Discount>
                  Discount 10% off
                </Discount>
                <Title>
                  Special offers for Black Friday
                </Title>
              </Header>
              <Button 
                btnStyle={'primary'}
                borderRadius={borderRadius.small}>Shop Now</Button>
              <Hero 
                src={offerImg} 
                alt=''
              />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
              <Header>
                <Discount>
                  Discount 10% off
                </Discount>
                <Title>
                  Special offers for Black Friday
                </Title>
              </Header>
              <Button 
                btnStyle={'primary'}
                borderRadius={borderRadius.small}>Shop Now</Button>
              <Hero 
                src={offerImg} 
                alt=''
              />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
              <Header>
                <Discount>
                  Discount 10% off
                </Discount>
                <Title>
                  Special offers for Black Friday
                </Title>
              </Header>
              <Button 
                btnStyle={'primary'}
                borderRadius={borderRadius.small}>Shop Now</Button>
              <Hero 
                src={offerImg} 
                alt=''
              />
          </Card>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}
