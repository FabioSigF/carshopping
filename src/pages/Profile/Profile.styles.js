import styled from "styled-components";
import { borderRadius, colors, margin } from "../../globalStyle";

export const Wrapper = styled.div `
  padding-top: ${margin.mheader};
  min-height: 100vh;
`

export const Dashboard = styled.section `
  display: flex;
  gap: 2rem;
  align-items: center;

  background-color: ${colors.bodyBg};
  border-radius: ${borderRadius.normal};
  margin-top: 2rem;
  padding: 2rem;
  margin-bottom: 2rem;
`

export const Avatar = styled.div `
  width: 100px;
  height: 100px;
  background-color: ${colors.lightGray};
  border-radius: 50%;
`

export const Info = styled.ul `
  display: flex;
  flex-direction: column;
  gap: .5rem;
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
   grid-template-columns: repeat(3, 1fr);
   gap: 1.5rem;
   width: 100%;
`

export const Link = styled.a `
  color: ${colors.link};
  
  &:hover {
    color: ${colors.linkHover};
  }
`