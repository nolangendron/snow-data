import React from 'react';
import styled from '@emotion/styled';
import { Menu } from './Menu/Menu';
import { Burger } from './Burger/Burger';

const Container = styled("header")`
height: 100px;
   `

export const Header = () => {
  return (
    <Container>
      <Burger />
    </Container>
  )
}