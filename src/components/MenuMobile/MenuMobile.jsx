import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'
import { iconsList } from '../../globalStyle'
import Logo from '../Logo'
import { CloseBtn, Wrapper, Header, List, Item, Contact, Social } from './MenuMobile.styles'

export default function MenuMobile() {

  const {openMobileMenu, setOpenMobileMenu } = useStateContext()

  const toggleMenu = (e) => {
    e.preventDefault();
    setOpenMobileMenu(!openMobileMenu)
  }
  return (
    <Wrapper openMenu={openMobileMenu}>
      <CloseBtn onClick={(e)=> toggleMenu(e)}>
        {iconsList.close}
      </CloseBtn>
      <Header>
        <Logo />
      </Header>
      <List>
        <Item>
          <Link to='/' onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            Home
          </Link>
        </Item>
        <Item >
          <Link to='/inventory' onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            Inventory
          </Link>
        </Item>
        <Item>
          <Link to='/service' onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            Service
          </Link>
        </Item>
        <Item>
          <Link to='/about' onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            About Us
          </Link>
        </Item>
        {/*apenas logado */}
        <Item>
          <Link to='/dashboard' onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            Dashboard
          </Link>
        </Item>
        {/*apenas deslogado */}
        <Item>
          <Link to='/login' onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            Login
          </Link>
        </Item>
        {/*apenas deslogado */}
        <Item>
          <Link to='/register' onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            Register
          </Link>
        </Item>
      </List>
      <Contact>
        <h2>Contact Info</h2>
        <address>Chicago 12, Melborne City, USA</address>
        <a href="tel:+8801682648101">+88 01682648101</a>
        <a href="mailto:info@example.com">info@example.com</a>
      </Contact>
      <Social>
        <li>
          <a href="#!">
            {iconsList.facebook}
          </a>
        </li>
        <li>
          <a href="#!">
            {iconsList.twitter}
          </a>
        </li>
        <li>
          <a href="#!">
            {iconsList.instagram}
          </a>
        </li>
        <li>
          <a href="#!">
            {iconsList.linkedin}
          </a>
        </li>
      </Social>
    </Wrapper>
  )
}
