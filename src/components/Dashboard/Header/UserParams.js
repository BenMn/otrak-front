import React from 'react';

import {
  AreaChart, Area,
} from 'recharts';

function randomChartValue() {
  return Math.floor((Math.random() * 1000) + 100);
}

const data = [
  {
    uv: randomChartValue(), pv: randomChartValue(), amt: randomChartValue(),
  },
  {
    uv: randomChartValue(), pv: randomChartValue(), amt: randomChartValue(),
  },
  {
    uv: randomChartValue(), pv: randomChartValue(), amt: randomChartValue(),
  },
  {
    uv: randomChartValue(), pv: randomChartValue(), amt: randomChartValue(),
  },
  {
    uv: randomChartValue(), pv: randomChartValue(), amt: randomChartValue(),
  },
  {
    uv: randomChartValue(), pv: randomChartValue(), amt: randomChartValue(),
  },
  {
    uv: randomChartValue(), pv: randomChartValue(), amt: randomChartValue(),
  },
];

const Charts = () => (
  <>
    <AreaChart
      style={{ margin: '-4vh 0 1vh -3vw' }}
      width={700}
      height={65}
      data={data}
      margin={{
        top: 10, right: 0, left: 0, bottom: 0,
      }}
    >
      <Area type="monotone" dataKey="uv" stroke="#fff" fill="#c54949" />
    </AreaChart>
    Total watchtime per day

    <AreaChart
      style={{ margin: '0 0 1vh -3vw' }}
      width={700}
      height={65}
      data={data}
      margin={{
        top: 10, right: 0, left: 0, bottom: 0,
      }}
    >
      <Area type="monotone" dataKey="pv" stroke="#fff" fill="#b71c1c" />
    </AreaChart>
    Total episodes watched per week

    <AreaChart
      style={{ margin: '0 0 1vh -3vw' }}
      width={700}
      height={65}
      data={data}
      margin={{
        top: 10, right: 0, left: 0, bottom: 0,
      }}
    >
      <Area type="monotone" dataKey="amt" stroke="#fff" fill="#801313" />
    </AreaChart>
    Total seasons finished per month
  </>
);

export default Charts;
