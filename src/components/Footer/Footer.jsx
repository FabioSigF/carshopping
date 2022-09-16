import React from 'react'
import { Wrapper, Background, Contact, ContactIcon, Social, Nav, NavList, NavTitle, NavItem, Navlink, Copyright, CopyrightContent } from '../../components/Footer/Footer.styles'
import { Container, iconsList } from '../../globalStyle'
import Logo from '../Logo'

import Newsletter from '../Newsletter/Newsletter'


export default function Footer() {
  return (
    <Wrapper>
      <Background>
        <Container className='footerContainer'>
          <div className='footerContainerContact'>
          <Contact>
            <h3>Have a Question? Feel Free to Ask..Feedback</h3>
            <p>
              Compellingly expedite mission-critical methodologies and integrated readiness without quality intellectual capital.
            </p>

            <a href="tel:+978-9674-4455">
              <ContactIcon>
                {iconsList.phoneCall}
              </ContactIcon>
              +978-9674-4455
            </a>
          </Contact>
          <Newsletter />
          </div>
          <div className='footerContainerNav'>
          <Social>
            <Logo />
            <ul>
              <li>
                <a href="#!">{iconsList.facebook}</a>
              </li>
              <li>
                <a href="#!">{iconsList.linkedin}</a>
              </li>
              <li>
                <a href="#!">{iconsList.twitter}</a>
              </li>
              <li>
                <a href="#!">{iconsList.instagram}</a>
              </li>
            </ul>
          </Social>
          <Nav>
            <NavList>
              <NavTitle>About Company</NavTitle>
              <NavItem>
                <Navlink href='#!'>
                  Our Company
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Shop Toyota
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Autohive USA
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Autohive Worldwide
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Autohive Racing
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  TRD USA
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Autohive Plan Tours
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Virtual Auto Show
                </Navlink>
              </NavItem>
            </NavList>
            <NavList>
              <NavTitle>Vehicles Type</NavTitle>
              <NavItem>
                <Navlink href='#!'>
                  All Autohive Vehicles
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  SUVs
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Trucks
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Cars
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Crossovers
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Electrified Vehicles
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Hybrids
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  HibridSUVs
                </Navlink>
              </NavItem>
            </NavList>
            <NavList>
              <NavTitle>Quick links</NavTitle>
              <NavItem>
                <Navlink href='#!'>
                  My account
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Champaings
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Autohive Dealers
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Deals and Incentives
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Financial Services
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Autohive Insurance
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  Autohive Care
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='#!'>
                  FAQs & support
                </Navlink>
              </NavItem>
            </NavList>
          </Nav>
          </div>
        </Container>
        <Copyright>
          <Container>
            <CopyrightContent>
              <div>
                &copy; All rights reserved. Made by <span>ThemeTags</span>
              </div>
              <ul>
                <li>
                  <a href="#!">Terms of use</a>
                </li>
                <li>
                  <a href="#!">Privacy policy</a>
                </li>
              </ul>
            </CopyrightContent>
          </Container>
        </Copyright>
      </Background>
    </Wrapper>
  )
}
