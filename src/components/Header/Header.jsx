import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider'
import { Container } from '../../globalStyle';
import Button from '../Button';
import Logo from '../Logo'
import MenuMobile from '../MenuMobile';
import { Hamburger, Item, List, Nav, Wrapper } from './Header.styles'

export default function Navbar() {
  const [showMenuDesktop, setShowMenuDesktop] = useState(false);
  const { screenSize, setScreenSize, openMobileMenu, setOpenMobileMenu } = useStateContext();

  //Save window width
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize)

  }, []);

  //Show menu desktop according to window size
  useEffect(() => {
    if (screenSize >= 992) {
      setShowMenuDesktop(true)
    } else {
      setShowMenuDesktop(false)
    }
  }, [screenSize])

  //Show menu mobile
  const toggleMenuMobile = (e) => {
    e.preventDefault()
    setOpenMobileMenu(!openMobileMenu);
  }
  return (
    <Wrapper>
      <Container>
        <Nav>
          <Logo />
          {showMenuDesktop && (
            <List>
              <Item>
                <Link to='/'>
                  Home
                </Link>
              </Item>
              <Item>
                <Link to='/inventory'>
                  Inventory
                </Link>
              </Item>
              <Item>
                <Link to='/service'>
                  Service
                </Link>
              </Item>
              <Item>
                <Link to='/about'>
                  About Us
                </Link>
              </Item>
              {/*apenas logado */}
              <Item>
                <Link to='/dashboard'>
                  Dashboard
                </Link>
              </Item>
              {/*apenas deslogado */}
              <Item>
                <Button link={'/login'} btnStyle='primary'>Login</Button>
              </Item>
              {/*apenas deslogado */}
              <Item>
                <Button link={'/register'} btnStyle='outline'>Register</Button>
              </Item>
            </List>
          )}
          {!showMenuDesktop && (
            <>
              <Hamburger onClick={(e) => toggleMenuMobile(e)}>
                <div></div>
              </Hamburger>
              <MenuMobile/>
            </>
          )}
        </Nav>
      </Container>
    </Wrapper>
  )
}
