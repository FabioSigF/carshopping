import styled from "styled-components";
import { borderRadius, colors } from "../../globalStyle";

export const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 140px;
  background-color: ${colors.white};

  border: 1px solid ${colors.lightGray};
  border-radius: ${borderRadius.small};
  transition: 200ms ease-in-out;
  &:hover {
    box-shadow: 15px 30px 70px rgb(0 0 0 / 8%);
    border-color: transparent;
  }
  img {
    max-width: 72px;
    height: auto;
  }
`