import styled from "styled-components";
import { borderRadius, colors, fontSize } from "../../globalStyle";

export const Wrapper = styled.div `
  padding: 2.5rem 4rem;
  background-color: ${colors.bodyBg};
  border-radius: ${borderRadius.normal};
  max-width: 680px;
  max-height: 320px;
  margin: 0 auto;
`

export const Content = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h4 `
  font-size: ${fontSize.titleSmall};
  font-weight: 700;
  color: ${colors.titleDark};
`

export const Text = styled.p `
  font-size: ${fontSize.body};
  line-height: ${`calc(${fontSize.body} + .5rem)`};
  margin-bottom: 2rem;
`

export const Author = styled.div `
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const AuthorDescription = styled.div `
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const AuthorImg = styled.img `
  border-radius: 50%;
  width: 60px;
  height: 60px;
`

export const AuthorName = styled.h6 `
  font-weight: 600;
  font-size: ${fontSize.body};
  color: ${colors.black};
`

export const AuthorTitle = styled.span `
  font-size: ${fontSize.small};
  font-weight: 500;
`