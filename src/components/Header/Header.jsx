import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

//hooks
import { useStateContext } from '../../context/ContextProvider'
import { useAuthentication } from '../../hooks/useAuthentication';

//styles
import { Hamburger, Item, List, Nav, Wrapper } from './Header.styles'

//Components
import Logo from '../Logo'
import MenuMobile from '../MenuMobile';
import ButtonLogin from '../Buttons/ButtonLogin/ButtonLogin';
import ButtonRegister from '../Buttons/ButtonRegister/ButtonRegister';
import { Container } from '../../globalStyle';

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
                <NavLink to="/" end>
                  Home
                </NavLink>
              </Item>
              <Item>
                <NavLink to="/inventory/">
                  Inventory
                </NavLink>
              </Item>
              <Item>
                <NavLink to='/about/'>
                  About Us
                </NavLink>
              </Item>
              {user && (
                <>
                  <Item>
                    <NavLink to='/advertise/'>
                      Advertise
                    </NavLink>
                  </Item>
                  <Item>
                    <NavLink to='/profile/'>
                      Profile
                    </NavLink>
                  </Item>
                  <Item>
                    <a href="#!" onClick={logout}>Logout</a>
                  </Item>
                </>
              )}
              {!user && (
                <>
                  <li>
                    <ButtonLogin
                      link={'/login/'}
                    >Login</ButtonLogin>
                  </li>

                  <li>
                    <ButtonRegister
                      link={'/register/'}
                    >
                      Register
                    </ButtonRegister>
                  </li>
                </>
              )}
            </List>
          )}
          {!showMenuDesktop && (
            <>
              {!openMobileMenu && (
                <Hamburger onClick={(e) => toggleMenuMobile(e)}>
                  <div></div>
                </Hamburger>
              )}
              <MenuMobile />
            </>
          )}
        </Nav>
      </Container>
    </Wrapper>
  )
}
