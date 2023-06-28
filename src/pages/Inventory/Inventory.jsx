import React from 'react'
import { Filter, FilterList, Label, List, Main, Search, SortBy, Wrapper } from './Inventory.styles'
import { Container, iconsList } from '../../globalStyle'
import Button from '../../components/Buttons/Button'
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import AdvertiseCard from '../../components/AdvertiseCard/AdvertiseCard';
import { useEffect } from 'react';

import { useReducer } from 'react';

export default function Inventory() {

  //Page info
  const [numberOfResults, setNumberOfResults] = useState("");

  //Avaible elements on each filter
  const [brand, setBrand] = useState([]);
  const [bodyType, setBodyType] = useState([]);
  const [location, setLocation] = useState([]);
  const [year, setYear] = useState([]);
  const [transmission, setTransmission] = useState([]);

  //Filters of each type
  const [brandFilter, setBrandFilter] = useState([]);
  const [bodyTypeFilter, setBodyTypeFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [yearFilter, setYearFilter] = useState([]);
  const [transmissionFilter, setTransmissionFilter] = useState([]);

  const [carList, setCarList] = useState([]);

  //Open/Close menu, state if is open o closed
  const [brandMenu, setBrandMenu] = useState(true);
  const [bodyTypeMenu, setBodyTypeMenu] = useState(false);
  const [locationMenu, setLocationMenu] = useState(false);
  const [yearMenu, setYearMenu] = useState(false);
  const [transmissionMenu, setTransmissionMenu] = useState(false);

  //State to listen if carList was filled
  const [loadingData, setLoadingData] = useState(true);

  //Database
  const { documents: advertises, loading } = useFetchDocuments("advertises");

  //Hook to force update
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  function pushCheckboxItem(filters, setState, name) {
    let cont = 0;

    filters.forEach(element => {
      if (element === name) {
        cont++;
      }
    });

    if (cont === 0) {
      setState(current => [...current, name])
    } else {
      setState((current) => current.filter((element) => element !== name))
    };
  }

  const showFilterOptions = async (state, setState, section) => {
    let list = [];

    advertises.forEach((item) => {
      //Se a marca não estiver inclusa na lista
      if (!list.includes(item[section])) {
        setState(current => [...current, item[section]]);
        list.push(item[section]);
      }
    })

  }

  function sortList(sortBy) {
    if (loadingData === false) {
      if (carList && sortBy === "Newest First") {
        setCarList(
          carList.sort(function (a, b) {
            if (a.createdAt.toDate() < b.createdAt.toDate()) return 1;
            if (a.createdAt.toDate() > b.createdAt.toDate()) return -1;
            return 0;
          })
        )
      } else if (carList && sortBy === "Highest Price") {
        setCarList(
          carList.sort(function (a, b) {
            if (parseInt(a.price.split(/\D+/).join(""), 10) < (parseInt(b.price.split(/\D+/).join(""), 10))) return 1;
            if (parseInt(a.price.split(/\D+/).join(""), 10) > (parseInt(b.price.split(/\D+/).join(""), 10))) return -1;
            return 0;
          })
        )
      } else if (carList && sortBy === "Lowest Price") {
        setCarList(
          carList.sort(function (a, b) {
            if (parseInt(a.price.split(/\D+/).join(""), 10) < (parseInt(b.price.split(/\D+/).join(""), 10))) return -1;
            if (parseInt(a.price.split(/\D+/).join(""), 10) > (parseInt(b.price.split(/\D+/).join(""), 10))) return 1;
            return 0;
          })
        )
      }
    } else {
      if (advertises && sortBy === "Newest First") {
        advertises.sort(function (a, b) {
          if (a.createdAt.toDate() < b.createdAt.toDate()) return 1;
          if (a.createdAt.toDate() > b.createdAt.toDate()) return -1;
          return 0;
        })
      } else if (advertises && sortBy === "Highest Price") {
        advertises.sort(function (a, b) {
          if (parseInt(a.price.split(/\D+/).join(""), 10) < (parseInt(b.price.split(/\D+/).join(""), 10))) return 1;
          if (parseInt(a.price.split(/\D+/).join(""), 10) > (parseInt(b.price.split(/\D+/).join(""), 10))) return -1;
          return 0;
        })
      } else if (advertises && sortBy === "Lowest Price") {
        advertises.sort(function (a, b) {
          if (parseInt(a.price.split(/\D+/).join(""), 10) < (parseInt(b.price.split(/\D+/).join(""), 10))) return -1;
          if (parseInt(a.price.split(/\D+/).join(""), 10) > (parseInt(b.price.split(/\D+/).join(""), 10))) return 1;
          return 0;
        })
      }
    }
    forceUpdate();
  }

  function filterList() {
    let cont = 0;
    setCarList([]);
    setLoadingData(false);
    advertises.forEach((car) => {
      if (((brandFilter.length > 0 && brandFilter.includes(car.brand)) || brandFilter.length === 0)
        &&
        ((bodyTypeFilter.length > 0 && bodyTypeFilter.includes(car.vehicleType)) || bodyTypeFilter.length === 0)
        &&
        ((locationFilter.length > 0 && locationFilter.includes(car.city)) || locationFilter.length === 0)
        &&
        ((yearFilter.length > 0 && yearFilter.includes(car.year)) || yearFilter.length === 0)
        &&
        ((transmissionFilter.length > 0 && transmissionFilter.includes(car.transmission)) || transmissionFilter.length === 0)
      ) {
        setCarList(current => [...current, car]);
        cont++;
      }
    })
    setNumberOfResults(cont);
  }

  useEffect(() => {
    if (advertises) {
      showFilterOptions(brand, setBrand, "brand");
      showFilterOptions(bodyType, setBodyType, "vehicleType");
      showFilterOptions(location, setLocation, "city");
      showFilterOptions(year, setYear, "year");
      showFilterOptions(transmission, setTransmission, "transmission");
    }

    if (advertises) {
      setNumberOfResults(advertises.length);
    }
  }, [advertises]);

  //seria para a lista de carros geradas pelo filter
  // useEffect(() => {
  //   setNumberOfResults(advertises.length);
  // }, [advertises])

  return (
    <Container>
      <Wrapper>
        <Filter>
          <FilterList>
            <span
              onClick={() => setBrandMenu(!brandMenu)}
            >
              Brand {brandMenu ? iconsList.chevronUp : iconsList.chevronDown}
            </span>
            {brandMenu &&
              brand.map((item, key) => (
                <li key={key}>
                  <input type="checkbox" name={item}
                    onClick={() => pushCheckboxItem(brandFilter, setBrandFilter, item)}
                  />
                  <p>{item}</p>
                </li>
              ))
            }
          </FilterList>

          <FilterList>
            <span
              onClick={() => setBodyTypeMenu(!bodyTypeMenu)}
            >
              Body Type {bodyTypeMenu ? iconsList.chevronUp : iconsList.chevronDown}
            </span>
            {bodyTypeMenu &&
              bodyType.map((item, key) => (
                <li key={key}>
                  <input type="checkbox" name={item}
                    onClick={() => pushCheckboxItem(bodyTypeFilter, setBodyTypeFilter, item)}
                  />
                  <p>{item}</p>
                </li>
              ))
            }
          </FilterList>

          <FilterList>
            <span
              onClick={() => setLocationMenu(!locationMenu)}
            >Location {locationMenu ? iconsList.chevronUp : iconsList.chevronDown}</span>

            {locationMenu &&
              location.map((item, key) => (
                <li key={key}>
                  <input type="checkbox" name={item}
                    onClick={() => pushCheckboxItem(locationFilter, setLocationFilter, item)}
                  />
                  <p>{item}</p>
                </li>
              ))
            }
          </FilterList>

          <FilterList>
            <span
              onClick={() => setYearMenu(!yearMenu)}
            >
              Year {yearMenu ? iconsList.chevronUp : iconsList.chevronDown}</span>

            {yearMenu &&
              year.map((item, key) => (
                <li key={key}>
                  <input type="checkbox" name={item}
                    onClick={() => pushCheckboxItem(yearFilter, setYearFilter, item)}
                  />
                  <p>{item}</p>
                </li>
              ))
            }
          </FilterList>

          <FilterList>
            <span
              onClick={() => setTransmissionMenu(!transmissionMenu)}
            >Transmission {transmissionMenu ? iconsList.chevronUp : iconsList.chevronDown}</span>

            {transmissionMenu &&
              transmission.map((item, key) => (
                <li key={key}>
                  <input type="checkbox" name={item}
                    onClick={() => pushCheckboxItem(transmissionFilter, setTransmissionFilter, item)}
                  />
                  <p>{item}</p>
                </li>
              ))
            }
          </FilterList>

          <Button
            dark
            onClick={filterList}
          >
            Filter Result
          </Button>
        </Filter>
        <Main>
          <Search>
            <span>Results Found: {numberOfResults} </span>
            <SortBy>
              <Label>Sort by:</Label>
              <select name="sortby" id="sortbyInventory"
                required
                onChange={(e) => sortList(e.target.value)}>
                <option value="Newest First">Newest First</option>
                <option value="Lowest Price">Lowest Price</option>
                <option value="Highest Price">Highest Price</option>
              </select>
            </SortBy>
          </Search>

          <List>
            {loading && <p>Carregando...</p>}
            {loadingData === true && advertises && (
              advertises.map((advertise, key) => (
                <AdvertiseCard
                  advertise={advertise}
                  key={key}
                />
              ))
            )}
            {!loadingData && carList && (
              carList.map((advertise, key) => (
                <AdvertiseCard
                  advertise={advertise}
                  key={key}
                />
              ))
            )}
            {!loadingData && carList.length === 0 && (
              <p>Não foram encontrados anuncios...</p>
            )}
            {loadingData === true && advertises && advertises.lenght === 0 && (
              <p>Não foram encontrados anuncios...</p>
            )}
          </List>
        </Main>
      </Wrapper>
    </Container >
  )
}