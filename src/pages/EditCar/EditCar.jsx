import React, { useEffect, useState } from 'react'
import { Content, Wrapper } from './EditCar.styles'
import { Box, ButtonWrapper, Checkbox, CheckboxField, CheckboxLabel, Description, FeatureGridWrapper, Field, Form, Input, Label } from '../Advertise/Advertise.styles'
import { Container, ErrorWarning, Title } from '../../globalStyle'
import Button from '../../components/Buttons/Button/Button'
import { useStateContext } from '../../context/ContextProvider'
import { useNavigate, useParams } from 'react-router-dom'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'
import { useFetchDocument } from '../../hooks/useFetchDocument'

export default function EditCar() {

  const { id } = useParams();

  const { document: advertise } = useFetchDocument("advertises", id);

  const { user } = useStateContext()

  const [description, setDescription] = useState("")
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [vehicleCondition, setVehicleCondition] = useState("")
  const [transmission, setTransmission] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const [fuelType, setFuelType] = useState("")
  const [mileage, setMileage] = useState("")
  const [engine, setEngine] = useState("")
  const [externalColor, setExternalColor] = useState("")
  const [price, setPrice] = useState("")
  const [urlImage, setUrlImage] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [contact, setContact] = useState("")

  const [formError, setFormError] = useState("");

  const handleOnPriceChange = (e) => {
    e.target.maxLength = 12;
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    setPrice(value);
  }


  useEffect(() => {
    if (advertise) {
      setDescription(advertise.description);
      setBrand(advertise.brand);
      setModel(advertise.model);
      setYear(advertise.year);
      setVehicleCondition(advertise.vehicleCondition);
      setTransmission(advertise.transmission);
      setVehicleType(advertise.vehicleType);
      setFuelType(advertise.fuelType);
      setMileage(advertise.mileage);
      setEngine(advertise.engine);
      setExternalColor(advertise.externalColor);
      setPrice(advertise.price);
      setUrlImage(advertise.urlImage);
      setState(advertise.state);
      setCity(advertise.city);
      setContact(advertise.contact);
    }
  }, [advertise])

  const { updateDocument, response } = useUpdateDocument("advertises");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //validar url image
    try {
      new URL(urlImage);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    if (!description
      || !brand
      || !model
      || !year
      || !vehicleCondition
      || !transmission
      || !vehicleType
      || !fuelType
      || !mileage
      || !engine
      || !externalColor
      || !price
      || !urlImage
      || !state
      || !city
      || !contact) {
      setFormError("Por favor, preecha todos os campos.");
    }
    if (formError) return;

    const data = {
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
      externalColor,
      price,
      urlImage,
      state,
      city,
      contact,
      uid: user.uid,
      createdBy: user.displayName
    }

    updateDocument(id, data);

    navigate("/perfil");
  }

  return (
    <Wrapper>
      <Container>
        <Content>
          {advertise && (
            <Form onSubmit={handleSubmit}>
              <Box>
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
                    value={vehicleCondition}
                    onChange={(e) => setVehicleCondition(e.target.value)}>
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
              <Box>
                <Title>Vehicle Information</Title>
                <Field>
                  <Label>Vehicle Type</Label>
                  <select name="vehicleType" id="vehicleTypeAdvertise"
                    required
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}>
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
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}>
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
                    value={fuelType}
                    onChange={(e) => setFuelType(e.target.value)}>
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
              <Box>
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
              </Box>
              <Box>
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
              <Box>
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
              {!response.loading && (
                <ButtonWrapper>
                  <Button>
                    Edit Advertise
                  </Button>
                </ButtonWrapper>
              )}
              {response.loading && (
                <ButtonWrapper>
                  <Button>
                    Wait...
                  </Button>
                </ButtonWrapper>
              )}
              {response.error && (
                <ErrorWarning>{response.error}</ErrorWarning>
              )}
              {formError && (
                <ErrorWarning>{formError}</ErrorWarning>
              )}
            </Form>
          )}
        </Content>
      </Container>
    </Wrapper>
  )
}
