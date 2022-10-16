import React, { useState, useEffect } from 'react'
import Button from '../../components/Button/Button'
import { borderRadius, Container, Error, ErrorWarning } from '../../globalStyle'
import { Field, FieldButton, Form, Input, Label, Title, Wrapper } from './Register.styles'
import { useAuthentication } from '../../hooks/useAuthentication'

export default function Register() {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError('As senhas precisam ser iguais!')
    }

    const res = await createUser(user)
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
          Sign Up!<br />
          For New Account.
        </Title>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Field>
            <Label>Name</Label>
            <Input
              type='text'
              placeholder='Enter your name'
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </Field>
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
          <Field>
            <Label>Confirm Password</Label>
            <Input
              type='password'
              placeholder='Confirm the exact password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Field>
          
          {!loading && <Button
            type='submit' btnStyle='primary' borderRadius={borderRadius.small}>
            Register
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
