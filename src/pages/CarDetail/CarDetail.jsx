import React, { useState, useEffect } from 'react'
import { Container, Description, HeaderCont, iconsList, Title } from '../../globalStyle'
import { AsideInfo, Buttons, CarHero, CarInfo, ContactForm, ContactFormInputs, FeaturesList, FeaturesMarked, FlexWrapper, Hero, InfoList, InfoListIcon, Price, PublishDate, SectionContent, SectionTitle, SectionWrapper, Seller, SellerAvatar, SellerButton, SellerData, SellerLink, SellerName, SellerRating, Wrapper } from './CarDetail.styles'

import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import Button from '../../components/Buttons/Button/';
import sellerImg from '../../assets/img/author/seller.jpg';
export default function CarDetail() {

  const { id } = useParams();
  const { document: advertise, loading } = useFetchDocument("advertises", id);

  return (
    <Wrapper>
      <Container>
        {loading && <p>Carregando post...</p>}
        {advertise &&
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
                        <>
                          <li>
                            <InfoListIcon>{iconsList.carOut}</InfoListIcon>
                            <div>
                              <h6>{'Body Type'}</h6>
                              <p>{advertise.vehicleType}</p>
                            </div>
                          </li>
                          <li>
                            <InfoListIcon>{iconsList.speed}</InfoListIcon>
                            <div>
                              <h6>{'Mileage (Mi)'}</h6>
                              <p>{advertise.mileage}</p>
                            </div>
                          </li>
                          <li>
                            <InfoListIcon>{iconsList.carSide}</InfoListIcon>
                            <div>
                              <h6>{'Transmission'}</h6>
                              <p>{advertise.transmission}</p>
                            </div>
                          </li>
                          <li>
                            <InfoListIcon>{iconsList.clock}</InfoListIcon>
                            <div>
                              <h6>{'Condition'}</h6>
                              <p>{advertise.vehicleCondition}</p>
                            </div>
                          </li>
                          <li>
                            <InfoListIcon>{iconsList.tools}</InfoListIcon>
                            <div>
                              <h6>{'Engine'}</h6>
                              <p>{advertise.engine}</p>
                            </div>
                          </li>
                          <li>
                            <InfoListIcon>{iconsList.calendar}</InfoListIcon>
                            <div>
                              <h6>{'Year'}</h6>
                              <p>{advertise.year}</p>
                            </div>
                          </li>
                          <li>
                            <InfoListIcon>{iconsList.steeringWheel}</InfoListIcon>
                            <div>
                              <h6>{'Transmission'}</h6>
                              <p>{advertise.transmission}</p>
                            </div>
                          </li>
                          <li>
                            <InfoListIcon>{iconsList.oil}</InfoListIcon>
                            <div>
                              <h6>{'Fuel Type'}</h6>
                              <p>{advertise.fuelType}</p>
                            </div>
                          </li>
                          <li>
                            <InfoListIcon>{iconsList.color}</InfoListIcon>
                            <div>
                              <h6>{'Color'}</h6>
                              <p>{advertise.externalColor}</p>
                            </div>
                          </li>
                        </>

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
                      {advertise.features.map((advertise) => (
                        <li>
                          <FeaturesMarked>
                            {iconsList.check}
                          </FeaturesMarked>
                          {advertise}
                        </li>
                      ))}
                    </FeaturesList>
                  </SectionContent>
                </SectionWrapper>
              </CarInfo>
              <AsideInfo>
                <Price>
                  ${advertise.price}
                  <span>{iconsList.eye}{advertise.city}, {advertise.state}</span>
                </Price>
                <SectionWrapper>
                  <Seller>
                    <SellerAvatar src={sellerImg} />
                    <SellerData>
                      <SellerName>{advertise.createdBy}</SellerName>
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
