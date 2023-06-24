import React from 'react'
import { AboutUs, Subtitle, Wrapper } from './About.styles'
import OurStaff from '../../components/OurStaff/OurStaff'
import CostumerExp from '../../components/CostumerExp/CostumerExp'
import { Container, Description, HeaderCont, SectionWrapper, TagTitle, Title } from '../../globalStyle'
import Feedback from '../../components/Feedback/Feedback'

export default function About() {
  return (
    <Wrapper>
      <SectionWrapper sectionWhite>
        <Container>
          <AboutUs>
            <HeaderCont>
              <TagTitle>About us</TagTitle>
              <Title>Who is Auto Hive?</Title>
              <Subtitle>
                How the adventure ended will be seen anon. Aouda was anxious,
                though she said nothing.
              </Subtitle>
              <Description>
                As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction. How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said.
              </Description>

            </HeaderCont>
          </AboutUs>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <CostumerExp />
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Feedback />
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <OurStaff />
        </Container>
      </SectionWrapper>
    </Wrapper>
  )
}
