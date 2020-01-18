import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import littleBEarData from '../data/littleBearData.json';

export const Chart = () => {
  const [snowData, setSnowData] = useState({
    labels: [],
    datasets: [
      { data: [] }
    ]
  })
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
    const historicSnowData = getSnowPackData(coqSummitData);
    setSnowData({
      labels: historicSnowData.dateArray,
      datasets: [{ data: historicSnowData.dataArray }
      ]
    })
  }, [])

  return (
    <div className="chart">
      <Line
        data={snowData}
        options={{
          title: {
            display: true,
            text: "Snow Depth for the Coquihalla Area"
          }
        }
        } />
    </div>
  );
};