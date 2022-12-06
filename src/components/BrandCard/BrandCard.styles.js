import styled from "styled-components";
import { borderRadius, colors, deviceSize } from "../../globalStyle";

export const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 130px;
  background-color: ${colors.white};

  border: 1px solid ${colors.lightGray};
  border-radius: ${borderRadius.small};
  transition: 200ms ease-in-out;
  &:hover {
    box-shadow: 15px 30px 70px rgb(0 0 0 / 8%);
    border-color: transparent;
  }

  img {
    max-width: 100%;
  }

  @media screen and (min-width: ${deviceSize.tablet}){
    max-width: 165px;
    max-height: 140px;

    img {
    max-width: 112px;
    height: auto;
  }
  }
`