import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from './Button.styles'
export default function Button({children, link,disabled, light, dark, type, small, onClick}) {
  const navigate = useNavigate()

  return (
    <Wrapper 
      onClick={onClick ? onClick : link && (()=>navigate(`${link}`))}
      light={light}
      dark={dark}
      type={type}
      small={small}
      disabled={disabled ? true : false}
    >
      {children}
    </Wrapper>
  )
}
