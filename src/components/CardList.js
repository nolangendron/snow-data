import React from 'react';
import { connect } from 'react-redux';
import { SET_CURRENT_AREA } from '../actions/area-action';
import styled from "@emotion/styled";
import { Card } from './Card';

const CardListContainer = styled("div")`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
`
const areas = ['coquihalla', 'duffey', 'manning'];

const CardList = ({ setCurrentArea }) => {
  return (
    <CardListContainer>
      {areas.map(area => (
        <Card key={area} id={area} title={area} onClick={(e) => setCurrentArea(e.target.id)} />
      ))}
    </CardListContainer>
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

export default connect(null, mapDispatchToProps)(CardList);

