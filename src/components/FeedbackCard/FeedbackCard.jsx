import React from 'react';
import { Author, AuthorDescription, AuthorImg, AuthorName, AuthorTitle, Content, Text, Title, Wrapper } from './FeedbackCard.styles';

export default function FeedbackCard({ title, text, authorName, authorTitle, authorImg, rating }) {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
      <Author>
        <AuthorImg src={authorImg}/>
        <AuthorDescription>
          <AuthorName>{authorName}</AuthorName>
          <AuthorTitle>{authorTitle}</AuthorTitle>
        </AuthorDescription>
      </Author>
    </Wrapper>
  )
}
