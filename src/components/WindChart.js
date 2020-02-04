import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Doughnut } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const Wind = styled("div")` 
display: flex;
position: relative;
height: 100%;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: center;
background: #fff;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

.locationArrow {
  position: absolute;
  margin-top: 140px;
  transform: rotate(-45deg);
}

`

const data = {
  datasets: [{
    labels: ["Red", "Blue"],
    data: [0, 360],
    backgroundColor: [
      "rgb(255, 99, 132)",
      "rgb(54, 162, 235)",
      "rgb(255, 205, 86)"
    ]
  }]
}

const options = {

  circumference: Math.PI * 2,
  rotation: Math.PI,
  cutoutPercentage: 80, // precent
  plugins: {
    datalabels: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderColor: '#ffffff',
      align: 'start',
      anchor: 'start',
      offset: 10,
      borderRadius: 4,
      borderWidth: 1,
      formatter: function (value, context) {
        var i = context.dataIndex;
        var len = context.dataset.data.length - 1;
        if (i === len) {
          return null;
        }
        return value + ' mph';
      }
    }
  },
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  }
}

export const WindChart = ({ wind }) => {
  const { upperStationWindDirection, upperStationWindSpeed, lowerStationWindDirection, lowerStationWindSpeed } = wind;

  const [rotation, setRotation] = useState({
    rotate: false,
    degree: 0
  });

  const windDirectionLastTwoDays = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      setTimeout(function timer() {
        setRotation({
          degree: arr1[i],
        })
        data.datasets[0].data = [arr2[i] * 5, 360]
      }, i * 200);
    }
  }


  return (
    <Wind>
      <Doughnut data={data} options={options} />
      <FontAwesomeIcon className='locationArrow' transform={{ rotate: rotation.degree }} size='3x' color='red' icon={faLocationArrow} />
      <div>
        <button onClick={() => windDirectionLastTwoDays(upperStationWindDirection, upperStationWindSpeed)}>click</button>
      </div>
      <div>
        <h3>{data.datasets[0].data[0] / 5} km/h</h3>
      </div>

    </Wind >
  )
}

