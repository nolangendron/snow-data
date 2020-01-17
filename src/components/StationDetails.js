import React from 'react';
import styled from '@emotion/styled';

const Station = styled("div")`
h6 {
  margin: 0;
}
`

export const StationDetails = ({ name, elevation, temp, newSnow, snowDepth }) => {
  return (
    <Station>
      <h6>{name}</h6>
      <h6>{elevation}</h6>
      <h6>Current Temp: {temp} {String.fromCharCode(176)}C</h6>
      <h6>New Snow Past 24hr: {newSnow} cm</h6>
      <h6>Snow Depth: {snowDepth} cm</h6>
    </Station>
  )
}