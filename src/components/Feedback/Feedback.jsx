import React from 'react'
import { Container, iconsList } from '../../globalStyle'
import { BgContainer, Content, Count, CountCard, CountContent, CountItems, CountText, CountTitle, Icon, SliderContainer, Wrapper } from './Feedback.styles'
import authorImg from '../../assets/img/author/author-1.jpg';
import FeedbackCard from '../FeedbackCard';

//Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//Swiper Required modules
import { Navigation } from "swiper";

export default function Feedback() {

  const feedbackCount = [
    {
      title: "46k+",
      text: "Happy Customer",
      icon: iconsList.heart,
      id: 0,
    },
    {
      title: "500+",
      text: "Cars in Garage",
      icon: iconsList.tools,
      id: 1,
    },
    {
      title: "45k+",
      text: "Total Kilometer",
      icon: iconsList.speed,
      id: 2,
    },
    {
      title: "50+",
      text: "Car Center Solutions",
      icon: iconsList.carOut,
      id: 3,
    },
  ]

  const feedbackCards = [
    {
      title: "Amazing Support!",
      text: "Authoritatively grow accurate products rather than collaborative conterpocras tinate enterprise strategic theme areas before functionalized in Phosfluoresc based technology whereas low-risk high-yield vortals. whereas effective functionalities. Holisticly pursue cooperative.",
      author: {
        name: "Chris Hoang Siama",
        title: "Managing Director",
        img: authorImg,
      },
      rating: 4.5,
    },
    {
      title: "Amazing Support!",
      text: "Authoritatively grow accurate products rather than collaborative conterpocras tinate enterprise strategic theme areas before functionalized in Phosfluoresc based technology whereas low-risk high-yield vortals. whereas effective functionalities. Holisticly pursue cooperative.",
      author: {
        name: "Chris Hoang Siama",
        title: "Managing Director",
        img: authorImg,
      },
      rating: 4.5,
    },
    {
      title: "Amazing Support!",
      text: "Authoritatively grow accurate products rather than collaborative conterpocras tinate enterprise strategic theme areas before functionalized in Phosfluoresc based technology whereas low-risk high-yield vortals. whereas effective functionalities. Holisticly pursue cooperative.",
      author: {
        name: "Chris Hoang Siama",
        title: "Managing Director",
        img: authorImg,
      },
      rating: 4.5,
    },
    {
      title: "Amazing Support!",
      text: "Authoritatively grow accurate products rather than collaborative conterpocras tinate enterprise strategic theme areas before functionalized in Phosfluoresc based technology whereas low-risk high-yield vortals. whereas effective functionalities. Holisticly pursue cooperative.",
      author: {
        name: "Chris Hoang Siama",
        title: "Managing Director",
        img: authorImg,
      },
      rating: 4.5,
    },
  ]
  return (
    <Wrapper>
      <BgContainer>
        <Container style={{ position: "relative", width: "100%", height: "100%" }}>
          <Count>
            <CountItems>
              {feedbackCount.map((item) => (
                <CountCard key={item.id}>
                  <Icon>
                    {item.icon}
                  </Icon>
                  <CountContent>
                    <CountTitle>{item.title}</CountTitle>
                    <CountText>{item.text}</CountText>
                  </CountContent>
                </CountCard>
              ))}
            </CountItems>
          </Count>
          <Content>
            <SliderContainer>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={20}
              >
                {feedbackCards.map((item) => (
                  <SwiperSlide>
                    <FeedbackCard
                      title={item.title}
                      text={item.text}
                      authorName={item.author.name}
                      authorTitle={item.author.title}
                      authorImg={item.author.img}
                      rating={item.rating}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </SliderContainer>
          </Content>
        </Container>
      </BgContainer>
    </Wrapper>
  )
}
