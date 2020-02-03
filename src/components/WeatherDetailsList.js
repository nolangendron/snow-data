import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';

const Weather = styled("div")` 
display: flex;
height: 100%;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-content: center;
background: #fff;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

.flex-item {
  width: 50%;
  text-align: center;
}
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
  margin: 0 0 5px 0;
  font-size: 1em;
  color: #1a366c;
  text-transform: uppercase;
}
ul {
  margin: 0;
  padding: 0;
  text-align: left;
}
li {
  list-style: none;
}

p {
  margin: 0;
  font-size: .8em;
}
.cell {
  float: left;
  margin-bottom: 20px;
}
.cell:last-child {
  float: right;
}
.title {
  width: 100%;
  text-align: center;
  margin: 15px;
}
.weather-value {
  font-size: 1.25em;
  position: relative;
  top: 5px;
}
`

export const WeatherDetailsList = ({ highElevationName, lowElevationName, highElevation, lowElevation, highTemp, lowTemp }) => {
  return (
    <Weather>
      <h2 className="title">Current Weather</h2> <FontAwesomeIcon icon={faTemperatureLow} size='3x' color='#505865' />
      <h3 className="title">{highElevationName} {highElevation}</h3>
      <div className="flex-item">
        <div className="weather-value">
          <h1>{highTemp} {String.fromCharCode(176)}C</h1>
        </div>
      </div>
      <h3 className="title">{lowElevationName} {lowElevation}</h3>
      <div className="flex-item">
        <div className="weather-value">
          <h1>{lowTemp} {String.fromCharCode(176)}C</h1>
        </div>
      </div>
    </Weather >
  )
}