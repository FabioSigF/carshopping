import styled from "styled-components";
import { borderRadius, colors, deviceSize, margin } from "../../globalStyle";

export const Wrapper = styled.div `
  padding-top: ${margin.mheader};
  min-height: 100vh;
`

export const Dashboard = styled.section `
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  background-color: ${colors.bodyBg};
  border-radius: ${borderRadius.normal};
  margin-top: 2rem;
  padding: 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${deviceSize.mobileL}){
    flex-direction: row;
  }
`

export const Avatar = styled.img `
  width: 100px;
  height: 100px;
  background-color: ${colors.lightGray};
  border-radius: 50%;
`

export const Info = styled.ul `
  display: flex;
  flex-direction: column;
  gap: .5rem;

  li span {
    font-weight: 600;
  }
`

export const MyAdvertises = styled.section `
  margin-bottom: 2rem;
`

export const Header = styled.div `
  background-color: ${colors.bodyBg};
  border-radius: ${borderRadius.normal};
  padding: 2rem;
  margin-bottom: 1rem;
`

export const List = styled.ul `

  display: grid;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  
  @media screen and (min-width: ${deviceSize.tablet}){
    flex-direction: row;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${deviceSize.laptop}){
    grid-template-columns: repeat(3, 1fr);
  }

`

export const Link = styled.a `
  color: ${colors.link};
  
  &:hover {
    color: ${colors.linkHover};
  }
`

export const MyAdvertise = styled.div `
  position: relative;
`
export const EditButton = styled.button `
  background-color: ${colors.primary};
  border-radius: ${borderRadius.small};
  color: ${colors.white};
  position: absolute;
  height: 32px;
  width: 32px;
  top: 1rem;
  left: 1rem;
  font-size: 20px;

  
  &:hover {
    cursor: pointer;
    background-color: ${colors.linkHover};
  }
`