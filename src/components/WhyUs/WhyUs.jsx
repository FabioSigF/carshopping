import React from 'react'
import { Card, CardHeader, CardIcon, CardList, CardText, CardTitle, ContentWrapper, Image, Wrapper } from './WhyUs.styles'

import imageContent from '../../assets/img/home/car-red.png'
import { Description, HeaderCont, iconsList, TagTitle, Title } from '../../globalStyle'


export default function WhyUs() {
  return (
    <Wrapper>

      <ContentWrapper>
        <HeaderCont>
          <TagTitle>
            Why Choose Us
          </TagTitle>
          <Title>
            Don't Waste Your Valuable Time or Money
          </Title>
        </HeaderCont>
        <Description>
          Collaboratively leverage existing client-centric schemas integrated processes. Inter actively engineer global sources after team driven niche markets. Rapidiously processes with resource maximizing architectures.
        </Description>
        <Image src={imageContent} alt='car' />
      </ContentWrapper>

      <ContentWrapper>
        <CardList>

          <Card>
            <CardHeader>
              <CardIcon>
                {iconsList.shield}
              </CardIcon>
              <CardTitle>
                Expert Certified Mechanics
              </CardTitle>
            </CardHeader>
            <CardText>
              Credibly maximize resource maximizing channels after interoperable frictionless. Rather than synergistic models.
            </CardText>
          </Card>
          <Card>
            <CardHeader>
              <CardIcon>
                {iconsList.shield}
              </CardIcon>
              <CardTitle>
                Genuine Spares Parts
              </CardTitle>
            </CardHeader>
            <CardText>
              Credibly maximize resource maximizing channels after interoperable frictionless. Rather than synergistic models.
            </CardText>
          </Card>
          <Card>
            <CardHeader>
              <CardIcon>
                {iconsList.priceTag}
              </CardIcon>
              <CardTitle>
                Get Reasonable Price
              </CardTitle>
            </CardHeader>
            <CardText>
              Credibly maximize resource maximizing channels after interoperable frictionless. Rather than synergistic models.
            </CardText>
          </Card>

        </CardList>
      </ContentWrapper>
    </Wrapper>
  )
}
