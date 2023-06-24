import React from 'react'

//hooks
import { useStateContext } from '../../context/ContextProvider'

//Styles
import { Wrapper, Background, Social, Nav, NavList, Navlink, } from '../../components/Footer/Footer.styles'

//Components
import { Container, iconsList } from '../../globalStyle'
import Logo from '../Logo'

export default function Footer() {

  const { user } = useStateContext();

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
                <Navlink to="/">
                  Home
                </Navlink>
              </li>
              <li>
                <Navlink to="/inventory">
                  Inventory
                </Navlink>
              </li>
              <li>
                <Navlink to="/about">
                  About us
                </Navlink>
              </li>
              {user && (
                <li>
                  <Navlink to="/advertise">
                    Advertise
                  </Navlink>
                </li>
              )}
            </NavList>
          </Nav>
        </Container>
      </Background>
    </Wrapper >
  )
}
