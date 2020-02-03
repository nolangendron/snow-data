import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from "@emotion/styled";
import size from "../styles/size";
import colors from '../styles/colors';
import { WeatherDetailsList } from './WeatherDetailsList';
import { SnowDetails } from './SnowDetails';
import { calNewSnowLastDay } from '../utils/calNewSnowLastDay';
import { Chart } from '../components/Chart';
import { stationNumbers } from '../data/weatherStationDetails';

const Container = styled("main")`
    flex: 1;
    grid-area: main;
    padding: ${size.spacing};
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    background-color: ${colors.main};

    .dashboard {
      --column-count: 3;
      display: grid;
      grid-template-columns: repeat(var(--column-count), 1fr);
      grid-gap: ${size.spacing};
    }

    .column-item {
      --column-count: 3;
      flex-basis: calc(100%/var(--column-count));
      grid-column-end: span 1;
    }

    .item-column {
      flex: 1 1 50%;
      grid-column-end: span 1;
      padding: calc(var(${size.spacing}) / 2);
    }

    .item-half {
      flex: 1 1 50%;
      height: 310px;
      grid-column-end: span 2;
      padding: calc(var(${size.spacing}) / 2);
    }

    .item-full {
      flex-basis: 100%;
      grid-column: 1 / -1;
    }
`
const Main = (props) => {
  const { name } = props;

  const [lowerStationData, setLowerStationData] = useState([]);
  const [upperStationData, setUpperStationData] = useState([]);
  const [newSnow, setNewSnow] = useState({
    lowerStationLastDay: null,
    lowerStationLastTwoDay: null,
    lowerStationLastWeek: null,
    upperStationLastDay: null,
    upperStationLastTwoDay: null,
    upperStationLastWeek: null,
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
  const lowerWeather = name && stationNumbers[name].lower;

  useEffect(() => {
    const getWeather = async (station) => {

      const url = `https://wx.avalanche.ca/stations/${station}/measurements/`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setLowerStationData(data);
    }

    getWeather(lowerWeather);

  }, [lowerWeather])

  const upperWeather = name && stationNumbers[name].upper;
  useEffect(() => {
    const getWeather = async (station) => {

      const url = `https://wx.avalanche.ca/stations/${station}/measurements/`;
      const response = await fetch(url);
      const data = await response.json();
      setUpperStationData(data)
    }

    getWeather(upperWeather);

  }, [upperWeather])

  useEffect(() => {
    const lastDaySnowLowerStation = lowerStationData.slice(0, 23);
    const newSnowLowerStation = lastDaySnowLowerStation.map((day) => {
      return day.snowHeight;
    })
    const lastDaySnowUpperStation = upperStationData.slice(0, 23);
    const newSnowUpperStation = lastDaySnowUpperStation.map((day) => {
      return day.snowHeight;
    })
    const lastTwoDaySnowLowerStation = lowerStationData.slice(0, 47);
    const newTwoDaySnowLowerStation = lastTwoDaySnowLowerStation.map((day) => {
      return day.snowHeight;
    })
    const lastTwoDaySnowUpperStation = upperStationData.slice(0, 47);
    const newTwoDaySnowUpperStation = lastTwoDaySnowUpperStation.map((day) => {
      return day.snowHeight;
    })
    const lastWeekSnowLowerStation = lowerStationData.slice(0, 160);
    const newLastWeekSnowLowerStation = lastWeekSnowLowerStation.map((day) => {
      return day.snowHeight;
    })
    const lastWeekSnowUpperStation = upperStationData.slice(0, 160);
    const newLastWeekSnowUpperStation = lastWeekSnowUpperStation.map((day) => {
      return day.snowHeight;
    })

    const getNewSnowLowerStation = calNewSnowLastDay(newSnowLowerStation);
    const getNewSnowUpperStation = calNewSnowLastDay(newSnowUpperStation);
    const getNewTwoSnowLowerStation = calNewSnowLastDay(newTwoDaySnowLowerStation);
    const getNewTwoSnowUpperStation = calNewSnowLastDay(newTwoDaySnowUpperStation);
    const getNewLastWeekSnowLowerStation = calNewSnowLastDay(newLastWeekSnowLowerStation);
    const getNewLastWeekSnowUpperStation = calNewSnowLastDay(newLastWeekSnowUpperStation);
    const sumNewSnowLowerStation = getNewSnowLowerStation.reduce((a, b) => a + b, 0);
    const sumNewSnowUpperStation = getNewSnowUpperStation.reduce((a, b) => a + b, 0);
    const sumNewTwoDaySnowLowerStation = getNewTwoSnowLowerStation.reduce((a, b) => a + b, 0);
    const sumNewTwoDaySnowUpperStation = getNewTwoSnowUpperStation.reduce((a, b) => a + b, 0);
    const sumNewLastWeekSnowLowerStation = getNewLastWeekSnowLowerStation.reduce((a, b) => a + b, 0);
    const sumNewLastWeekSnowUpperStation = getNewLastWeekSnowUpperStation.reduce((a, b) => a + b, 0);

    setNewSnow({
      lowerStationLastDay: sumNewSnowLowerStation,
      lowerStationLastTwoDay: sumNewTwoDaySnowLowerStation,
      lowerStationLastWeek: sumNewLastWeekSnowLowerStation,
      upperStationLastDay: sumNewSnowUpperStation,
      upperStationLastTwoDay: sumNewTwoDaySnowUpperStation,
      upperStationLastWeek: sumNewLastWeekSnowUpperStation
    });
  }, [lowerStationData, upperStationData])

  const lowerSeasonData = name && stationNumbers[name].seasonDataLower;
  const upperSeasonData = name && stationNumbers[name].seasonDataUpper;
  const lowerLabel = name && stationNumbers[name].elevationLower;
  const upperLabel = name && stationNumbers[name].elevationUpper;
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
    const upperSnowData = getSnowPackData(upperSeasonData);
    const lowerSnowData = getSnowPackData(lowerSeasonData);
    setHistoricSnowData({
      data: {
        labels: lowerSnowData.dateArray,
        datasets: [
          {
            label: lowerLabel,
            backgroundColor: "#50D8D7",
            data: lowerSnowData.dataArray
          },
          {
            label: upperLabel,
            backgroundColor: "#547AA5",
            data: upperSnowData.dataArray
          }]
      }
    })
  }, [lowerLabel, lowerSeasonData, upperLabel, upperSeasonData])

  const lowerStationName = name && stationNumbers[name].nameLower;
  const lowerStationElevation = name && stationNumbers[name].elevationLower;
  const lowerStation = lowerStationData && lowerStationData[0];
  const lowerStationTemp = lowerStation && lowerStation.airTempAvg;
  const lowerStationNewSnowLastDay = newSnow && newSnow.lowerStationLastDay;
  const lowerStationNewSnowLastTwoDay = newSnow && newSnow.lowerStationLastTwoDay;
  const lowerStationNewSnowLastWeek = newSnow && newSnow.lowerStationLastWeek;
  const lowerStationSnowDepth = lowerStation && lowerStation.snowHeight;

  const upperStationName = name && stationNumbers[name].nameUpper;
  const upperStationElevation = name && stationNumbers[name].elevationUpper;
  const upperStation = upperStationData && upperStationData[0];
  const upperStationTemp = upperStation && upperStation.airTempAvg;
  const upperStationNewSnowLastDay = newSnow && newSnow.upperStationLastDay;
  const upperStationNewSnowTwoDay = newSnow && newSnow.upperStationLastTwoDay;
  const upperStationNewSnowLastWeek = newSnow && newSnow.upperStationLastWeek;
  const upperStationSnowDepth = upperStation && upperStation.snowHeight;

  return (
    <Container>
      <div className="dashboard">
        <div className="item-column">
          {/* <div className="card"> */}
          <WeatherDetailsList
            highElevationName={upperStationName}
            highElevation={upperStationElevation}
            lowElevationName={lowerStationName}
            lowElevation={lowerStationElevation}
            highTemp={upperStationTemp}
            lowTemp={lowerStationTemp} />
        </div>
        <div className="item-half">
          <SnowDetails
            lowElevationName={lowerStationName}
            lowElevation={lowerStationElevation}
            newSnowLastDayLower={lowerStationNewSnowLastDay}
            newSnowLastTwoDayLower={lowerStationNewSnowLastTwoDay}
            newSnowLastWeekLower={lowerStationNewSnowLastWeek}
            snowDepthLower={lowerStationSnowDepth}
            highElevationName={upperStationName}
            highElevation={upperStationElevation}
            newSnowLastDayUpper={upperStationNewSnowLastDay}
            newSnowLastTwoDayUpper={upperStationNewSnowTwoDay}
            newSnowLastWeekUpper={upperStationNewSnowLastWeek}
            snowDepthUpper={upperStationSnowDepth} />
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

const mapStateToProps = (state) => {
  const { areaReducer } = state;
  return areaReducer;
};
export default connect(mapStateToProps)(Main);