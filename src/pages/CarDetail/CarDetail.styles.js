import styled from "styled-components";
import { borderRadius, colors, deviceSize, fontSize, margin, pseudoElementCfg, TagTitle, transition } from "../../globalStyle";

export const Wrapper = styled.div `
  margin-top: ${margin.mheader};
  padding-top: 2rem;
  padding-bottom: 2rem;
  max-width: 100%;
`

export const FlexWrapper = styled.div `
  @media screen and (min-width: ${deviceSize.laptop}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
`

export const CarHero = styled.div `

`

export const CarInfo = styled.section `
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AsideInfo = styled.aside `
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SectionWrapper = styled.section `
  background-color: ${colors.white};
  border-radius: ${borderRadius.small};
  flex-direction: column;
  gap: 4rem;
  display: flex;
  padding: 1rem;

  @media screen and (min-width: ${deviceSize.laptopM}){
    padding: 2rem;
  }
`

export const SectionContent = styled.div `
  position: relative;
  &:not(:last-child)::after
  {
    ${pseudoElementCfg};
    background-color: ${colors.lightGray};
    border-radius: 10px;
    width: 100%;
    height: 2px;
    bottom: -2rem;
    margin: 0 auto;
    left: 0;
    right: 0;
  }

  `
export const SectionTitle = styled(TagTitle) `
  
  color: ${colors.titleDark};
  padding-bottom: 2rem;

`

export const PublishDate = styled.div `
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: ${fontSize.smallX};
  span {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
`

export const Hero = styled.img `
  max-width: 100%;
  border-radius: ${borderRadius.small};
`

export const InfoList = styled.ul `
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    gap: .5rem;
    align-items: center;
  }

  h6  {
    font-size: ${fontSize.smallX};
    font-weight: 600;
    padding-bottom: .5rem;
  }

  p {
    color: ${colors.black};
    font-weight: 600;
  }

  @media screen and (min-width: ${deviceSize.mobileL}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${deviceSize.tablet}) { 
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${deviceSize.laptopS}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const InfoListIcon = styled.span `
  width: 48px;
  height: 48px;
  border: 1px solid ${colors.lightGray};
  border-radius: ${borderRadius.small};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${colors.primary};
`

export const FeaturesList = styled.ul `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: .5rem;
    color: ${colors.text};
    font-size: ${fontSize.small};
  }

  @media screen and (min-width: ${deviceSize.desktop}){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1rem;
  }

`
export const FeaturesMarked = styled.div `
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7px;
  background-color: ${colors.primary};
  color: ${colors.white}; 
`

export const Price = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${colors.black};
  border-radius: ${borderRadius.small};
  color: ${colors.white};
  font-size: ${fontSize.titleSmall};
  font-weight: 700;
  padding: 1rem;
  
  span {
    display: flex;
    align-items: center;
    font-size: ${fontSize.smallX};
    font-weight: 400;
    gap: .5rem;
  }

  @media screen and (max-width: ${deviceSize.laptopM}){
    margin-top: 2rem;
  }
  @media screen and (min-width: ${deviceSize.laptopM}){
    padding: 2.5rem 1.5rem;
    font-size: ${fontSize.title};
  }
  
`

export const Contact = styled.div `

`

export const Seller = styled.div `
  display: flex;
  gap: .5rem;
  align-items: center;
`

export const SellerAvatar = styled.img `
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

export const SellerData = styled.div `
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const SellerName = styled.h6 `
  color: ${colors.dark};
  font-size: ${fontSize.bodyLarge};
  font-weight: 600;
`

export const SellerRating = styled.div `
  display: flex;
  align-items: center;
  color: ${colors.yellow};
`

export const SellerLink = styled.a `
  cursor: pointer;
  font-size: ${fontSize.small};
  font-weight: 500;
  text-decoration: underline;
`

export const Buttons = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: ${deviceSize.mobileL}) {
    flex-direction: row;
  }
`

export const SellerButton = styled.a `
  background: ${colors.primaryLight};
  border-radius: ${borderRadius.small};
  color: ${colors.primary};
  font-size: ${fontSize.small};
  font-weight: 600;
  padding: 1rem 1.25rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  transition: ${transition.default};
  &:hover {
    color: ${colors.white};
    background-color: ${colors.primary};
  }
`

export const ContactForm = styled.form `


  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    font-size: ${fontSize.small};
    font-weight: 600;
  }

  button {
    margin: 0 auto;
  }
  
  `

export const ContactFormInputs = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: ${deviceSize.laptopS})  {
    flex-direction: row;
    flex-wrap: wrap;
    label {
      width: 45%;
    }
  }
`
