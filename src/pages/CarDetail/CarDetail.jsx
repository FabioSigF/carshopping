import React from 'react'
import { HeaderCont, iconsList, Title } from '../../globalStyle'
import { CarHero, Hero, PublishDate, Slider, Wrapper } from './CarDetail.styles'

export default function CarDetail({title, date, views, imgHero}) {
  return (
    <Wrapper>
      <CarHero>
        <HeaderCont>
          <Title>{title}</Title>
          <PublishDate>
            <span>{iconsList.clock}Listed on: {date}</span>
            <span>{iconsList.eye}Views: {views}</span>
          </PublishDate>
        </HeaderCont>
        <Hero src={imgHero} alt={title}/>
        <Slider>
        </Slider>
      </CarHero>
    </Wrapper>
  )
}
