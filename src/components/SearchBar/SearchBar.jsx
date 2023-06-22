import React from 'react'
import { iconsList } from '../../globalStyle'
import Button from '../Buttons/Button/'
import { Form, Header, Wrapper } from './SearchBar.styles'

export default function SearchBar() {

  const handleSearch = () => {

  }

  return (
    <Wrapper>
      <Header>
        {iconsList.carSport}
        <h2>Search Inventory</h2>
      </Header>
      <Form onSubmit={handleSearch}>
        <select name="year" id="year">
          <option>Choose Year</option>
        </select>
        <select name="make" id="make">
          <option>Choose Make</option>
        </select>
        <select name="model" id="model">
          <option>Choose Model</option>
        </select>
        <Button>{iconsList.search}Search</Button>
      </Form>
    </Wrapper>
  )
}
