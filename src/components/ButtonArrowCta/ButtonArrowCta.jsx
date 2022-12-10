import React from 'react'
import { Wrapper } from './ButtonArrowCta.styles'
import buttonCtaIcon from '../../assets/img/icons/main-cta.svg'
import { useNavigate } from 'react-router-dom'

export default function ButtonArrowCta({ title, children, dark, link }) {
  
  const navigate = useNavigate();

  return (

    <Wrapper
      dark={dark}
      onClick={link && (()=>navigate(`${link}`))}
    >
      <img src={buttonCtaIcon} alt={title} />
      {children}
    </Wrapper>
  )
}
