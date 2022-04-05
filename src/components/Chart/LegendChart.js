import React from "react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { data } from './ChartData';
const LegendChart = () => {
  return (
    <>
    <h2 className="uppercase text-xl text-green_light my-8">Monthly investment vs revenue with LineChart</h2>
    <LineChart

      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Line name="pv of pages" type="monotone" dataKey="investment" stroke="#8884d8" />
      <Line name="uv of pages" type="monotone" dataKey="revenue" stroke="#82ca9d" />
    </LineChart>
    </>
  );
};

export default LegendChart;
