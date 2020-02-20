import React from 'react';
import styled from '@emotion/styled';
import { CardList } from './CardList'

const Container = styled("footer")`
    height: 60px;
`
export const Footer = () => {
  return (
    <Container>
      <CardList />
    </Container>
  )
}