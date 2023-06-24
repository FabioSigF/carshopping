import React from 'react'
import { Filter, FilterList, Header, Label, List, Main, Search, SortBy, Wrapper } from './Inventory.styles'
import { Container, iconsList } from '../../globalStyle'
import Button from '../../components/Buttons/Button'
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import AdvertiseCard from '../../components/AdvertiseCard/AdvertiseCard';
import { useEffect } from 'react';

export default function Inventory() {
  const [page, setPage] = useState(1);

  const [brand, setBrand] = useState([]);
  const [bodyType, setBodyType] = useState([]);
  const [carModel, setCarModel] = useState([]);
  const [year, setYear] = useState([]);
  const [transmission, setTransmission] = useState([]);

  const [sortBy, setSortBy] = useState("");
  const [carList, setCarList] = useState(null);
  //Open/Close menu
  const [brandMenu, setBrandMenu] = useState(true);
  const [bodyTypeMenu, setBodyTypeMenu] = useState(false);
  const [carModelMenu, setCarModelMenu] = useState(false);
  const [yearMenu, setYearMenu] = useState(false);
  const [transmissionMenu, setTransmissionMenu] = useState(false);

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

  function reorderAdvertises() {
    if (sortBy === "Lowest Price") {
      advertises.sort(function (a, b) {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
      })
    } else if (sortBy === "Highest Price") {
      advertises.sort(function (a, b) {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      })
    }
  }

  useEffect(() => {
    reorderAdvertises();
  }, [sortBy, advertises])

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
            {brandMenu && (
              <>
                <li>
                  <input type="checkbox" name="ferrari"
                    onClick={(e) => pushCheckboxItem(brand, setBrand, "ferrari")}
                  />
                  <p>Ferrari</p>
                </li>
                <li>
                  <input type="checkbox" name="honda"
                    onClick={(e) => pushCheckboxItem(brand, setBrand, "honda")}
                  />
                  <p>Honda</p>
                </li>
                <li>
                  <input type="checkbox" name="hyundai"
                    onClick={(e) => pushCheckboxItem(brand, setBrand, "hyundai")}
                  />
                  <p>Hyundai</p>
                </li>
                <li>
                  <input type="checkbox" name="mercedes benz"
                    onClick={(e) => pushCheckboxItem(brand, setBrand, "mercedes benz")}
                  />
                  <p>Mercedes Benz</p>
                </li>
                <li>
                  <input type="checkbox" name="toyota"
                    onClick={(e) => pushCheckboxItem(brand, setBrand, "toyota")}
                  />
                  <p>Toyota</p>
                </li>
                <li>
                  <input type="checkbox" name="Volkswagen"
                    onClick={(e) => pushCheckboxItem(brand, setBrand, "Volkswagen")}
                  />
                  <p>Volkswagen</p>
                </li>
              </>
            )
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
                <option value="Newest first">Newest first</option>
                <option value="Lowest Price">Lowest Price</option>
                <option value="Highest Price">Highest Price</option>
              </select>
            </SortBy>
          </Search>

          <List>
            {loading && <p>Carregando...</p>}
            {advertises &&
              advertises.map((advertise, key) => (
                <AdvertiseCard
                  advertise={advertise}
                  key={key}
                />
              ))
            }
            {/* {advertises && sortBy === "Newest first" &&
              carList
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
                ))} */}
            {advertises && advertises.lenght === 0 && (
              <p>Não foram encontrados anuncios...</p>
            )}
          </List>
        </Main>
      </Wrapper>
    </Container >
  )
}