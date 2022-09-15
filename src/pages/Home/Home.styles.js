import styled from "styled-components";
import { colors, pseudoElementCfg } from "../../globalStyle";

export const Wrapper = styled.div `
  position: relative;
  width: 100%;
  height: 100%;

`

export const Background = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  min-height: 100vh;

  &::before {
    ${pseudoElementCfg}
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: ${colors.homeBgLinear};
  }
`