import styled, { css } from "styled-components";
import { colors, fontSize } from "../../globalStyle";

export const Wrapper = styled.button`

  height: ${props => props.height ? props.height : '2.5rem'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : 0};
  font-size: ${fontSize.body};
  font-weight: 600;
  line-height: ${fontSize.body};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 1rem;
  padding-right: 1rem;
  

  ${props => 
    props.btnStyle === 'primary' &&
    css`
      background-color: ${colors.primary};
      border: 1px solid ${colors.primary};
      color: ${colors.white};
    
      &:hover {
      border: 1px solid ${colors.lightGray};
      background-color: ${colors.bodyBg};
      color: ${colors.black};
      }
  `}
    
  ${props =>
    props.btnStyle === 'primaryLight' &&
    css`
      background-color: ${colors.white};
      border: 1px solid ${colors.lightGray};
      color: ${colors.textDark};

      &:hover {
        background-color: ${colors.primary};
        border: 1px solid ${colors.primary};
        color: ${colors.white};
      }
  `}

  ${props =>
    props.btnStyle === 'outline' &&
    css`
      background-color: transparent;
      border: 1px solid ${props => props.borderColor ? props.borderColor : colors.lightGray};
      color: ${props => props.color ? props.color : colors.white};
    `}
`