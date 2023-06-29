import React from 'react'
import { Avatar, Exp, Header, HoverDescription, HoverExp, HoverTitle, HoverWrapper, Item, ItemHover, List, Title, Wrapper } from './StaffCard.styles'

export default function StaffCard({ avatar, name, exp, social, description, background }) {

  const expPhrase = (num) => {
    let text;

    if (num > 1) {
      text = `${num} Year's`;
    } else {
      text = `${num} Year`;
    }
    return text;
  }

  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Header>
        <Title>{name}</Title>
        <Exp>{expPhrase(exp)} Experience</Exp>
      </Header>
      <List>
        {social.map((item, key) => (
          <Item key={key}>
            <a href={item.link}>
              {item.logo}
            </a>
          </Item>
        ))}
      </List>
      <HoverWrapper bgHover={background} className='staffCardHover'>
        <div>

          <Header>
            <HoverTitle>
              {name}
            </HoverTitle>
            <HoverExp>
              {expPhrase(exp)} Experience
            </HoverExp>
          </Header>
          <HoverDescription>
            {description}
          </HoverDescription>
        </div>
        <List>
          {social.map((item , key) => (
            <ItemHover key={key}>
              <a href={item.link}>
                {item.logo}
              </a>
            </ItemHover>
          ))}
        </List>
      </HoverWrapper>
    </Wrapper>
  )
}
