import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import size from "../styles/size";
import colors from '../styles/colors';
import { StationDetails } from '../components/StationDetails';

const Container = styled("main")`
    flex: 1;
    grid-area: main;
    padding: ${size.spacing};
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    background-color: ${colors.main};
`
const Dasboard = styled("div")`
  --column-count: 2;
  display: grid;
  grid-template-columns: repeat(var(--column-count), 1fr);
  grid-gap: ${size.spacing};
`
const Item = styled("div")`
   flex: 1 1 50%;
    grid-column-end: span 2;
    padding: calc(var(${size.spacing}) / 2);
`
const Card = styled("div")`
  height: 100%;
  padding: 1rem;
  font-size: 2rem;
  font-weight: 300;
  background-color: ${colors.card};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`
const ItemFull = styled("div")`
flex-basis: 100%;
grid-column: 1 / -1;
`

const Col = styled("div")`
  --column-count: 2;
  flex-basis: calc(100% / var(--column-count));
  grid-column-end: span 1;
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
    <Container>
      <Dasboard>
        <Col>
          <Card>
            <StationDetails
              name={coqSummitName}
              elevation={coqSummitElevation}
              temp={coqSummitTemp}
              newSnow={coqSummitNewSnow}
              snowDepth={coqSummitSnowDepth} />
          </Card>
        </Col>
        <Col>
          <Card>
            <StationDetails
              name={littleBearName}
              elevation={littleBearElevation}
              temp={littleBearTemp}
              newSnow={littleBearNewSnow}
              snowDepth={littleBearSnowDepth} />
          </Card>
        </Col>
        <Col>
          <Card>Coq Chart</Card>
        </Col>
        <Col>
          <Card>Bear Chart</Card>
        </Col>
        <Item>
          <Card>
            <strong>Map</strong>
          </Card>
        </Item>
      </Dasboard >
    </Container >
  )
}