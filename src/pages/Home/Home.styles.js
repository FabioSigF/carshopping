import styled from "styled-components";
import { Container, deviceSize, margin} from "../../globalStyle";
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const BrandsContainer = styled(Container)`
  display: flex; 
  align-items: center; 
  flex-direction: column;
  gap: 2rem; 
  box-sizing: border-box;
  @media screen and (min-width: ${deviceSize.laptop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const OfferAside = styled.aside`
  width: 100%;
  max-width: 566px;

  @media screen and (min-width: ${deviceSize.laptop}){
    width: 35%;
  }

  @media screen and (min-width: ${deviceSize.laptopM}){
    width: 30%;
  }
`