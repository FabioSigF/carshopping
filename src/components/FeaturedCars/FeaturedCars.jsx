import React from 'react';
import { Description, HeaderCont, TagTitle, Title } from '../../globalStyle';
import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';
import ButtonArrowCta from '../Buttons/ButtonArrowCta/ButtonArrowCta';
import { CarsContainer, Wrapper } from './FeaturedCars.styles';
import { useState } from 'react';
import { useEffect } from 'react';

export default function FeaturedCars({ carsList, loading }) {

  const [cars, setCars] = useState([]);


  useEffect(() => {
    if (carsList) {
      for (let i = 0; i < 6; i++) {
        setCars(current => [...current, carsList[i]]);
      }
    }
  }, [carsList])

  return (
    <Wrapper>
      <HeaderCont alignCenter>
        <TagTitle>Car List</TagTitle>
        <Title>Find the Best Deals For You</Title>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Aut natus ad pariatur dolorem aliquam nemo perferendis dignissimos vel ullam fugit?
        </Description>
      </HeaderCont>
      <CarsContainer>
        {loading && <p>Carregando...</p>}
        {cars &&
          cars.map((advertise, key) => (
            <AdvertiseCard
              advertise={advertise}
              key={key}
            />
          ))}
        {cars && cars.length === 0 && (
          <p>Não foram encontrados anuncios...</p>
        )}
      </CarsContainer>
      <ButtonArrowCta
        dark={true}
        link={"/inventory/"}
      >
        View More
      </ButtonArrowCta>
    </Wrapper>
  )
}
