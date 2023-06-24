import React from 'react'
import { Wrapper, Background, Social, Nav, NavList,  Navlink, } from '../../components/Footer/Footer.styles'
import { Container, iconsList } from '../../globalStyle'
import Logo from '../Logo'

export default function Footer() {
  return (
    <Wrapper>
      <Background>
        <Container
          className='footerContainer'
        >

          <Logo />
          <Nav>
            <Social>
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
            </Social>
            <NavList>
              <li>
                <Navlink>
                  Home
                </Navlink>
              </li>
              <li>
                <Navlink>
                  Inventory
                </Navlink>
              </li>
              <li>
                <Navlink>
                  About us
                </Navlink>
              </li>
              <li>
                <Navlink>
                  Advertise
                </Navlink>
              </li>
            </NavList>
          </Nav>
        </Container>
      </Background>
    </Wrapper >
  )
}
