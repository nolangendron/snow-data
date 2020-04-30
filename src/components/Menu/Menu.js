import React from 'react';
import { connect } from 'react-redux';
import { SET_CURRENT_AREA } from '../../actions/area-action';
import styled from "@emotion/styled";

const StyledMenu = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: grey;
  opacity: 95%;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 11;

h3 {
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: #fff;
  transition: color 0.3s linear;
  &:hover {
    cursor: pointer;
  }
}
`

export const Menu = ({ open, setCurrentArea }) => {
  return (
    <StyledMenu open={open}>
      <h3>Select Area:</h3>
      <h3 id="coquihalla" title="coquihalla" onClick={(e) => setCurrentArea(e.target.id)}>
        Coquihalla
      </h3>
      <h3 id="duffey" title="duffey" onClick={(e) => setCurrentArea(e.target.id)}>
        Duffey
        </h3>
      <h3 id="manning" title="manning" onClick={(e) => setCurrentArea(e.target.id)}>
        Manning
        </h3>
    </StyledMenu>
  )
}

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

export default connect(null, mapDispatchToProps)(Menu);

