import React from 'react'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import { Container } from '../../globalStyle'
import { Background, Wrapper } from './Home.styles'

export default function Home() {
  return (
    <Wrapper>
      <Background>
        <Header />

        <Container>

        </Container>
      </Background>
    </Wrapper>
  )
}
