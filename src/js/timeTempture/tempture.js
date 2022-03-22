import React from 'react';
import ReactDOM from 'react-dom';
import { scaleBand, scaleLinear, extent, scaleTime, timeFormat, timeDay } from 'd3';
import { useData } from './useData';
import { Marks } from './Marks';
import { AxisLeft } from './AxisLeft';
import { AxisBottom } from './AxisBottom';

/* scaleTime 是 scaleLinear 的一種變化
  scaleTime.domain(new Date(2000, 0, 1))..，domain 裡的參數必須要是一個 js Date 物件
*/
const width = 960;
const height = 500;
const margin = {
  top: 20, left: 60, right: 20, bottom: 20,
};
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const xValue = (d) => d.timestamp;
const yValue = (d) => d.temperature;
const formatWeek = timeFormat('%a');

const App = () => {
  const data = useData();
  if (!data) {
    return <h1>Loading</h1>
  }
  console.log(data);

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();
  console.log(extent(data.map(yValue)));
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice();
  // 因為 svg 原點在左上角，所以 y 軸實際上數值越小的會為往下移動 y，
  // 所以這邊 range 寫成 [innerHeight, 0]

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} />
        <AxisBottom xScale={xScale} innerHeight={innerHeight} formatWeek={formatWeek} />
        <Marks
          xScale={xScale}
          yScale={yScale}
          data={data}/>
      </g>
    </svg>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
