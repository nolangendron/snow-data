import React from 'react';
import styled from '@emotion/styled';
import size from '../styles/size';
import colors from '../styles/colors';

const Container = styled("nav")`
flex: 0 0 ${size.navBarWidth};
grid-area: nav;
background-color: ${colors.navbar};
`
const Menu = styled("ul")`
  list-style-type: none;
  padding: 0;
`
const MenuItem = styled("li")`
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
`
const MenuLink = styled("a")`
    display: block;
    padding: 1rem 2rem;
    color: #76808f;
    text-decoration: none;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #1f222d;
    }
`
export const NavBar = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <MenuLink href="#">Dashboard</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Dashboard</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Dashboard</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Dashboard</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Dashboard</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Dashboard</MenuLink>
        </MenuItem>
      </Menu>
    </Container >
  )
}