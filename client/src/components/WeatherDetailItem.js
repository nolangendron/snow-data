import React from 'react';
import styled from '@emotion/styled';


const Weather = styled("div")` 
margin: 20px auto;
width: 240px;
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
.weather-value {
  font-size: 1.25em;
  position: relative;
  top: 5px;
}
`

export const WeatherDetailItem = ({ highElevationName, lowElevationName, highElevation, lowElevation, highTemp, lowTemp, newSnowLastDay, newSnowLastTwoDay, newSnowLastWeek, snowDepth }) => {
  return (
    <Weather>
      <h2 className="line">
        <span>Today's Weather</span>
      </h2>

      <ul className="list-weather">
        <li>
          <div className="cell">
            <h3>{highElevationName}</h3>
            <p>Elevation: {highElevation}</p>
          </div>
          <div className="cell">
            <div className="weather-value">
              <span>{highTemp} {String.fromCharCode(176)}C</span>
            </div>
          </div>
        </li>
        <li>
          <div className="cell">
            <h3>{lowElevationName}</h3>
            <p>Elevation: {lowElevation}</p>
          </div>
          <div className="cell">
            <div className="weather-value">
              <span>{lowTemp} {String.fromCharCode(176)}C</span>
            </div>
          </div>
        </li>
      </ul>

    </Weather >
  )
}