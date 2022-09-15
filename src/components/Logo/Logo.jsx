import React from 'react'
import { Logo, Wrapper } from './Logo.styles'
import logo from '../../assets/img/logo/logo.png'
export default function Logo2() {
  return (
    <Wrapper>
      <a href="#!">
        <Logo src={logo} alt="Logo" />
      </a>
    </Wrapper>
  )
}
