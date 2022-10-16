import React from 'react'
import { useNavigate } from 'react-router-dom'
import { iconsList } from '../../globalStyle'
import { Wrapper } from './Button.styles'
import buttonCtaIcon from '../../assets/img/icons/main-cta.svg'
export default function Button({children, link, type, btnStyle, color, borderColor, height, borderRadius, disabled}) {
  const navigate = useNavigate()

  return (
    <Wrapper 
      onClick={link && (()=>navigate(`${link}`))} 
      btnStyle={btnStyle}
      color={color}
      borderColor={borderColor}
      height={height}
      type={type ? type : 'button'}
      borderRadius={borderRadius}
      disabled={disabled ? true : false}
    >
      {btnStyle === 'mainCta' && (
        <img src={buttonCtaIcon} alt="" /> 
      )}{children}
    </Wrapper>
  )
}
