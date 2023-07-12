import React from 'react'

//Styles
import { Container, SectionWrapper } from '../../globalStyle'
import { BrandsContainer, OfferAside, Wrapper } from './Home.styles'

//Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

//Components
import WhyUs from '../../components/WhyUs/WhyUs'
import Feedback from '../../components/Feedback/Feedback'
import News from '../../components/News/News'
import CostumerExp from '../../components/CostumerExp/CostumerExp'
import BestBrands from '../../components/BestBrands/BestBrands'
import Offer from '../../components/Offer/Offer'
import FeaturedCars from '../../components/FeaturedCars/FeaturedCars'
import OurStaff from '../../components/OurStaff/OurStaff'
import Hero from '../../components/Hero/Hero'
import SearchBar from '../../components/SearchBar/SearchBar'

export default function Home() {
  const { documents: advertises, loading } = useFetchDocuments("advertises");
  return (
    <Wrapper>
      <Hero />
      <SectionWrapper>
        <Container>
          <FeaturedCars
            carsList={advertises}
            loading={loading}
          />
        </Container>
      </SectionWrapper>
      <SectionWrapper sectionWhite>
        <Container>
          <CostumerExp />
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <BrandsContainer>
            <BestBrands />
            <OfferAside>
              <Offer />
            </OfferAside>
          </BrandsContainer>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <WhyUs />
        </Container>
      </SectionWrapper>
      <Feedback />
      <SectionWrapper>
        <Container>
          <OurStaff />
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <News />
        </Container>
      </SectionWrapper>
    </Wrapper >
  )
}
