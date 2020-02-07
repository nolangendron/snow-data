import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import size from '../styles/size';
import colors from '../styles/colors';
import { SET_CURRENT_AREA } from '../actions/area-action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';

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
  display: flex;
  align-items: center;
  margin: auto
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  &:hover,
    &:focus {
      color: #fff;
      background-color: #1f222d;
`
const MenuLink = styled("a")`
    padding: 1rem 2rem;
    color: #76808f;
    text-decoration: none;

    }

    .mountain {
      justify-content: flex-end;
    }
`

const NavBar = ({ setCurrentArea }) => {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <MenuLink id='coquihalla' onClick={(e) => setCurrentArea(e.target.id)}>Coquihalla</MenuLink>
          <FontAwesomeIcon className='mountain' icon={faMountain} color='#fff' />
        </MenuItem>
        <MenuItem>
          <MenuLink id='duffey' onClick={(e) => setCurrentArea(e.target.id)}>Duffey</MenuLink>
          <FontAwesomeIcon className='mountain' icon={faMountain} color='#fff' />
        </MenuItem>
        <MenuItem>
          <MenuLink id='manning' onClick={(e) => setCurrentArea(e.target.id)}>Manning Park</MenuLink>
          <FontAwesomeIcon className='mountain' icon={faMountain} color='#fff' />
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