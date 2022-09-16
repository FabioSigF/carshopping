import React from 'react'
import { useNavigate } from 'react-router-dom'
import { iconsList } from '../../globalStyle'
import { Wrapper } from './Button.styles'
import buttonCtaIcon from '../../assets/img/icons/main-cta.svg'
export default function Button({children, link, btnStyle, color, borderColor, height}) {
  const navigate = useNavigate()

  return (
    <Wrapper onClick={()=>navigate(`${link}`)} 
      btnStyle={btnStyle}
      color={color}
      borderColor={borderColor}
      height={height}
    >
      {btnStyle === 'mainCta' && (
        <img src={buttonCtaIcon} alt="" /> 
      )}{children}
    </Wrapper>
  )
}
