import styled from "styled-components";
import { borderRadius, colors, deviceSize, fontSize, pseudoElementCfg } from "../../globalStyle";

export const Wrapper = styled.div`
  padding: 100px 0 200px;

  & .advertisePageContainer {
    position: relative;
    @media screen and (min-width: ${deviceSize.laptopM}){
      display: grid;
      grid-template-columns: 25% 75%;
      gap: 1rem;
    }
  }
`

export const Aside = styled.aside`
  position: relative;
`

export const AsideContent = styled.div`
  position: sticky;
  top: 100px;
`
export const Header = styled.div`

`

export const Title = styled.h2`
  color: ${colors.titleDark};
  font-size: ${fontSize.titleSmall};
  font-weight: 600;
  margin-bottom: 1rem;
`
export const Text = styled.p`
  line-height: ${fontSize.bodyLarge};
  margin-bottom: 2rem;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
  position: relative;
  margin-bottom: 2rem;
  &::before {
    background-color: ${colors.secondary};
    ${pseudoElementCfg}
    top: 0;
    bottom: 0;
    left: 5px;
    width: 2px;
    height: 100%;
    border-radius: ${borderRadius.small};
  }

  li {
    a {
      color: ${colors.gray};
      font-weight: 500;
      position: relative;
      display: flex;
      align-items: center;
      padding-left: 1.625rem;
      &::before, 
      &::after {
        ${pseudoElementCfg}
      }

      &::before {
        background-color: ${colors.secondary};
        border-radius: 50%;
        width: 10px;
        height: 10px;
        left: 1px;
        z-index: 1;
      }

      &::after {
        background-color: ${colors.body};
        border-radius: 50%;
        border: 1px solid ${colors.primary};
        width: 18px;
        height: 18px;
        left: -4px;
        opacity: 0;
      }

      &.active {
        color: ${colors.primary};
        &::before {
          background-color: ${colors.primary};
        }
        &::after {
          opacity: 1;
        }
      }
    }
  }
`


export const Content = styled.div`
  
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;
  box-sizing: border-box;

`
export const Box = styled.section `
  background-color: ${colors.bodyBg};
  border-radius: ${borderRadius.small};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const Label = styled.label`
  font-size: ${fontSize.small};
  color: ${colors.textDark};
  font-weight: 600;

  `

export const Input = styled.input`

`

export const Description = styled.textarea`
  
`

export const FeatureGridWrapper = styled.div `
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media screen and (min-width: ${deviceSize.tablet}){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const CheckboxField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${fontSize.small};
  gap: .75rem;


`

export const CheckboxLabel = styled.label`

`
export const Checkbox = styled.input`

`

export const ButtonWrapper = styled.div `
  max-width: 800px;
  margin: 0 auto;
  display: block;
`


