import React from 'react'
import { Description, HeaderCont, TagTitle, Title } from '../../globalStyle'
import NewsCard from '../NewsCard'
import { NewsList, Wrapper } from './News.styles'

import img1 from './../../assets/img/news/blog-1.jpg';
import img2 from './../../assets/img/news/blog-2.jpg';
import img3 from './../../assets/img/news/blog-3.jpg';
import avatar from '../../assets/img/author/blog-author-1.jpg';

export default function News() {

  const newsData = [
    {
      title: "Philosophy that addresses topics such as Goodness",
      tag: "Car News",
      description: "Struggling to seel onee currently on the market won't stop actress and singer to make success with cars",
      img: img1,
      author: {
        name: "Thomas Huizar",
        avatar: avatar
      },
      date: "july 22, 1982",
      link: "#!"
    },
    {
      title: "Some philosophers specialize In one or historical Periods",
      tag: "Car News",
      description: "Struggling to seel onee currently on the market won't stop actress and singer to make success with cars",
      img: img2,
      author: {
        name: "Thomas Huizar",
        avatar: avatar
      },
      date: "july 22, 1982",
      link: "#!"
    },
    {
      title: "A variety of other academic & non-academic Approaches",
      tag: "Car News",
      description: "Struggling to seel onee currently on the market won't stop actress and singer to make success with cars",
      img: img3,
      author: {
        name: "Thomas Huizar",
        avatar: avatar
      },
      date: "july 22, 1982",
      link: "#!"
    },
  ]

  return (
    <Wrapper>
      <HeaderCont alignCenter>
        <TagTitle>
          Recent News & Update
        </TagTitle>
        <Title>
          Upcoming Cars & Events
        </Title>
        <Description>
          Appropriately monetize one-to-one interfaces rather than cutting-edge portals.<br/>Backward-compatible schemas through highly efficient total linkage.
        </Description>
      </HeaderCont>
      <NewsList>
        {newsData.map((item) => (
          <NewsCard
            img={item.img}
            tag={item.tag}
            title={item.title}
            description={item.description}
            avatar={item.author.avatar}
            name={item.author.name}
            date={item.date}
            link={item.link}
          />
        ))}
      </NewsList>
    </Wrapper>
  )
}
