import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import size from "../styles/size";
import colors from '../styles/colors';
import { StationDetails } from '../components/StationDetails';
import { calNewSnowLastDay } from '../utils/calNewSnowLastDay';
import { Chart } from '../components/Chart';
import littleBearData from '../data/littleBearData.json';
import coqSummitData from '../data/coqSummitData.json';

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
    coqSummitLastDay: null,
    coqSummitLastTwoDay: null,
    coqSummitLastWeek: null,
    littleBearLastDay: null,
    littleBearLastTwoDay: null,
    littleBearLastWeek: null,
  });
  const [historicSnowData, setHistoricSnowData] = useState(
    {
      data: {
        labels: [],
        datasets: [
          { label: "", fill: false, backgroundColor: "", data: [] },
          { label: "", fill: false, backgroundColor: "", data: [] }
        ]
      }
    }
  )
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
      console.log(data)
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
    const lastTwoDaySnowCoqSum = coqSummitStationData.slice(0, 47);
    const newTwoDaySnowCoqSum = lastTwoDaySnowCoqSum.map((day) => {
      return day.snowHeight;
    })
    const lastTwoDaySnowLitBea = littleBearStationData.slice(0, 47);
    const newTwoDaySnowLitBear = lastTwoDaySnowLitBea.map((day) => {
      return day.snowHeight;
    })
    const lastWeekSnowCoqSum = coqSummitStationData.slice(0, 160);
    const newLastWeekSnowCoqSum = lastWeekSnowCoqSum.map((day) => {
      return day.snowHeight;
    })
    const lastWeekSnowLitBea = littleBearStationData.slice(0, 160);
    const newLastWeekSnowLitBear = lastWeekSnowLitBea.map((day) => {
      return day.snowHeight;
    })

    const getNewSnowCoqSum = calNewSnowLastDay(newSnowCoqSum);
    const getNewSnowLitBea = calNewSnowLastDay(newSnowLitBear);
    const getNewTwoSnowCoqSum = calNewSnowLastDay(newTwoDaySnowCoqSum);
    const getNewTwoSnowLitBea = calNewSnowLastDay(newTwoDaySnowLitBear);
    const getNewLastWeekSnowCoqSum = calNewSnowLastDay(newLastWeekSnowCoqSum);
    const getNewLastWeekSnowLitBea = calNewSnowLastDay(newLastWeekSnowLitBear);
    const sumNewSnowCoq = getNewSnowCoqSum.reduce((a, b) => a + b, 0);
    const sumNewSnowLitBea = getNewSnowLitBea.reduce((a, b) => a + b, 0);
    const sumNewTwoDaySnowCoq = getNewTwoSnowCoqSum.reduce((a, b) => a + b, 0);
    const sumNewTwoDaySnowLitBea = getNewTwoSnowLitBea.reduce((a, b) => a + b, 0);
    const sumNewLastWeekSnowCoq = getNewLastWeekSnowCoqSum.reduce((a, b) => a + b, 0);
    const sumNewLastWeekSnowLitBea = getNewLastWeekSnowLitBea.reduce((a, b) => a + b, 0);

    setNewSnow({ coqSummitLastDay: sumNewSnowCoq, coqSummitLastTwoDay: sumNewTwoDaySnowCoq, coqSummitLastWeek: sumNewLastWeekSnowCoq, littleBearLastDay: sumNewSnowLitBea, littleBearLastTwoDay: sumNewTwoDaySnowLitBea, littleBearLastWeek: sumNewLastWeekSnowLitBea });
  }, [coqSummitStationData, littleBearStationData])

  useEffect(() => {
    const getSnowPackData = (arr) => {
      const dataArray = [];
      const dateArray = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].date.charAt(11) === "2" && arr[i].date.charAt(12) === "3") {
          dateArray.push(arr[i].date.slice(0, 10))
          dataArray.push(arr[i].snowpack);
        }
      }
      return { dataArray, dateArray };
    };
    const littleBearSnowData = getSnowPackData(littleBearData);
    const coqSummitSnowData = getSnowPackData(coqSummitData);
    setHistoricSnowData({
      data: {
        labels: coqSummitSnowData.dateArray,
        datasets: [{ label: "1220m", backgroundColor: "#50D8D7", data: coqSummitSnowData.dataArray }, { label: "1660m", backgroundColor: "#547AA5", data: littleBearSnowData.dataArray }]
      }
    })
  }, [])

  const coqSummitName = "Coquihalla Summit";
  const coqSummitElevation = "1230 m"
  const coqSummitStation = coqSummitStationData && coqSummitStationData[0];
  const coqSummitTemp = coqSummitStation && coqSummitStation.airTempAvg;
  const coqSummitNewSnowLastDay = newSnow && newSnow.coqSummitLastDay;
  const coqSummitNewSnowLastTwoDay = newSnow && newSnow.coqSummitLastTwoDay;
  const coqSummitNewSnowLastWeek = newSnow && newSnow.coqSummitLastWeek;
  const coqSummitSnowDepth = coqSummitStation && coqSummitStation.snowHeight;

  const littleBearName = "Little Bear";
  const littleBearElevation = "1660 m"
  const littleBearStation = littleBearStationData && littleBearStationData[0];
  const littleBearTemp = littleBearStation && littleBearStation.airTempAvg;
  const littleBearNewSnowLastDay = newSnow && newSnow.littleBearLastDay;
  const littleBearNewSnowTwoDay = newSnow && newSnow.littleBearLastTwoDay;
  const littleBearNewSnowLastWeek = newSnow && newSnow.littleBearLastWeek;
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
              newSnowLastDay={coqSummitNewSnowLastDay}
              newSnowLastTwoDay={coqSummitNewSnowLastTwoDay}
              newSnowLastWeek={coqSummitNewSnowLastWeek}
              snowDepth={coqSummitSnowDepth} />
          </div>
        </div>
        <div className="item-column">
          <div className="card">
            <StationDetails
              name={littleBearName}
              elevation={littleBearElevation}
              temp={littleBearTemp}
              newSnowLastDay={littleBearNewSnowLastDay}
              newSnowLastTwoDay={littleBearNewSnowTwoDay}
              newSnowLastWeek={littleBearNewSnowLastWeek}
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
            <Chart data={historicSnowData.data} />
          </div>
        </div>
      </div >
    </Container >
  )
}