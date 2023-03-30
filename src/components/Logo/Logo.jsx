import React from 'react'
import { Subtitle, Title, Wrapper } from './Logo.styles'
import { Link } from 'react-router-dom'
export default function Logo2() {
  return (
    <Wrapper>
      <Link to="/">
        <Title>Auto<span>Club</span></Title>
        <Subtitle>
          <p>S</p>
          <p>i</p>
          <p>n</p>
          <p>c</p>
          <p>e</p>
          <p> </p>
          <p>2</p>
          <p>0</p>
          <p>2</p>
          <p>3</p>
        </Subtitle>
      </Link>
    </Wrapper>
  )
}
