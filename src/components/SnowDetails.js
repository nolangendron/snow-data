import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

const SnowDetailsList = styled("div")`
grid-area: snowConditions;
display: flex;
height: 100%;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-content: center;
background: rgb(244,247,250, 0.7);
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

h1{
  margin: 0;
  padding: 0;
  font-size: 1.5em;
}
h2 {
  font-size: 1.5rem;
  font-weight: 900;
  text-align: center;
  color: #505865;
  position: relative;
  margin: 0 0 25px;
  text-transform: uppercase;
}

h3 {
  margin: 0 0 10px 0;
  font-size: 1em;
  color: #1a366c;
  text-transform: uppercase;
}
p {
  margin: 0;
}

.title {
  width: 100%;
  text-align: center;
  margin: 15px;
}

.flex-item {
  width: 25%;
  text-align: center;
}
`

export const SnowDetails = ({ lowElevationName, lowElevation, highElevationName, highElevation, newSnowLastDayLower, newSnowLastTwoDayLower, newSnowLastWeekLower, snowDepthLower, newSnowLastDayUpper, newSnowLastTwoDayUpper, newSnowLastWeekUpper, snowDepthUpper }) => {
  return (
    <SnowDetailsList>
      <h2 className="title">Snow Conditions</h2><FontAwesomeIcon icon={faSnowflake} size='3x' color='#505865' />
      <h3 className="title">{highElevationName} {highElevation}</h3>
      <div className="flex-item">
        <p>24hr</p>
      </ div>
      <div className="flex-item">
        <p>48hr</p></ div>
      <div className="flex-item">
        <p>7 Days</p>
      </ div>
      <div className="flex-item">
        <p>Base</p>
      </ div>
      <div className="flex-item">
        <h1>{newSnowLastDayUpper}cm</h1>
      </ div>
      <div className="flex-item">
        <h1>{newSnowLastTwoDayUpper}cm</h1>
      </ div>
      <div className="flex-item">
        <h1>{newSnowLastWeekUpper}cm</h1>
      </ div>
      <div className="flex-item">
        <h1>{snowDepthUpper}cm</h1>
      </ div>
      <h3 className="title">{lowElevationName} {lowElevation}</h3>
      <div className="flex-item">
        <p>24hr</p>
      </ div>
      <div className="flex-item">
        <p>48hr</p></ div>
      <div className="flex-item">
        <p>7 Days</p>
      </ div>
      <div className="flex-item">
        <p>Base</p>
      </ div>
      <div className="flex-item">
        <h1>{newSnowLastDayLower}cm</h1>
      </ div>
      <div className="flex-item">
        <h1>{newSnowLastTwoDayLower}cm</h1>
      </ div>
      <div className="flex-item">
        <h1>{newSnowLastWeekLower}cm</h1>
      </ div>
      <div className="flex-item">
        <h1>{snowDepthLower}cm</h1>
      </ div>

    </SnowDetailsList>
  )
}