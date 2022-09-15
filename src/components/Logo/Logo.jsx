import React from 'react'
import { Logo, Wrapper } from './Logo.styles'
import logo from '../../assets/img/logo/logo.png'
import { Link } from 'react-router-dom'
export default function Logo2() {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} alt="Logo" />
      </Link>
    </Wrapper>
  )
}
