import React, { useState } from 'react'
import Button from '../../components/Buttons/Button/'

//styles
import { Container, ErrorWarning } from '../../globalStyle'
import { Aside, AsideContent, Box, ButtonWrapper, Checkbox, CheckboxField, CheckboxLabel, Content, Description, FeatureGridWrapper, Field, Form, Header, Input, Label, List, Text, Title, Wrapper } from './Advertise.styles'

//hooks
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useStateContext } from '../../context/ContextProvider'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-scroll'

export default function Advertise() {

  const [description, setDescription] = useState("")
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [vehicleCondition, setVehicleCondition] = useState("")
  const [transmission, setTransmission] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const [fuelType, setFuelType] = useState("")
  const [mileage, setMileage] = useState("")
  const [numberPlat, setNumberPlat] = useState("")
  const [registerDate, setRegisterDate] = useState("")
  const [vehicleIdentification, setvehicleIdentification] = useState("")
  const [engine, setEngine] = useState("")
  const [features, setFeatures] = useState([])
  const [externalColor, setExternalColor] = useState("")
  const [price, setPrice] = useState("")
  const [urlImage, setUrlImage] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [contact, setContact] = useState("")

  const [formError, setFormError] = useState("")

  const [scrollTop, setScrollTop] = useState(0)
  const { user } = useStateContext()
  const { insertDocument, response } = useInsertDocument("advertises")

  const navigate = useNavigate();

  const handleOnPriceChange = (e) => {
    e.target.maxLength = 12;
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    setPrice(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError("")

    //validar url image
    try {
      new URL(urlImage)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
    }
    //checar todos os valores
    if (formError) return;

    //redirect homepage
    try {
      await insertDocument({
        description,
        brand,
        model,
        year,
        vehicleCondition,
        transmission,
        vehicleType,
        fuelType,
        mileage,
        engine,
        features,
        externalColor,
        price,
        urlImage,
        state,
        city,
        contact,
        uid: user.uid,
        createdBy: user.displayName
      });
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  const handleChecked = (e, state, setState) => {
    const value = e.target.value
    if ((e.target.checked) && (!features.includes(value))) {
      setState([...state, value])
    } else if (!e.target.checked) {
      const list = state;
      const index = list.indexOf(value)
      list.splice(index)
      console.log(list)

    }
  }

  return (
    <Wrapper>
      <Container className='advertisePageContainer'>
        <Aside>
          <AsideContent>
            <Header>
              <Title>
                Add your car information
              </Title>
              <Text>
                Holistically embrace strategic theme and high standards in information.
              </Text>
            </Header>
            <List>
              <li>
                <Link
                  to="vehicleBasicInfo"
                  className='advertise__link'
                  spy={true} smooth={true} offset={-100} duration={500}
                >Basic Info</Link>
              </li>
              <li>
                <Link to="vehicleInfo"
                  className='advertise__link'
                  spy={true} smooth={true} offset={-100} duration={500}
                >Vehicle Information</Link>
              </li>
              <li>
                <Link to="vehicleRegistration"
                  className='advertise__link'
                  spy={true} smooth={true} offset={-100} duration={500}
                >Registration & VIN</Link>
              </li>
              <li>
                <Link to="vehicleFeature"
                  className='advertise__link'
                  spy={true} smooth={true} offset={-100} duration={500}
                >Select Car Features</Link>
              </li>
              <li>
                <Link to="vehiclePrice"
                  className='advertise__link'
                  spy={true} smooth={true} offset={-100} duration={500}
                >Vehicle Price</Link>
              </li>
              <li>
                <Link to="vehicleLocation"
                  className='advertise__link'
                  spy={true} smooth={true} offset={-100} duration={500}
                >Location</Link>
              </li>
            </List>
          </AsideContent>
        </Aside>
        <Content>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Box id="vehicleBasicInfo">
              <Title>Basic Info</Title>
              <Field>
                <Label>Brand*</Label>
                <Input
                  required
                  type='text'
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder='Ford'
                />
              </Field>
              <Field>
                <Label>Model*</Label>
                <Input
                  required
                  type='text'
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder='Mustang'
                />
              </Field>
              <Field>
                <Label>Year*</Label>
                <Input
                  required
                  type='number'
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder='2022'
                />
              </Field>
              <Field>
                <Label>Vehicle Condition*</Label>
                <select name="vehicleCondition" id="vehicleConditionAdvertise"
                  required
                  onChange={(e) => setVehicleCondition(e.target.value)}>
                  <option value="Select">Select</option>
                  <option value="Used Car">Used Car</option>
                  <option value="Brand New">Brand New</option>
                </select>
              </Field>
              <Field>
                <Label>Description</Label>
                <Description
                  required
                  placeholder='Tell us about your vehicle'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Field>
            </Box>
            <Box id="vehicleInfo">
              <Title>Vehicle Information</Title>
              <Field>
                <Label>Vehicle Type</Label>
                <select name="vehicleType" id="vehicleTypeAdvertise"
                  required
                  onChange={(e) => setVehicleType(e.target.value)}>
                  <option value="Select">Select</option>
                  <option value="Big Truck">Big Truck</option>
                  <option value="Cabriolet">Cabriolet</option>
                  <option value="Camper Van">Camper Van</option>
                  <option value="Coupe">Coupe</option>
                  <option value="CUV">CUV</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Micro">Micro</option>
                  <option value="Mini Truck">Mini Truck</option>
                  <option value="Mini Van">Mini Van</option>
                  <option value="Pickup">Pickup</option>
                  <option value="Roadster">Roadster</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Super Car">Super Car</option>
                  <option value="Sport Car">Sport car</option>
                  <option value="Truck">Truck</option>
                  <option value="Van">Van</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </Field>
              <Field>
                <Label>Color</Label>
                <Input
                  required
                  type='text'
                  value={externalColor}
                  onChange={(e) => setExternalColor(e.target.value)}
                  placeholder='Black'
                />
              </Field>
              <Field>
                <Label>Transmission</Label>
                <select name="transmission" id="transmissionAdvertise"
                  required
                  onChange={(e) => setTransmission(e.target.value)}>
                  <option value="Select">Select</option>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Semi-Automatic">Semi-Automatic</option>
                </select>
              </Field>
              <Field>
                <Label>Engine</Label>
                <Input
                  required
                  type='text'
                  value={engine}
                  onChange={(e) => setEngine(e.target.value)}
                  placeholder='3.0 6 cylinder'
                />
              </Field>
              <Field>
                <Label>Fuel Type</Label>
                <select name="fuelType" id="fuelTypeAdvertise"
                  required
                  onChange={(e) => setFuelType(e.target.value)}>
                  <option value="Select">Select</option>
                  <option value="Alcohol">Alcohol</option>
                  <option value="Eletric">Eletric</option>
                  <option value="Flex">Flex</option>
                  <option value="Gasoline">Gasoline</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Petrol">Petrol</option>
                </select>
              </Field>
              <Field>
                <Label>Mileage (KM)</Label>
                <Input
                  required
                  type='number'
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                  placeholder='2000'
                />
              </Field>
            </Box>
            <Box id="vehicleRegistration">
              <Title>Vehicle Registration & VIN</Title>
              <Field>
                <Label>Number Plate*</Label>
                <Input
                  required
                  type='text'
                  value={numberPlat}
                  onChange={(e) => setNumberPlat(e.target.value)}
                  placeholder='ABC-1234'
                />
              </Field>
              <Field>
                <Label>Register Date*</Label>
                <Input
                  required
                  type='text'
                  value={registerDate}
                  onChange={(e) => setRegisterDate(e.target.value)}
                  placeholder='MM/DD/YY'
                />
              </Field>
              <Field>
                <Label>Vehicle Identification*</Label>
                <Input
                  required
                  type='text'
                  value={vehicleIdentification}
                  onChange={(e) => setvehicleIdentification(e.target.value)}
                  placeholder='VIN'
                />
              </Field>
            </Box>
            <Box id="vehicleFeature">
              <Title>Select Car Features</Title>
              <Field>
                <Label>URL Image</Label>
                <Input
                  required
                  type='text'
                  value={urlImage}
                  onChange={(e) => setUrlImage(e.target.value)}
                />
              </Field>
              <FeatureGridWrapper>
                <Field>
                  <Label>Interior</Label>
                  <CheckboxField>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Multi-zone A/C'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Multi-zone A/C
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Heated front seats'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Heated front seats
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Navigation system'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Navigation system
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Leather seats'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Leather seats
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Intermittent wipers'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Intermittent wipers
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Memory seat'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Memory seat
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Sound system'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Sound system
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Bluetooth'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Bluetooth
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Android auto'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Android auto
                    </CheckboxLabel>
                  </CheckboxField>
                </Field>
                <Field>
                  <Label>Safety</Label>
                  <CheckboxField>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Adaptative cruise control'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Adaptative cruise control
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Cooled seats'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Cooled seats
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Keyless start'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Keyless start
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Remote start'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Remote start
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Airbag'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Airbag
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Antilock braking system'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Antilock braking system
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Stability control'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Stability control
                    </CheckboxLabel>
                  </CheckboxField>
                </Field>
                <Field>
                  <Label>Exterior</Label>
                  <CheckboxField>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Sun roof'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Sun roof
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Panoramic roof'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Panoramic roof
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Tinted glass'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Tinted glass
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type='checkbox'
                        value='Fog lights'
                        onClick={(e) => handleChecked(e, features, setFeatures)}
                      />
                      Fog lights
                    </CheckboxLabel>
                  </CheckboxField>
                </Field>
              </FeatureGridWrapper>
            </Box>
            <Box id="vehiclePrice">
              <Title>Vehicle Price</Title>
              <Field>
                <Label>Currency*</Label>
                <select name="currency" id="currency">
                  <option value="USD">USD</option>
                  <option value="BRL">BRL</option>
                  <option value="EURO">EURO</option>
                  <option value="LBR">LBR</option>
                </select>
              </Field>
              <Field>
                <Label>Price (US$)</Label>
                <Input
                  required
                  type='string'
                  value={price}
                  onChange={(e) => handleOnPriceChange(e)}
                />
              </Field>
            </Box>
            <Box id="vehicleLocation">
              <Title>Vehicle Location</Title>
              <Field>
                <Label>State</Label>
                <Input
                  required
                  type='text'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </Field>
              <Field>
                <Label>City</Label>
                <Input
                  required
                  type='text'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Field>
              <Field>
                <Label>Contact</Label>
                <Input
                  required
                  type='tel'
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  pattern='[0-9]{3} [0-9]{3}-[0-9]{4}'
                  placeholder="888 888-8888"
                  maxLength={12}
                />
              </Field>
            </Box>
            <ButtonWrapper>
              {!response.loading &&
                <Button type='submit'>
                  Send Advertise
                </Button>
              }
              {response.loading && (
                <Button type='submit'>
                  Wait for...
                </Button>
              )}
            </ButtonWrapper>
            {response.error && <ErrorWarning>{response.error}</ErrorWarning>}
            {formError && <ErrorWarning>{formError}</ErrorWarning>}
          </Form>
        </Content>
      </Container>
    </Wrapper>
  )
}
