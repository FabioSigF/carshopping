import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import { borderRadius, Container, ErrorWarning } from '../../globalStyle'
import { Field, Form, Input, Label, Title, Wrapper } from './Login.styles'
//hooks
import { useAuthentication } from '../../hooks/useAuthentication'

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");

  const { login ,error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("");

    const user = {
      
      email,
      password
    }

    const res = await login(user)
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <Wrapper>
      <Container>
        <Title>
          Sign In!<br />
          To log into your account.
        </Title>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Field>
            <Label>Email</Label>
            <Input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field>
            <Label>Password</Label>
            <Input
              type='password'
              placeholder='Create a strong password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
          
          {!loading && <Button
            type='submit' btnStyle='primary' borderRadius={borderRadius.small}>
            Login
          </Button>}
          {loading && <Button
            type='submit' btnStyle='primary' borderRadius={borderRadius.small}
            disabled>
            Aguarde...
          </Button>}
          {error && <ErrorWarning>{error}</ErrorWarning>}
        </Form>
      </Container>
    </Wrapper>
  )
}
