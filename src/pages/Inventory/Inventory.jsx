import React from 'react'
import { Filter, FilterList, Header, Label, List, Main, Search, SortBy, Wrapper } from './Inventory.styles'
import { Container, iconsList } from '../../globalStyle'
import Button from '../../components/Buttons/Button'
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import AdvertiseCard from '../../components/AdvertiseCard/AdvertiseCard';
import { useEffect } from 'react';

export default function Inventory() {

  //Page info
  const [page, setPage] = useState(1);
  const [numberOfResults, setNumberOfResults] = useState("");

  //Selected elements by filter
  const [brand, setBrand] = useState([]);
  const [bodyType, setBodyType] = useState([]);
  const [location, setLocation] = useState([]);
  const [year, setYear] = useState([]);
  const [transmission, setTransmission] = useState([]);

  //Open/Close menu, state if is open o closed
  const [brandMenu, setBrandMenu] = useState(true);
  const [bodyTypeMenu, setBodyTypeMenu] = useState(false);
  const [locationMenu, setLocationMenu] = useState(false);
  const [yearMenu, setYearMenu] = useState(false);
  const [transmissionMenu, setTransmissionMenu] = useState(false);

  //Filter Sort By
  const [sortBy, setSortBy] = useState("Newest First");

  const { documents: advertises, loading } = useFetchDocuments("advertises")

  function pushCheckboxItem(state, setState, name) {
    let cont = 0;

    state.forEach(element => {
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
  useEffect(() => {
    if (advertises) {
      showFilterOptions(brand, setBrand, "brand");
      showFilterOptions(bodyType, setBodyType, "vehicleType");
      showFilterOptions(location, setLocation, "city");
      showFilterOptions(year, setYear, "year");
      showFilterOptions(transmission, setTransmission, "transmission");

      setNumberOfResults(advertises.length);
    }
  }, [advertises]);
  

  //seria para a lista de carros geradas pelo filter
  // useEffect(() => {
  //   setNumberOfResults(advertises.length);
  // }, [advertises])

  console.log(numberOfResults);

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
                    onClick={() => pushCheckboxItem(brand, setBrand, item)}
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
                    onClick={() => pushCheckboxItem(bodyType, setBodyType, item)}
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
                    onClick={() => pushCheckboxItem(location, setLocation, item)}
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
                    onClick={() => pushCheckboxItem(year, setYear, item)}
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
                    onClick={() => pushCheckboxItem(transmission, setTransmission, item)}
                  />
                  <p>{item}</p>
                </li>
              ))
            }
          </FilterList>

          <Button
            dark
          >Filter Result</Button>
        </Filter>
        <Main>
          <Search>
            <span>Showing {page} - 2 of {numberOfResults} results </span>
            <SortBy>
              <Label>Sort by:</Label>
              <select name="sortby" id="sortbyInventory"
                required
                onChange={(e) => {
                  setSortBy(e.target.value)
                }}>
                <option value="Newest First">Newest First</option>
                <option value="Lowest Price">Lowest Price</option>
                <option value="Highest Price">Highest Price</option>
              </select>
            </SortBy>
          </Search>

          <List>
            {loading && <p>Carregando...</p>}
            {advertises && sortBy === "Newest First" &&
              advertises
                .sort(function (a, b) {
                  if (a.createdAt.toDate() < b.createdAt.toDate()) return 1;
                  if (a.createdAt.toDate() > b.createdAt.toDate()) return -1;
                  return 0;
                })
                .map((advertise, key) => (
                  <AdvertiseCard
                    advertise={advertise}
                    key={key}
                  />
                ))}
            {advertises && sortBy === "Highest Price" &&
              advertises
                .sort(function (a, b) {
                  if (a.price < b.price) return 1;
                  if (a.price > b.price) return -1;
                  return 0;
                })
                .map((advertise, key) => (
                  <AdvertiseCard
                    advertise={advertise}
                    key={key}
                  />
                ))}
            {advertises && sortBy === "Lowest Price" &&
              advertises
                .sort(function (a, b) {
                  if (a.price < b.price) return -1;
                  if (a.price > b.price) return 1;
                  return 0;
                })
                .map((advertise, key) => (
                  <AdvertiseCard
                    advertise={advertise}
                    key={key}
                  />
                ))}
            {advertises && advertises.lenght === 0 && (
              <p>Não foram encontrados anuncios...</p>
            )}
          </List>
        </Main>
      </Wrapper>
    </Container >
  )
}