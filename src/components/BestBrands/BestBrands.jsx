import React from 'react'
import { Title } from '../../globalStyle'
import { List, Wrapper } from './BestBrands.styles'

import ferrari from '../../assets/img/logo/ferrari-lg.png';
import audi from '../../assets/img/logo/audi-lg.png';
import hyundai from '../../assets/img/logo/hyundai-lg.png';
import mitsubishi from '../../assets/img/logo/mitsubishi-lg.png';
import mahindra from '../../assets/img/logo/mahindra-lg.png';
import mercedes from '../../assets/img/logo/mercedes-lg.png';
import toyota from '../../assets/img/logo/toyota-lg.png';
import volkswagen from '../../assets/img/logo/volkswagen.png';
import BrandCard from '../BrandCard/BrandCard';

export default function BestBrands() {

  const bestBrandsData = [
    {
      title: "Ferrari",
      logo: ferrari
    },
    {
      title: "Audi",
      logo: audi
    },
    {
      title: "Hyundai",
      logo: hyundai
    },
    {
      title: "Mitsubishi",
      logo: mitsubishi
    },
    {
      title: "Mahindra",
      logo: mahindra
    },
    {
      title: "Mercedes",
      logo: mercedes
    },
    {
      title: "Toyota",
      logo: toyota
    },
    {
      title: "Volkswagen",
      logo: volkswagen
    },
  ]

  return (
    <Wrapper>
      <Title>Best Selling Brands</Title>
      <List>
        {bestBrandsData.map((item) => (
          <BrandCard 
            title={item.title}
            logo={item.logo}
          />
        ))}
      </List>
    </Wrapper>
  )
}
