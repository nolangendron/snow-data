import React from 'react';
import { Line } from 'react-chartjs-2';

export const Chart = ({ data }) => {

  return (
    <div className="chart">
      <Line
        data={data}
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