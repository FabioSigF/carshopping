import React from 'react'
import { borderRadius, iconsList } from '../../globalStyle'
import Button from '../Button/Button'
import { Content, Details, IconBox, Price, Seller, Thumb, ThumbContainer, Title, Wrapper, Year } from './AdvertiseCard.styles'

export default function AdvertiseCard({ advertise }) {

  console.log(advertise);
  return (
    <Wrapper>
      <Year>{advertise.year}</Year>
      <ThumbContainer>
        <a href="#!">
          <Thumb src={advertise.urlImage} className='advertise__thumb'/>
        </a>
      </ThumbContainer>
      <Content>
        <Title>{advertise.brand} {advertise.model}</Title>
        <Price className='advertise__price'>${advertise.price}</Price>
        <Seller>
          <strong>Seller: </strong> {advertise.createdBy}
        </Seller>
        <Details>
          <IconBox>
            {iconsList.carOut}
            {advertise.vehicleType}
          </IconBox>
          <IconBox>
            {iconsList.steeringWheel}
            {advertise.transmission}
          </IconBox>
          <IconBox>
            {iconsList.oil}
            {advertise.fuelType}
          </IconBox>
        </Details>
        <Button 
          light={true}
          link='/' 
        >
          View Details
        </Button>
      </Content>
    </Wrapper>
  )
}
