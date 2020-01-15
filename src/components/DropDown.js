import React, { useState, useEffect } from 'react';

export const DropDown = () => {
  const [weatherStationsList, setWeatherStationsList] = useState([]);
  const [weatherStation, setWeatherStation] = useState();
  const [selectedStation, setSelectedStation] = useState();

  useEffect(() => {
    const getWeather = async () => {
      const url = `https://www.drivebc.ca/api/weather/observations?format=json`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherStationsList(data)
    }
    getWeather();
  }, [])

  useEffect(() => {
    function getStation(station) {
      return station.station.name === weatherStation;
    }
    const selectedWeatherStation = weatherStationsList.find(getStation);
    setSelectedStation(selectedWeatherStation)
  }, [selectedStation, weatherStation, weatherStationsList]);
  const name = selectedStation && selectedStation.station && selectedStation.station.name;
  const snow = selectedStation && selectedStation.station && selectedStation.station.snowDepth;

  return (
    <div>
      <form>
        <label htmlFor="station">
          Weather Station
        <select
            id="station"
            value={weatherStation}
            onChange={e => setWeatherStation(e.target.value)}
            onBlur={e => setWeatherStation(e.target.value)}>
            <option>Select Station...</option>
            {weatherStationsList.map(station => (
              <option key={station.station.id} value={station.station.name}
              >
                {station.station.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <h2>{name}</h2>
      <h2>{snow}</h2>
    </div>
  )
}