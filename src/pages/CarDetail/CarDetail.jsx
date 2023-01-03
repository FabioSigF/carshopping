import React, { useState, useEffect } from 'react'
import { Container, Description, HeaderCont, iconsList, Title } from '../../globalStyle'
import { AsideInfo, Buttons, CarHero, CarInfo, ContactForm, ContactFormInputs, FeaturesList, FeaturesMarked, FlexWrapper, Hero, InfoList, InfoListIcon, Price, PublishDate, SectionContent, SectionTitle, SectionWrapper, Seller, SellerAvatar, SellerButton, SellerData, SellerLink, SellerName, SellerRating, Wrapper } from './CarDetail.styles'

import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import Button from '../../components/Button/Button';
import sellerImg from '../../assets/img/author/seller.jpg';
export default function CarDetail() {

  const { id } = useParams();
  const { document: advertise, loading } = useFetchDocument("advertises", id);
  const [advertiseFeatures, setAdvertiseFeatures] = useState(null);


  useEffect(() => {

    const advertiseInfo = async () => {
      const info = await advertise;

      setAdvertiseFeatures(info);
      return info;
    }

    advertiseInfo();
  }, [advertise, advertiseFeatures])


  var keyInformation = [];

  if (advertiseFeatures !== null) {

    keyInformation = [
      {
        title: 'Body Type',
        text: advertiseFeatures.vehicleType,
        icon: iconsList.carOut
      },
      {
        title: 'Mileage (Mi)',
        text: advertiseFeatures.mileage,
        icon: iconsList.speed
      },
      {
        title: 'Transmission',
        text: advertiseFeatures.transmission,
        icon: iconsList.carSide
      },
      {
        title: 'Condition',
        text: advertiseFeatures.vehicleCondition,
        icon: iconsList.clock
      },
      {
        title: 'Engine',
        text: advertiseFeatures.engine,
        icon: iconsList.tools
      },
      {
        title: 'Year',
        text: advertiseFeatures.year,
        icon: iconsList.calendar
      },
      {
        title: 'Transmission',
        text: advertiseFeatures.transmission,
        icon: iconsList.steeringWheel
      },
      {
        title: 'Fuel Type',
        text: advertiseFeatures.fuelType,
        icon: iconsList.oil
      },
      {
        title: 'Color',
        text: advertiseFeatures.color,
        icon: iconsList.color
      },
    ]
  }
  return (
    <Wrapper>
      <Container>
        {loading && <p>Carregando post...</p>}
        {(advertise && advertiseFeatures !== null) &&
          (
            <FlexWrapper>
              <CarInfo>
                <SectionWrapper>
                  <CarHero>
                    <HeaderCont>
                      <Title>{`${advertise.brand} ${advertise.model}`}</Title>
                      <PublishDate>
                        <span>{iconsList.clock}Listed on: </span>
                        <span>{iconsList.eye}Views: 934</span>
                      </PublishDate>
                    </HeaderCont>
                    <Hero src={advertise.urlImage} alt={advertise.title} />
                  </CarHero>
                </SectionWrapper>
                <SectionWrapper>
                  <SectionContent>
                    <SectionTitle>Key Information</SectionTitle>
                    <InfoList>
                      {advertise && (
                        keyInformation.map((item) => (
                          <li>
                            <InfoListIcon>{item.icon}</InfoListIcon>
                            <div>
                              <h6>{item.title}</h6>
                              <p>{item.text}</p>
                            </div>
                          </li>
                        ))
                      )}
                    </InfoList>
                  </SectionContent>
                  <SectionContent>
                    <SectionTitle>About This Listing</SectionTitle>
                    <Description>{advertise.description}</Description>
                  </SectionContent>
                  <SectionContent>
                    <SectionTitle>Car Features</SectionTitle>
                    <FeaturesList>
                      {advertise.features.map((item) => (
                        <li>
                          <FeaturesMarked>
                            {iconsList.check}
                          </FeaturesMarked>
                          {item}
                        </li>
                      ))}
                    </FeaturesList>
                  </SectionContent>
                </SectionWrapper>
              </CarInfo>
              <AsideInfo>
                <Price>
                  ${advertiseFeatures.price}
                  <span>{iconsList.eye}{advertiseFeatures.city}, {advertiseFeatures.state}</span>
                </Price>
                <SectionWrapper>
                  <Seller>
                    <SellerAvatar src={sellerImg} />
                    <SellerData>
                      <SellerName>{advertiseFeatures.createdBy}</SellerName>
                      <SellerRating>
                        <span>{iconsList.star}</span>
                        <span>{iconsList.star}</span>
                        <span>{iconsList.star}</span>
                        <span>{iconsList.star}</span>
                        <span>{iconsList.star}</span>
                      </SellerRating>
                      <SellerLink>Other ads by this seller</SellerLink>
                    </SellerData>
                  </Seller>
                  <Buttons>
                    <SellerButton href='#!'>{iconsList.chat}Quick Start</SellerButton>
                    <SellerButton href='#!'>{iconsList.share}Share Now</SellerButton>
                  </Buttons>

                  <ContactForm>
                    <ContactFormInputs>
                      <label htmlFor="name">Name:
                        <input type={'text'} name="name" id="nameContForm" />
                      </label>
                      <label htmlFor="email">Email:
                        <input type={'email'} name="email" id="emailContForm" />
                      </label>
                      <label htmlFor="phone">Phone:
                        <input type={'tel'} name="phone" id="phoneContForm" />
                      </label>
                      <label htmlFor="price">Trade Price:
                        <input type={'number'} name="price" id="priceContForm" />
                      </label>
                    </ContactFormInputs>
                    <label>Message:
                      <textarea name="message" id="messageContForm" cols="30" rows="10"></textarea>
                    </label>
                    <Button>Submit Offer</Button>
                  </ContactForm>
                </SectionWrapper>
              </AsideInfo>
            </FlexWrapper>
          )}
      </Container>
    </Wrapper>
  )
}
