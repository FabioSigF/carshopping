import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from './Button.styles'

export default function Button({children, link, btnStyle}) {
  const navigate = useNavigate()

  return (
    <Wrapper onClick={()=>navigate(`${link}`)} btnStyle={btnStyle}>
      {children}
    </Wrapper>
  )
}
