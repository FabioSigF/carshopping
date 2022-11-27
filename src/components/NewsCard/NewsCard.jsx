import React from 'react'
import { iconsList } from '../../globalStyle'
import { Author, Avatar, Content, Date, Description, Footer, Image, ImageContainer, Name, NewsButton, Tag, Title, Wrapper } from './NewsCard.styles'

export default function NewsCard({ img, tag, title, description, avatar, name, date, link }) {
  /*Fazer hover do card inteiro e linkagem */
  return (
    <Wrapper href={link}>
      <ImageContainer>
        <Image src={img} className="newsCard__image"/>
      </ImageContainer>
      <Content>
        <Tag>{tag}</Tag>
        <Title className='newsCard__title'>{title}</Title>
        <Description>
          {description}
        </Description>
      </Content>
      <Footer>
        <Author>
          <Avatar src={avatar} alt={title} />
          <div>
            <Name>{name}</Name>
            <Date>{date}</Date>
          </div>
        </Author>
        <NewsButton className='newsCard__button'>
          {iconsList.arrowRight}
        </NewsButton>
      </Footer>
    </Wrapper>
  )
}
