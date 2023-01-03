import React from 'react'
import { iconsList, Title } from '../../globalStyle'
import { Content, Header , IconWrapper, Image, Item, ItemHeader, ItemTitle, List, Wrapper } from './CostumerExp.styles'
import imageCar from '../../assets/img/cars/costumerExp.png';
export default function CostumerExp() {

  const costumerExpItems = [
    {
      title: "Most Flexible Payment",
      description: "Uniquely revolutionize manufactured for interactive customer service.",
      icon: iconsList.creditCard,
    },
    {
      title: "Most Flexible Payment",
      description: "Uniquely revolutionize manufactured for interactive customer service.",
      icon: iconsList.creditCard,
    },
    {
      title: "Most Flexible Payment",
      description: "Uniquely revolutionize manufactured for interactive customer service.",
      icon: iconsList.creditCard,
    },
    {
      title: "Online Car Appraisal",
      description: "Uniquely revolutionize manufactured for interactive customer service.",
      icon: iconsList.carOut,
    },
    {
      title: "Consumer-First Mentality",
      description: "Uniquely revolutionize manufactured for interactive customer service.",
      icon: iconsList.people,
    },
    {
      title: "Non-Stop Innovation",
      description: "Uniquely revolutionize manufactured for interactive customer service.",
      icon: iconsList.speed,
    },
  ]

  return (
    <Wrapper>
      <Header>
        <Title>We're Are Ensuring The Best Customer Experience</Title>
      </Header>
      <Content>
        <List>
          {costumerExpItems.map((item) => (
            <Item>
              <ItemHeader>
                <ItemTitle>{item.title}</ItemTitle>
                <p>{item.description}</p>
              </ItemHeader>
              <IconWrapper>
                {item.icon}
              </IconWrapper>
            </Item>
          ))}
        </List>
        <Image src={imageCar} />
      </Content>
    </Wrapper>
  )
}
