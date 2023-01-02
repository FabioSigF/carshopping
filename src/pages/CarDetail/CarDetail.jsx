import React from 'react'
import { HeaderCont, iconsList, Title } from '../../globalStyle'
import { CarHero, Hero, PublishDate, Slider, Wrapper } from './CarDetail.styles'

import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

export default function CarDetail() {

  const { id } = useParams();
  const { document: advertise, loading } = useFetchDocument("advertises", id);
  return (
    <Wrapper>
      <p>Details</p>
      {loading && <p>Carregando post...</p>}
      {advertise &&
        (
          <>
            <CarHero>
              <HeaderCont>
                <Title>{`${advertise.brand} ${advertise.model}`}</Title>
                <PublishDate>
                  <span>{iconsList.clock}Listed on: </span>
                  <span>{iconsList.eye}Views: 934</span>
                </PublishDate>
              </HeaderCont>
              <Hero src={advertise.urlImage} alt={advertise.title} />
              <Slider>
              </Slider>
            </CarHero>
          </>
        )}
    </Wrapper>
  )
}
