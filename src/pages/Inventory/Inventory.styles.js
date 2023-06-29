import styled from "styled-components";
import { borderRadius, colors, deviceSize, fontSize, margin } from "../../globalStyle";

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;
  margin-top: ${margin.mheader};
  padding-top: 5rem;
  padding-bottom: 2rem;
  
  @media screen and (min-width: ${deviceSize.laptop}) {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 30% 70%;
    flex-direction: row;
    gap: 0;
  }
`


export const Filter = styled.aside `
  background-color: ${colors.bodyBg};
  padding: 1.5rem;
  border-radius: ${borderRadius.normal};

  button {
    width: 100%;
    margin-top: 2rem;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FilterList = styled.ul `

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:not(:last-of-type)
  {
    border-bottom: 1px solid ${colors.lightGray};
    padding-bottom: .5rem;
  }

  span {
    color: ${colors.black};
    font-size: ${fontSize.bodyLarge};
    font-weight: 600;
    padding-bottom: .5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  li {
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: ${fontSize.small};
  }
`

export const Main = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media screen and (min-width: ${deviceSize.laptop}){
    padding-left: 1.5rem;
  }
`

export const Search = styled.div `
  background-color: ${colors.bodyBg};
  border-radius: ${borderRadius.normal};

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;

  @media screen and (min-width: ${deviceSize.tablet}){
    flex-direction : row;
  }
  @media screen and (min-width: ${deviceSize.laptop}) {
    flex-direction: row;
    gap: 0;
  }
`

export const SortBy = styled.div `
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: end;
  select {
    display: block;
    position: relative;
  }
  @media screen and (min-width: ${deviceSize.laptop}) {
    width: 40%;
    select {
      min-width: 50%;
    }
  }
`

export const Label = styled.label `
  display: block;
  font-weight: 600;
`

export const List = styled.ul `
  display: grid;
  flex-direction: column;
  gap: 1.5rem;
  
  @media screen and (min-width: ${deviceSize.mobileL}){
    grid-template-columns: repeat(2, 1fr);
  }
`