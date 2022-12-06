import React from 'react';
import { Description, HeaderCont, Subtitle, Title } from '../../globalStyle';
import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';
import Button from '../Button/Button';
import { CarsContainer, Wrapper } from './FeaturedCars.styles';

export default function FeaturedCars({ carsList, loading }) {

  return (
    <Wrapper>
      <HeaderCont alignCenter>
        <Title>Car List</Title>
        <Subtitle>Recent cars</Subtitle>
        <Description>
          Dramatically plagiarize cost effective products and impactful action items. <br/>Credibly impactful sources before frictionless.
        </Description>
      </HeaderCont>
      <CarsContainer>
        {loading && <p>Carregando...</p>}
        {carsList &&
          carsList.map((advertise, key) => (
            <AdvertiseCard
              advertise={advertise}
              key={key}
            />
          ))}
        {carsList && carsList.lenght === 0 && (
          <p>Não foram encontrados anuncios...</p>
        )}
      </CarsContainer>
      <Button
        btnStyle={'mainCta'}
        color={'primary'}
      >View More</Button>
    </Wrapper>
  )
}
