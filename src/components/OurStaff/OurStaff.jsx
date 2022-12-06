import React from 'react'
import { Description, HeaderCont, iconsList, Subtitle, Title } from '../../globalStyle'
import { List, Wrapper } from './OurStaff.styles'
import staff1 from '../../assets/img/staff/staff-1.jpg'
import staffBg1 from '../../assets/img/staff/staff-bg-1.jpg'
import staff2 from '../../assets/img/staff/staff-2.jpg'
import staffBg2 from '../../assets/img/staff/staff-bg-2.jpg'
import staff3 from '../../assets/img/staff/staff-3.jpg'
import staffBg3 from '../../assets/img/staff/staff-bg-3.jpg'
import staff4 from '../../assets/img/staff/staff-4.jpg'
import staffBg4 from '../../assets/img/staff/staff-bg-4.jpg'
import StaffCard from '../StaffCard/StaffCard'
export default function OurStaff() {

  const staffData = [
    {
      name: "David E. Pittman",
      avatar: staff1,
      exp: 5,
      social: [
        {
          logo: iconsList.facebook,
          link: "#!",
        },
        {
          logo: iconsList.twitter,
          link: "#!",
        },
        {
          logo: iconsList.behance,
          link: "#!",
        },
        {
          logo: iconsList.linkedin,
          link: "#!",
        },
      ]
      ,
      description: "Dramatically generate stand-alone convergence without cross-platform content. meta-services before efficient intellectual capital.",
      background: staffBg1,
    },
    {
      name: "Donald S. Atkins",
      avatar: staff2,
      exp: 6,
      social: [
        {
          logo: iconsList.facebook,
          link: "#!",
        },
        {
          logo: iconsList.twitter,
          link: "#!",
        },
        {
          logo: iconsList.behance,
          link: "#!",
        },
        {
          logo: iconsList.linkedin,
          link: "#!",
        },
      ]
      ,
      description: "Dramatically generate stand-alone convergence without cross-platform content. meta-services before efficient intellectual capital.",
      background: staffBg2,
    },
    {
      name: "Travis J. Hughes",
      avatar: staff3,
      exp: 4,
      social: [
        {
          logo: iconsList.facebook,
          link: "#!",
        },
        {
          logo: iconsList.twitter,
          link: "#!",
        },
        {
          logo: iconsList.behance,
          link: "#!",
        },
        {
          logo: iconsList.linkedin,
          link: "#!",
        },
      ]
      ,
      description: "Dramatically generate stand-alone convergence without cross-platform content. meta-services before efficient intellectual capital.",
      background: staffBg3,
    },
    {
      name: "Dale Johnson",
      avatar: staff4,
      exp: 1,
      social: [
        {
          logo: iconsList.facebook,
          link: "#!",
        },
        {
          logo: iconsList.twitter,
          link: "#!",
        },
        {
          logo: iconsList.behance,
          link: "#!",
        },
        {
          logo: iconsList.linkedin,
          link: "#!",
        },
      ],
      description: "Dramatically generate stand-alone convergence without cross-platform content. meta-services before efficient intellectual capital.",
      background: staffBg4,
    },
  ]

  return (
    <Wrapper>
      <HeaderCont alignCenter>
        <Title>Our Professional Staff</Title>
        <Subtitle>Autohive Cars Drivers</Subtitle>
        <Description>
          Dramatically generate stand-alone convergence without cross-platform content.<br /> Meta-services before efficient intellectual capital.
        </Description>
      </HeaderCont>
      <List>
        {staffData.map((item, key) => (
          <StaffCard
            key={key}
            avatar={item.avatar}
            name={item.name}
            exp={item.exp}
            social={item.social}
            description={item.description}
            background={item.background}
          />
        ))}
      </List>
    </Wrapper>
  )
}
