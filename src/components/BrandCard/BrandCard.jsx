import React from 'react'
import { Wrapper } from './BrandCard.styles'

export default function BrandCard({logo, title}) {
  return (
    <Wrapper>
      <img src={logo} alt={title} />
    </Wrapper>
  )
}
