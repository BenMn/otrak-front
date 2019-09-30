import React from 'react';

import {
  AreaChart, Area,
} from 'recharts';

import '../Dashboard.scss';

function randomChartValue() {
  return Math.floor((Math.random() * 1000) + 300);
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
      style={{ margin: '-2vh 0 1vh -3vw' }}
      width={500}
      height={70}
      data={data}
      margin={{
        top: 5, right: 0, left: 0, bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="20%" stopColor="#fff" stopOpacity={1} />
          <stop offset="97%" stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="fillLight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="20%" stopColor="#c54949" stopOpacity={1} />
          <stop offset="97%" stopColor="#c54949" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="uv" stroke="url(#stroke)" fillOpacity={1} fill="url(#fillLight)" />
    </AreaChart>
    <p className="stats-subText">Total watchtime per day</p>

    <AreaChart
      style={{ margin: '0 0 1vh -3vw' }}
      width={500}
      height={70}
      data={data}
      margin={{
        top: 5, right: 0, left: 0, bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="20%" stopColor="#fff" stopOpacity={1} />
          <stop offset="97%" stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="fillMain" x1="0" y1="0" x2="1" y2="0">
          <stop offset="20%" stopColor="#b71c1c" stopOpacity={1} />
          <stop offset="97%" stopColor="#b71c1c" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="pv" stroke="url(#stroke)" fillOpacity={1} fill="url(#fillMain)" />
    </AreaChart>
    <p className="stats-subText">Total episodes watched per week</p>

    <AreaChart
      style={{ margin: '0 0 1vh -3vw' }}
      width={500}
      height={70}
      data={data}
      margin={{
        top: 5, right: 0, left: 0, bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="20%" stopColor="#fff" stopOpacity={1} />
          <stop offset="97%" stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="fillDark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="20%" stopColor="#701313" stopOpacity={1} />
          <stop offset="97%" stopColor="#701313" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="amt" stroke="url(#stroke)" fillOpacity={1} fill="url(#fillDark)" />
    </AreaChart>
    <p className="stats-subText">Total seasons finished per month</p>
  </>
);

export default Charts;
