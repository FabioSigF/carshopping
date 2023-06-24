import React from 'react'
import { Filter, FilterList, Header, Label, List, Main, Search, SortBy, Wrapper } from './Inventory.styles'
import { Container, iconsList } from '../../globalStyle'
import Button from '../../components/Buttons/Button'
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import AdvertiseCard from '../../components/AdvertiseCard/AdvertiseCard';
import { useEffect } from 'react';
import { Timestamp } from 'firebase/firestore';

export default function Inventory() {
  const [page, setPage] = useState(1);

  //Selected elements by filter
  const [brand, setBrand] = useState([]);
  const [bodyType, setBodyType] = useState([]);
  const [carModel, setCarModel] = useState([]);
  const [year, setYear] = useState([]);
  const [transmission, setTransmission] = useState([]);

  //Open/Close menu, state if is open o closed
  const [brandMenu, setBrandMenu] = useState(true);
  const [bodyTypeMenu, setBodyTypeMenu] = useState(false);
  const [carModelMenu, setCarModelMenu] = useState(false);
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

  //Está dando erro, adicionando todas as listas presentes às novas marcas
  const showFilterOptions = async (state, setState, section) => {
    let list = [];
    let obj = {};

    if (!loading) {
      advertises.forEach((item) => {
        //Se a marca não estiver inclusa na lista
        if (!list.includes(item[section])) {
          setState(current => [...current, {
            name: item[section],
            cars: [...current, item]
          }]);
          list.push(item[section]);
        }
        //Se a marca já está inclusa na lista
        else {
          state.forEach(elem => {
            if (elem.name === item[section]) {
              obj = {
                name: elem.name,
                cars: elem.cars
              }
              obj.cars.push(item);

              setState((current) => current.filter((element) => element !== item[section]));

              setState((current) => [...current, obj]);
            }
          })
        }
      })
    }
  }
  useEffect(() => {
    showFilterOptions(brand, setBrand, "brand");
  }, [loading, advertises])

  console.log(brand);
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
              brand.map((item) => (
                <li>
                  <input type="checkbox" name="ferrari"
                    onClick={(e) => pushCheckboxItem(brand, setBrand, "ferrari")}
                  />
                  <p>{item.name}</p>
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
            {bodyTypeMenu && (
              <>
                <li>
                  <input type="checkbox" name="ferrari" />
                  <p>Ferrari</p>
                </li>
                <li>
                  <input type="checkbox" name="honda" />
                  <p>Honda</p>
                </li>
                <li>
                  <input type="checkbox" name="hyundai" />
                  <p>Hyundai</p>
                </li>
                <li>
                  <input type="checkbox" name="mercedes benz" />
                  <p>Mercedes Benz</p>
                </li>
                <li>
                  <input type="checkbox" name="toyota" />
                  <p>Toyota</p>
                </li>
                <li>
                  <input type="checkbox" name="Volkswagen" />
                  <p>Volkswagen</p>
                </li>
              </>
            )}
          </FilterList>
          <FilterList>
            <span
              onClick={() => setCarModelMenu(!carModelMenu)}
            >Car Model {carModelMenu ? iconsList.chevronUp : iconsList.chevronDown}</span>

            {carModelMenu && (
              <>
                <li>
                  <input type="checkbox" name="ferrari" />
                  <p>Ferrari</p>
                </li>
                <li>
                  <input type="checkbox" name="honda" />
                  <p>Honda</p>
                </li>
                <li>
                  <input type="checkbox" name="hyundai" />
                  <p>Hyundai</p>
                </li>
                <li>
                  <input type="checkbox" name="mercedes benz" />
                  <p>Mercedes Benz</p>
                </li>
                <li>
                  <input type="checkbox" name="toyota" />
                  <p>Toyota</p>
                </li>
                <li>
                  <input type="checkbox" name="Volkswagen" />
                  <p>Volkswagen</p>
                </li>
              </>)}
          </FilterList>
          <FilterList>
            <span
              onClick={() => setYearMenu(!yearMenu)}
            >
              Year {yearMenu ? iconsList.chevronUp : iconsList.chevronDown}</span>

            {yearMenu && (
              <>
                <li>
                  <input type="checkbox" name="ferrari" />
                  <p>Ferrari</p>
                </li>
                <li>
                  <input type="checkbox" name="honda" />
                  <p>Honda</p>
                </li>
                <li>
                  <input type="checkbox" name="hyundai" />
                  <p>Hyundai</p>
                </li>
                <li>
                  <input type="checkbox" name="mercedes benz" />
                  <p>Mercedes Benz</p>
                </li>
                <li>
                  <input type="checkbox" name="toyota" />
                  <p>Toyota</p>
                </li>
                <li>
                  <input type="checkbox" name="Volkswagen" />
                  <p>Volkswagen</p>
                </li>
              </>)}
          </FilterList>
          <FilterList>
            <span
              onClick={() => setTransmissionMenu(!transmissionMenu)}
            >Transmission {transmissionMenu ? iconsList.chevronUp : iconsList.chevronDown}</span>

            {transmissionMenu && (
              <>
                <li>
                  <input type="checkbox" name="ferrari" />
                  <p>Ferrari</p>
                </li>
                <li>
                  <input type="checkbox" name="honda" />
                  <p>Honda</p>
                </li>
                <li>
                  <input type="checkbox" name="hyundai" />
                  <p>Hyundai</p>
                </li>
                <li>
                  <input type="checkbox" name="mercedes benz" />
                  <p>Mercedes Benz</p>
                </li>
                <li>
                  <input type="checkbox" name="toyota" />
                  <p>Toyota</p>
                </li>
                <li>
                  <input type="checkbox" name="Volkswagen" />
                  <p>Volkswagen</p>
                </li>
              </>
            )}
          </FilterList>

          <Button
            dark
          >Filter Result</Button>
        </Filter>
        <Main>
          <Search>
            <span>Showing {page} - 2 of 15 results </span>
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