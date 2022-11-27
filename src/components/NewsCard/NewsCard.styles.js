import styled from "styled-components";
import { borderRadius, colors, fontSize } from "../../globalStyle";

export const Wrapper = styled.a`
  background-color: ${colors.white};
  border-radius: ${borderRadius.small};
  padding: 1.5rem;
  cursor: pointer;
  &:hover {
    .newsCard__image {
      transform: scale(1.05);
    }
    .newsCard__button {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
    .newsCard__title {
      color: ${colors.primary};
    }
  }
  
`

export const ImageContainer = styled.div `
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: ${borderRadius.small} ${borderRadius.small} 0 0;
  overflow: hidden;
`
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 200ms ease;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`

export const Tag = styled.h4`
  background-color: ${colors.primaryLight};
  border-radius: ${borderRadius.small};
  color: ${colors.primary};
  font-weight: 600;
  padding: .5rem;
`

export const Title = styled.h3`
  color: ${colors.titleDark};
  font-weight: 600;
  font-size: ${fontSize.titleSmall};
  transition: 200ms ease;
`

export const Description = styled.p`
  color: ${colors.text};
  font-size: ${fontSize.small};
  line-height: ${fontSize.bodyLarge};
`
export const Footer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`

export const Name = styled.div`
  color: ${colors.black};
  font-weight: 600;
  margin-bottom: .3rem;
`

export const Date = styled.span`
  text-transform: lowercase;
  font-size: ${fontSize.small};
`

export const NewsButton = styled.a `
  border-radius: 50%;
  background-color: ${colors.lightGray};
  color: ${colors.text};
  cursor: pointer;
  padding: .875rem;
  transition: 200ms ease;
`