import styled, { css } from "styled-components";
import { borderRadius, colors, fontSize, pseudoElementCfg, transition } from "../../globalStyle";

export const Wrapper = styled.button`

  border-radius: ${borderRadius.small};
  background-color: ${colors.primary};
  color: ${colors.white};

  font-size: ${fontSize.body};
  font-weight: 600;
  line-height: ${fontSize.body};
  
  display: flex;
  align-items: center;
  justify-content: center;  
  gap: 1rem;
  
  height: ${props => props.height ? props.height : '2.5rem'};
  overflow: hidden;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  z-index: 1;
  &::before {
    background: ${colors.black};
    border-radius: 50%;
    ${pseudoElementCfg}
    position: absolute;
    left: -60px;
    top: -110px;
    width: 200%;
    height: 200%;
    transition: ${transition.default};
    z-index: -1;
  }
  
  &:hover {
    &::before {
      top: -15px;
    }
  }

  ${props =>
    props.light &&
    css`
      background-color: ${colors.white};
      border: 1px solid ${colors.lightGray};
      color: ${colors.textDark};

      &:hover {
        background-color: ${colors.primary};
        border: 1px solid ${colors.primary};
        color: ${colors.white};
      }

      &::before {
        display: none;
      }
  `}

  ${props =>
    props.dark &&
    css`
      background-color: ${colors.black};
      color: ${colors.white};
      &:hover {
        &::before {
          background-color: ${colors.primary};
        }
      }
    `}

  ${props =>
    props.height === 'large' &&
    css`
      height: 3.5rem
    `}

  ${props =>
    props.small &&
    css`
      font-size: ${fontSize.small};
      height: 2rem;
    `}
`