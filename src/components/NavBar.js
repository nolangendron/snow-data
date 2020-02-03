import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import size from '../styles/size';
import colors from '../styles/colors';
import { SET_CURRENT_AREA } from '../actions/area-action';

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

const NavBar = ({ setCurrentArea }) => {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <MenuLink id='coquihalla' onClick={(e) => setCurrentArea(e.target.id)}>Coquihalla</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink id='duffey' onClick={(e) => setCurrentArea(e.target.id)}>Duffey</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink id='manning' onClick={(e) => setCurrentArea(e.target.id)}>Manning Park</MenuLink>
        </MenuItem>
      </Menu>
    </Container >
  )
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentArea(id) {
      dispatch({
        type: SET_CURRENT_AREA,
        payload: { id }
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(NavBar);