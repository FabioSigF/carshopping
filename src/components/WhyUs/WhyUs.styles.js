import styled from "styled-components";
import { borderRadius, colors, fontSize } from "../../globalStyle";


export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-bottom: 3rem;
`

export const ContentWrapper = styled.div`

`

export const Title = styled.h2`
  color: ${colors.primary};
  font-size: ${fontSize.bodyLarge};
  font-weight: 600;
  margin-bottom: 1rem;
`

export const Subtitle = styled.h3`
  color: ${colors.titleDark};
  font-size: ${fontSize.titleSmall};
  line-height: calc(${fontSize.bodyLarge} + .5rem);
  font-weight: 600;
  margin-bottom: 1.5rem;
`

export const Text = styled.p`
  font-size: ${fontSize.body};
  line-height: calc(${fontSize.body} + .5rem);
  margin-bottom: 1.5rem;
`

export const Image = styled.img `
  max-width: 100%;
  height: auto;
`

export const CardList = styled.ul `
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const Card = styled.li `
  background-color: ${colors.bodyBg};
  border-radius: ${borderRadius.small};
  padding: 2rem;
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgb(12 8 0 / 3%), 0 0.275rem 1.25rem -0.0625rem rgb(12 8 0 / 5%);
`

export const CardHeader = styled.div `
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

export const CardIcon = styled.span `
  background-color: ${colors.primaryLight};
  color: ${colors.primary};
  font-size: ${fontSize.bodyLarge};
  height: 100%;
  padding: .5rem;
`
export const CardTitle = styled.h4 `
  color: ${colors.titleDark};
  font-weight: 700;
  font-size: ${fontSize.bodyLarge};
`

export const CardText = styled.p `
  font-size: ${fontSize.body};
  line-height: calc(${fontSize.body} + .5rem);
`