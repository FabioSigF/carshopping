import React from 'react'
import { Cta, Form, Input, Submit, Wrapper } from './Newsletter.styles'

export default function Newsletter() {
  return (
    <Wrapper>
      <Cta>
        Get latest updates & offers
      </Cta>
      <Form>
        <Input type='email' name='email' placeholder='Enter your email...' />
        <Submit type='submit' value='Subscribe'/>
      </Form>
    </Wrapper>
  )
}
