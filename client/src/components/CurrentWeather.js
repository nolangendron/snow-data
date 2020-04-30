import React, { useState, useEffect } from 'react';
import { StationDetails } from "./StationDetails";

export const CurrentWeather = () => {
  const [coqSummitStationData, setCoqSummitStationData] = useState([]);
  const [littleBearStationData, setLittleBearStationData] = useState([]);
  const [newSnow, setNewSnow] = useState({
    coqSummit: null,
    littleBear: null
  });

  useEffect(() => {
    const getWeather = async (station) => {

      const url = `https://wx.avalanche.ca/stations/${station}/measurements/`;
      const response = await fetch(url);
      const data = await response.json();
      setCoqSummitStationData(data)
    }
    getWeather(15);

  }, [])

  useEffect(() => {
    const getWeather = async (station) => {

      const url = `https://wx.avalanche.ca/stations/${station}/measurements/`;
      const response = await fetch(url);
      const data = await response.json();
      setLittleBearStationData(data)
    }
    getWeather(17);
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

  const coqSummitName = "Coquihalla Summit";
  const coqSummitElevation = "Elevation: 1230 m"
  const coqSummitStation = coqSummitStationData && coqSummitStationData[1];
  const coqSummitTemp = coqSummitStation && coqSummitStation.airTempAvg;
  const coqSummitNewSnow = newSnow && newSnow.coqSummit;
  const coqSummitSnowDepth = coqSummitStation && coqSummitStation.snowHeight;

  const littleBearName = "Little Bear";
  const littleBearElevation = "Elevation: 1660 m"
  const littleBearStation = littleBearStationData && littleBearStationData[1];
  const littleBearTemp = littleBearStation && littleBearStation.airTempAvg;
  const littleBearNewSnow = newSnow && newSnow.littleBear;
  const littleBearSnowDepth = littleBearStation && littleBearStation.snowHeight;

  return (
    <div>
      <StationDetails
        name={coqSummitName}
        elevation={coqSummitElevation}
        temp={coqSummitTemp}
        newSnow={coqSummitNewSnow}
        snowDepth={coqSummitSnowDepth} />
      <StationDetails
        name={littleBearName}
        elevation={littleBearElevation}
        temp={littleBearTemp}
        newSnow={littleBearNewSnow}
        snowDepth={littleBearSnowDepth} />
    </div>
  )
}