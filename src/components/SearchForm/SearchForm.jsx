import React from 'react'
import Button from '../Button/Button'
import { Field, Form, Label, Option, Select, Wrapper } from './SearchForm.styles'

export default function SearchForm() {
  return (
    <Wrapper>
      <Form>
        <Field>
          <Label>Brand Name</Label>
          <Select>
            <Option value="Mercedes Benz">Mercedes Benz</Option>
            <Option value="Volkswagen">Volkswagen</Option>
            <Option value="Hyundai">Hyundai</Option>
            <Option value="Ferrari">Ferrari</Option>
          </Select>
        </Field>
        <Field>
          <Label>Select Type</Label>
          <Select>
            <Option value="SUV">SUV</Option>
            <Option value="Sedan">Sedan</Option>
            <Option value="Wagon">Wagon</Option>
            <Option value="Coup">Coup</Option>
          </Select>
        </Field>
        <Field>
          <Label>Select Models</Label>
          <Select>
            <Option value="Brooklands">Brooklands</Option>
            <Option value="Mazda MX Miata">Mazda MX Miata</Option>
            <Option value="Ferrari F12 TRS">Ferrari F12 TRS</Option>
            <Option value="Mercedes-Benz E 400">Mercedes-Benz E 400</Option>
          </Select>
        </Field>
        <Field>
          <Label>Transmission</Label>
          <Select>
            <Option value="Semi Automatic">Semi Automatic</Option>
            <Option value="Automatic">Automatic</Option>
            <Option value="Manual">Manual</Option>
          </Select>
        </Field>
        <Button type='submit' btnStyle='primaryDark'>Search Now</Button>
      </Form>
    </Wrapper>
  )
}
