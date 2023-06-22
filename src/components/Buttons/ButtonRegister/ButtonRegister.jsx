import React from 'react'
import { Wrapper } from './ButtonRegister.styles'
import { useNavigate } from 'react-router-dom'

export default function ButtonRegister({children, link}) {

  const navigate = useNavigate();
  
  return (
    <Wrapper 
      onClick={link && (()=>navigate(`${link}`))}
    >{children}</Wrapper>
  )
}
