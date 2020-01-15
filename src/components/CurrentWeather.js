import React, { useState, useEffect } from 'react';

export const CurrentWeather = () => {
  const [coqSummitStationData, setCoqSummitStationData] = useState([]);
  const [littleBearStationData, setLittleBearStationData] = useState([]);
  const [newSnow, setNewSnow] = useState({
    coqSummit: null,
    littleBear: null
  });


  useEffect(() => {
    const getWeather = async () => {

      const url = `https://wx.avalanche.ca/stations/15/measurements/`;
      const response = await fetch(url);
      const data = await response.json();
      setCoqSummitStationData(data)
    }
    getWeather();
  }, [])

  useEffect(() => {
    const getWeather = async () => {

      const url = `https://wx.avalanche.ca/stations/17/measurements/`;
      const response = await fetch(url);
      const data = await response.json();
      setLittleBearStationData(data)
    }
    getWeather();
  }, [])

  useEffect(() => {
    const lastDaySnowCoqSum = coqSummitStationData.slice(0, 23);
    const newSnowCoqSum = lastDaySnowCoqSum.map((day) => {
      return day.snowHeight;
    })
    const lastDaySnowLitBea = littleBearStationData.slice(0, 23);
    const newSnowLitBear = lastDaySnowLitBea.map((day) => {
      return day.snowHeight;
    })
    console.log(newSnowLitBear)

    const calNewSnowLastDay = (data) => {
      let snow = data[0];
      let newSnowArray = [];
      let difference;
      for (let i = 0; i < data.length; i++) {
        if (data[i] < snow && !undefined) {
          difference = snow - data[i];
          newSnowArray.push(difference);
        }
        snow = data[i];
      }
      return newSnowArray;
    }
    const getNewSnowCoqSum = calNewSnowLastDay(newSnowCoqSum);
    const getNewSnowLitBea = calNewSnowLastDay(newSnowLitBear)
    const sumNewSnowCoq = getNewSnowCoqSum.reduce((a, b) => a + b, 0);
    const sumNewSnowLitBea = getNewSnowLitBea.reduce((a, b) => a + b, 0);

    setNewSnow({ coqSummit: sumNewSnowCoq, littleBear: sumNewSnowLitBea });
  }, [coqSummitStationData, littleBearStationData])

  const coqSummitStation = coqSummitStationData && coqSummitStationData[1];
  const coqSummitTemp = coqSummitStation && coqSummitStation.airTempAvg;
  const coqSummitNewSnow = newSnow && newSnow.coqSummit;
  const coqSummitSnowDepth = coqSummitStation && coqSummitStation.snowHeight;

  const littleBearStation = littleBearStationData && littleBearStationData[1];
  const littleBearTemp = littleBearStation && littleBearStation.airTempAvg;
  const littleBearNewSnow = newSnow && newSnow.littleBear;
  const littleBearSnowDepth = littleBearStation && littleBearStation.snowHeight;

  return (
    <div>
      <div>
        <h2>Coquihalla Summit</h2>
        <h2>Elevation: 1230 m</h2>
        <h2>Current Temp: {coqSummitTemp} {String.fromCharCode(176)}C</h2>
        <h2>New Snow Past 24hr: {coqSummitNewSnow} cm</h2>
        <h2>Snow Depth: {coqSummitSnowDepth} cm</h2>
      </div>
      <div>
        <h2>Little Bear</h2>
        <h2>Elevation: 1660 m</h2>
        <h2>Current Temp: {littleBearTemp} {String.fromCharCode(176)}C</h2>
        <h2>New Snow Past 24hr: {littleBearNewSnow} cm</h2>
        <h2>Snow Depth: {littleBearSnowDepth} cm</h2>
      </div>
    </div>
  )
}