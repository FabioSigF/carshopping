import React from 'react';
import { Description, HeaderCont, TagTitle, Title } from '../../globalStyle';
import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';
import ButtonArrowCta from '../Buttons/ButtonArrowCta/ButtonArrowCta';
import { CarsContainer, Wrapper } from './FeaturedCars.styles';

export default function FeaturedCars({ carsList, loading }) {

  return (
    <Wrapper>
      <HeaderCont alignCenter>
        <TagTitle>Car List</TagTitle>
        <Title>Find the Best Deals For You</Title>
        <Description>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>Aut natus ad pariatur dolorem aliquam nemo perferendis dignissimos vel ullam fugit?
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
      <ButtonArrowCta
        dark={true}
      >
        View More
      </ButtonArrowCta>
    </Wrapper>
  )
}
