import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import size from "../styles/size";
import colors from '../styles/colors';
import { StationDetails } from '../components/StationDetails';
import { calNewSnowLastDay } from '../utils/calNewSnowLastDay';
import { Chart } from '../components/Chart';

const Container = styled("main")`
    flex: 1;
    grid-area: main;
    padding: ${size.spacing};
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    background-color: ${colors.main};

    .dashboard {
      --column-count: 4;
      display: grid;
      grid-template-columns: repeat(var(--column-count), 1fr);
      grid-gap: ${size.spacing};
    }

    .column-item {
      --column-count: 4;
      flex-basis: calc(100%/var(--column-count));
      grid-column-end: span 1;
    }

    .card {
      height: 100%;
      padding: 1rem;
      font-size: 2rem;
      font-weight: 300;
      background-color: ${colors.card};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .item-column {
      flex: 1 1 50%;
      grid-column-end: span 1;
      padding: calc(var(${size.spacing}) / 2);
    }

    .item-full {
      flex-basis: 100%;
      grid-column: 1 / -1;
    }
`
export const Main = () => {
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
      setCoqSummitStationData(data);
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
    <Container>
      <div className="dashboard">
        <div className="item-column">
          <div className="card">
            <StationDetails
              name={coqSummitName}
              elevation={coqSummitElevation}
              temp={coqSummitTemp}
              newSnow={coqSummitNewSnow}
              snowDepth={coqSummitSnowDepth} />
          </div>
        </div>
        <div className="item-column">
          <div className="card">
            <StationDetails
              name={littleBearName}
              elevation={littleBearElevation}
              temp={littleBearTemp}
              newSnow={littleBearNewSnow}
              snowDepth={littleBearSnowDepth} />
          </div>
        </div>
        <div className="item-column">
          <div className="card">

          </div>
        </div>
        <div className="item-column">
          <div className="card">

          </div>
        </div>
        <div className="item-full">
          <div className="card">
            <Chart />
          </div>
        </div>
      </div >
    </Container >
  )
}