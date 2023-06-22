import React from 'react'
import { Wrapper } from './ButtonLogin.styles'
import { useNavigate } from 'react-router-dom'

export default function ButtonLogin({children, link }) {
  const navigate = useNavigate();

  return (
    <Wrapper 
      onClick={link && (()=>navigate(`${link}`))}>
      {children}
    </Wrapper>
  )
}
