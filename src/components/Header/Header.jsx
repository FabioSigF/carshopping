import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Container } from '../../globalStyle';
import Button from '../Button';
import Logo from '../Logo'
import MenuMobile from '../MenuMobile';

//hooks
import { useStateContext } from '../../context/ContextProvider'
import { useAuthentication } from '../../hooks/useAuthentication';

//styles
import { Hamburger, Item, List, Nav, Wrapper } from './Header.styles'

export default function Navbar() {

  const [showMenuDesktop, setShowMenuDesktop] = useState(false);
  const { user } = useStateContext()
  const { logout } = useAuthentication()
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
                <NavLink to='/'>
                  Home
                </NavLink>
              </Item>
              <Item>
                <NavLink to='/inventory'>
                  Inventory
                </NavLink>
              </Item>
              <Item>
                <NavLink to='/about'>
                  About Us
                </NavLink>
              </Item>
              <Item>
                <NavLink to='/advertise'>
                  Advertise
                </NavLink>
              </Item>
              {user && (
                <>
                  <Item>
                    <NavLink to='/dashboard'>
                      Dashboard
                    </NavLink>
                  </Item>
                  <Item>
                    <a href="#!" onClick={logout}>Logout</a>
                  </Item>
                </>
              )}
              {!user && (
                <>
                  <Item>
                    <Button link={'/login'} btnStyle='primary'>Login</Button>
                  </Item>

                  <Item>
                    <Button link={'/register'} btnStyle='outline'>Register</Button>
                  </Item>
                </>
              )}
            </List>
          )}
          {!showMenuDesktop && (
            <>
              <Hamburger onClick={(e) => toggleMenuMobile(e)}>
                <div></div>
              </Hamburger>
              <MenuMobile />
            </>
          )}
        </Nav>
      </Container>
    </Wrapper>
  )
}
