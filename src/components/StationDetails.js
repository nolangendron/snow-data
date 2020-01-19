import React from 'react';
import styled from '@emotion/styled';

const Station = styled("div")`
h6 {
  margin: 0;
}
`

export const StationDetails = ({ name, elevation, temp, newSnowLastDay, newSnowLastTwoDay, newSnowLastWeek, snowDepth }) => {
  return (
    <Station>
      <h6>{name}</h6>
      <h6>{elevation}</h6>
      <h6>{temp} {String.fromCharCode(176)}C</h6>
      <h6>24hr: {newSnowLastDay} cm</h6>
      <h6>48hr: {newSnowLastTwoDay} cm</h6>
      <h6>7 Days: {newSnowLastWeek} cm</h6>
      <h6>Snow Base: {snowDepth} cm</h6>
    </Station>
  )
}